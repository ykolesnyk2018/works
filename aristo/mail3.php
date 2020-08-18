<?php
error_reporting(-1);
ini_set('display_errors', 'On');

$to      = 'n3833238@outlook.com';
$subject = 'the subject';


$message = "Текст";

$headers = 'From: jujesu@astonio.by' . "\r\n" .
    'Reply-To: jujesu@astonio.by' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)){
    echo "ok";
}
else{
    echo "bad";
}