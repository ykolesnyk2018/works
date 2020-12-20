<?php

$recepient = "ykolesnyk2018@gmail.com";
$sitename = "Название сайта";

$phone = trim($_POST["phone"]);
$message = "Телефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");