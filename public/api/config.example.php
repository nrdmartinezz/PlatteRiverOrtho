<?php
/**
 * Copy to config.local.php for local testing, or to ~/private/site-mail.php
 * on the server (outside public_html). Rename the private file per client project
 * (e.g. peninsula-pavers-mail.php) and update the path in lib/mailer.php.
 * Never commit real credentials.
 *
 * Mail transport: uses PHP mail() by default (like WordPress). Set smtp_host, smtp_user,
 * and smtp_pass to switch to authenticated SMTP — useful when mail() deliverability is poor.
 */
return [
    'recaptcha_secret' => 'YOUR_RECAPTCHA_SECRET_KEY',
    'notify_to' => 'smile@platteriverortho.com',
    // Or as an array. The office address above is always included in code.
    // 'notify_to' => ['smile@platteriverortho.com', 'sales@example.com'],
    'bcc' => ['verifybu@webpro.com', 'nate@newpatientgroup.com'],
    'from_email' => 'noreply@example.com',
    'from_name' => 'Example Business',
    'site_url' => 'https://example.com',
    'site_phone' => '(555) 010-4477',
    'site_phone_href' => '+15550104477',
    'timezone' => 'America/New_York',

    // Optional SMTP — leave blank to use PHP mail() on the host.
    'smtp_host' => '',
    'smtp_port' => 587,
    'smtp_user' => '',
    'smtp_pass' => '',

    'forms' => [
        'contact' => [
            'subject' => 'New enquiry — Platte River Orthodontics',
            'notification' => 'notification-contact.html',
            'send_autoreply' => true,
        ],
        'appointment' => [
            'subject' => 'New appointment request — Platte River Orthodontics',
            'notification' => 'notification.html',
            'send_autoreply' => true,
        ],
        'referral' => [
            'subject' => 'New doctor referral — Platte River Orthodontics',
            'notification' => 'notification.html',
            'send_autoreply' => true,
        ],
    ],

    'recaptcha_min_score' => 0.5,
    'rate_limit_seconds' => 60,
    'rate_limit_max' => 5,

    // Google Places API (New). Leave blank until the key and Place ID are set.
    // The key stays in this private file. Never commit a real key.
    'google_places_api_key' => '',
    'google_place_id' => '',
];
