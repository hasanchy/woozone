<?php

function wzone_generate_ai_description($title, $bullets) {
    // Obținem configurația din WZone Settings
    $config = get_option('save_options'); // sau 'wzone_config', în funcție de versiunea pluginului tău

    // Cheia OpenAI
    $openai_key = isset($config['wzone_openai_api_key']) ? trim($config['wzone_openai_api_key']) : '';

    // Verificăm dacă e setată
    if (empty($openai_key)) {
        error_log('[WZone AI Descriptions] Missing OpenAI API key.');
        return false;
    }

    // Promptul trimis către model
    $prompt = "Scrie o descriere unică și atractivă pentru un produs Amazon cu titlul: \"$title\". Include detalii relevante: " . implode('; ', $bullets);

    $data = [
        "model" => "gpt-4", // sau gpt-3.5-turbo
        "messages" => [
            ["role" => "user", "content" => $prompt]
        ],
        "temperature" => 0.7
    ];

    $response = wp_remote_post("https://api.openai.com/v1/chat/completions", [
        'headers' => [
            'Authorization' => 'Bearer ' . $openai_key,
            'Content-Type'  => 'application/json',
        ],
        'body'    => json_encode($data),
        'timeout' => 20
    ]);

    // Verificare erori HTTP
    if (is_wp_error($response)) {
        error_log('[WZone AI Descriptions] WP_Error: ' . $response->get_error_message());
        return false;
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);

    // Verificare structură răspuns
    if (!isset($body['choices'][0]['message']['content'])) {
        error_log('[WZone AI Descriptions] Invalid response from OpenAI: ' . print_r($body, true));
        return false;
    }

    // Trim item clean
    return trim($body['choices'][0]['message']['content']);
}
