<?php

$recepient = "akolesnyk543@gmail.com";
$sitename = "Название сайта";

$type_of_car = trim($_POST["type_of_car"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Тип автомобиля: $type_of_car \nИмя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

$recepient = "akolesnyk543@gmail.com";
$sitename = "Название сайта";

$type_of_car = trim($_POST["type_of_car_2"]);
$name = trim($_POST["name_2"]);
$phone = trim($_POST["phone_2"]);

$message = "Тип автомобиля: $type_of_car_2 \nИмя: $name_2 \nТелефон: $phone_2";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");