<?php

$recepient = "team@reviewss.me";
$sitename = "Reviews";

$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$message = "E-mail: $email \n телефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");