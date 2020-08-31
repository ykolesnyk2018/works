<?php

$recepient = "team@reviewss.me";
$sitename = "Reviews";

$email = trim($_POST["email"]);
$message = "E-mail: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");