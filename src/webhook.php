<?php
$data_string = json_encode($_POST);
$key = "e54cbdcd-ca0e-4ad4-90b7-ab26c581428b";

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://webhook.site/".$key);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);
$response = curl_exec ($curl);
curl_close ($curl);
echo $response;
