<?php

$recepient = "n3833238@outlook.com";
$sitename = "Astonio";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$size = trim($_POST["size"]);
$color = trim($_POST["color"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nE-mail: $email\nРазмер: $size\nЦвет: $color\nКомментарий: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");