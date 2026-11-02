<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reviewsJson(int $status, array $payload, string $cache): never
{
    http_response_code($status);
    header('Cache-Control: ' . $cache);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function loadReviewsConfig(): array
{
    $paths = [
        dirname(__DIR__, 2) . '/private/site-mail.php',
        __DIR__ . '/config.local.php',
    ];

    foreach ($paths as $path) {
        if (is_readable($path)) {
            $config = require $path;
            if (is_array($config)) {
                return $config;
            }
        }
    }

    return [];
}

function cachePath(): string
{
    $private = dirname(__DIR__, 2) . '/private';
    if (is_dir($private) && is_writable($private)) {
        return $private . '/google-reviews.json';
    }

    return sys_get_temp_dir() . '/platte-river-google-reviews.json';
}

function readCache(string $path, int $ttl): ?array
{
    if (!is_readable($path)) {
        return null;
    }

    $raw = file_get_contents($path);
    if ($raw === false) {
        return null;
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded) || !isset($decoded['stored_at'], $decoded['payload']) || !is_array($decoded['payload'])) {
        return null;
    }

    $age = time() - (int) $decoded['stored_at'];
    $decoded['fresh'] = $age >= 0 && $age < $ttl;

    return $decoded;
}

function writeCache(string $path, array $payload): void
{
    $json = json_encode([
        'stored_at' => time(),
        'payload' => $payload,
    ], JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        return;
    }

    file_put_contents($path, $json, LOCK_EX);
}

function publicPayload(array $place): array
{
    $reviews = [];
    foreach (array_slice($place['reviews'] ?? [], 0, 5) as $review) {
        if (!is_array($review)) {
            continue;
        }

        $author = is_array($review['authorAttribution'] ?? null) ? $review['authorAttribution'] : [];
        $text = is_array($review['text'] ?? null) ? (string) ($review['text']['text'] ?? '') : '';
        $reviews[] = [
            'author' => (string) ($author['displayName'] ?? ''),
            'authorUrl' => (string) ($author['uri'] ?? ''),
            'rating' => (float) ($review['rating'] ?? 0),
            'text' => trim($text),
            'relativeTime' => (string) ($review['relativePublishTimeDescription'] ?? ''),
        ];
    }

    return [
        'ok' => true,
        'rating' => (float) ($place['rating'] ?? 0),
        'reviewCount' => (int) ($place['userRatingCount'] ?? 0),
        'mapsUrl' => (string) ($place['googleMapsUri'] ?? ''),
        'reviews' => $reviews,
    ];
}

const TTL = 86400;

$config = loadReviewsConfig();
$apiKey = trim((string) ($config['google_places_api_key'] ?? ''));
$placeId = trim((string) ($config['google_place_id'] ?? ''));

if ($apiKey === '' || !preg_match('/^[A-Za-z0-9_-]{10,}$/', $placeId)) {
    reviewsJson(200, ['ok' => false], 'no-store');
}

$cacheFile = cachePath();
$cached = readCache($cacheFile, TTL);
if ($cached !== null && $cached['fresh'] === true) {
    reviewsJson(200, $cached['payload'], 'public, max-age=3600');
}

if (!function_exists('curl_init')) {
    if ($cached !== null && is_array($cached['payload'])) {
        reviewsJson(200, $cached['payload'], 'public, max-age=300');
    }
    reviewsJson(200, ['ok' => false], 'no-store');
}

$url = 'https://places.googleapis.com/v1/places/' . rawurlencode($placeId);
$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 8,
    CURLOPT_HTTPHEADER => [
        'X-Goog-Api-Key: ' . $apiKey,
        'X-Goog-FieldMask: rating,userRatingCount,reviews,googleMapsUri',
        'Accept: application/json',
    ],
]);
$body = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$decoded = is_string($body) ? json_decode($body, true) : null;
if ($status === 200 && is_array($decoded) && isset($decoded['rating'])) {
    $payload = publicPayload($decoded);
    writeCache($cacheFile, $payload);
    reviewsJson(200, $payload, 'public, max-age=3600');
}

if ($cached !== null && is_array($cached['payload'])) {
    reviewsJson(200, $cached['payload'], 'public, max-age=300');
}

error_log('Google reviews request failed with status ' . $status);
reviewsJson(200, ['ok' => false], 'no-store');
