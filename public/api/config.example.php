<?php
/**
 * Drop-in mail config for Platte River Orthodontics.
 * Copy this file to ~/private/site-mail.php on the server (outside public_html).
 * lib/mailer.php already loads that path. For local testing, copy it to
 * public/api/config.local.php instead. Never commit real credentials.
 *
 * Fill in recaptcha_secret before the forms go live. Mail uses PHP mail()
 * unless smtp_host, smtp_user, and smtp_pass are all set.
 */
return [
    'recaptcha_secret' => 'YOUR_RECAPTCHA_SECRET_KEY',
    'notify_to' => 'smile@platteriverortho.com',
    'bcc' => ['verifybu@webpro.com', 'nate@newpatientgroup.com'],
    'from_email' => 'noreply@platteriverorthodontics.com',
    'from_name' => 'Platte River Orthodontics',
    'site_url' => 'https://platteriverorthodontics.com',
    'site_phone' => '402-322-8838',
    'site_phone_href' => '+14023228838',
    'timezone' => 'America/Chicago',

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
