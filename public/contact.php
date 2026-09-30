<?php
declare(strict_types=1);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request body']);
    exit;
}

$type = isset($data['type']) ? trim((string) $data['type']) : 'contact';
$email = isset($data['email']) ? trim((string) $data['email']) : '';
$name = isset($data['fullName'])
    ? trim((string) $data['fullName'])
    : trim((string) ($data['name'] ?? ''));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Name and valid email are required']);
    exit;
}

$recipient = 'barbara@intentionalimpactconsulting.com';
$subjectPrefix = $type === 'booking' ? 'Booking request' : 'Website message';
$subject = $subjectPrefix . ' from ' . $name;

$lines = [
    'Type: ' . $type,
    'Name: ' . $name,
    'Email: ' . $email,
];

$allowedFields = [
    'phone',
    'helpWith',
    'message',
    'selectedDate',
    'selectedTime',
    'organization',
    'role',
    'topic',
    'goals',
];

foreach ($allowedFields as $field) {
    if (isset($data[$field]) && trim((string) $data[$field]) !== '') {
        $label = preg_replace('/(?<!^)[A-Z]/', ' $0', $field);
        $lines[] = ucwords($label) . ': ' . trim((string) $data[$field]);
    }
}

$body = implode("\n", $lines);
$headers = [
    'From: Intentional Impact Website <no-reply@intentionalimpactconsulting.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail delivery failed']);
    exit;
}

echo json_encode(['ok' => true]);
