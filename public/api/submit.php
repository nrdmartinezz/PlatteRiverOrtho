<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/lib/mailer.php';

function jsonError(int $status, string $message): never
{
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function jsonSuccess(): never
{
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError(405, 'Method not allowed.');
}

$config = loadMailConfig();
if ($config === [] || empty($config['recaptcha_secret']) || empty($config['from_email']) || parseEmailList($config['notify_to'] ?? '') === []) {
    error_log('Form mail config missing or incomplete.');
    jsonError(503, 'Form is temporarily unavailable.');
}

$remoteIp = getClientIp();
if (!checkRateLimit($remoteIp, $config)) {
    jsonError(429, 'Too many submissions. Please try again later.');
}

// Honeypot — silently accept so bots think they succeeded.
if (!empty($_POST['_gotcha'])) {
    jsonSuccess();
}

$recaptchaToken = $_POST['g-recaptcha-response'] ?? '';
$minScore = (float) ($config['recaptcha_min_score'] ?? 0.5);
if (!verifyRecaptcha($recaptchaToken, $config['recaptcha_secret'], $minScore, $remoteIp)) {
    jsonError(400, 'Verification failed. Please refresh and try again.');
}

$formType = trim((string) ($_POST['form_type'] ?? ''));
if (!in_array($formType, allowedFormTypes($config), true)) {
    jsonError(400, 'Invalid form submission.');
}

$formMail = getFormMailSettings($config, $formType);
$fromName = (string) ($config['from_name'] ?? 'Site');

function postedString(string $key): string
{
    return trim((string) ($_POST[$key] ?? ''));
}

function postedList(string $key): string
{
    $raw = $_POST[$key] ?? [];
    if (!is_array($raw)) {
        $raw = [$raw];
    }

    $items = [];
    foreach ($raw as $item) {
        $item = trim((string) $item);
        if ($item !== '') {
            $items[] = $item;
        }
    }

    return implode(', ', $items);
}

/**
 * Pre-escaped table rows for the notification template.
 *
 * @param array<string, string> $pairs
 */
function detailRows(array $pairs): string
{
    $html = '';
    foreach ($pairs as $label => $value) {
        $value = trim($value);
        if ($value === '') {
            continue;
        }

        $html .= '<tr><td style="padding:8px 0;border-bottom:1px solid #e4e4e7">'
            . '<strong style="display:block;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#71717a">'
            . escapeHtml($label)
            . '</strong><span style="font-size:16px;white-space:pre-wrap">'
            . escapeHtml($value)
            . '</span></td></tr>';
    }

    return $html;
}

$name = postedString('name');
$email = postedString('email');
$phone = postedString('phone');
$message = postedString('message');
$hearAbout = postedString('hear_about_us');
$service = postedString('service');

if ($name === '' || $email === '') {
    jsonError(400, 'Please fill in all required fields.');
}

if ($formType === 'contact' && $message === '') {
    jsonError(400, 'Please fill in all required fields.');
}

if ($formType === 'appointment' && $phone === '') {
    jsonError(400, 'Please fill in all required fields.');
}

if ($formType === 'referral' && postedString('patient_name') === '') {
    jsonError(400, 'Please fill in all required fields.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonError(400, 'Please enter a valid email address.');
}

$services = [];
if (isset($_POST['services']) && is_array($_POST['services'])) {
    $rawServices = $_POST['services'];
} elseif (isset($_POST['services'])) {
    $rawServices = [$_POST['services']];
} else {
    $rawServices = [];
}

foreach ($rawServices as $item) {
    $item = trim((string) $item);
    if ($item !== '') {
        $services[] = $item;
    }
}

$formSource = $formMail['source_label'];

$servicesDisplay = '—';
if ($services !== []) {
    $servicesDisplay = implode(', ', $services);
} elseif ($service !== '') {
    $servicesDisplay = $service;
}

$hearAboutDisplay = $hearAbout !== '' ? $hearAbout : '—';
$phoneDisplay = $phone !== '' ? $phone : '—';
if ($message === '') {
    $message = '—';
}

$detailPairs = [
    'Patient status' => postedString('patient_status'),
    'Visit for' => postedString('visit_for'),
    'Preferred time' => postedString('preferred_time'),
    'SMS consent' => postedString('sms_consent'),
    'Patient name' => postedString('patient_name'),
    'Date of birth' => postedString('dob'),
    'Parent name' => postedString('parent_name'),
    'Street' => postedString('street'),
    'City' => postedString('city'),
    'State' => postedString('state'),
    'ZIP' => postedString('zip'),
    'Home phone' => postedString('home_phone'),
    'Insurance' => postedString('insurance'),
    'Concerns' => postedList('concerns'),
    'Call before treatment' => postedString('call_before'),
    'Records sent' => postedString('records_sent'),
];
$details = detailRows($detailPairs);

$timezone = (string) ($config['timezone'] ?? 'America/New_York');
$submittedAt = (new DateTimeImmutable('now', new DateTimeZone($timezone)))->format('M j, Y g:i A T');

$subjectLine = $formMail['subject'];
$autoreplySubject = $formMail['autoreply_subject'];

$templateVars = [
    'subject_line' => escapeHtml($subjectLine),
    'name' => escapeHtml($name),
    'email' => escapeHtml($email),
    'email_raw' => $email,
    'phone' => escapeHtml($phoneDisplay),
    'services' => escapeHtml($servicesDisplay),
    'hear_about_us' => escapeHtml($hearAboutDisplay),
    'message' => escapeHtml($message),
    'details' => $details,
    'form_source' => escapeHtml($formSource),
    'submitted_at' => escapeHtml($submittedAt),
    'sender_ip' => escapeHtml($remoteIp),
    'site_name' => escapeHtml($fromName),
    'site_url' => escapeHtml((string) ($config['site_url'] ?? '')),
    'site_phone' => escapeHtml((string) ($config['site_phone'] ?? '')),
    'site_phone_href' => escapeHtml((string) ($config['site_phone_href'] ?? '')),
];

try {
    $notificationTemplate = resolveTemplateForForm($config, $formType, 'notification');
    $notificationHtml = renderTemplate($notificationTemplate, $templateVars);

    sendMail(
        $config,
        $config['notify_to'],
        $fromName,
        $subjectLine,
        $notificationHtml,
        $email,
        $name,
    );

    if ($formMail['send_autoreply']) {
        $autoreplyTemplate = resolveTemplateForForm($config, $formType, 'autoreply');
        $autoreplyHtml = renderTemplate($autoreplyTemplate, [
            'name' => escapeHtml($name),
            'site_name' => escapeHtml($fromName),
            'site_phone' => escapeHtml((string) ($config['site_phone'] ?? '')),
            'site_phone_href' => escapeHtml((string) ($config['site_phone_href'] ?? '')),
        ]);

        sendMail(
            $config,
            $email,
            $name,
            $autoreplySubject,
            $autoreplyHtml,
            parseEmailList($config['notify_to'])[0],
            $fromName,
        );
    }
} catch (Throwable $e) {
    error_log('Form submission error: ' . $e->getMessage());
    jsonError(500, 'Something went wrong sending your message. Please call us instead.');
}

jsonSuccess();
