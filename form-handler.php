<?php
require "PHPMailer-master/PHPMailerAutoload.php";

//print_r($_REQUEST);

$name = $_POST['name'];
$data = $_POST['data'];

$mydata = $_POST;

if ($name == 'arku' && $data == '123') {
    $mydata['secret'] = 'supersecretdata';
}

$number = file_get_contents('1.txt');
file_put_contents('1.txt', ++$number);
$mydata['number'] = $number;



//$age = rand(15, 30);
//
//echo 'name: '.$name.' '.$age."<br>";
//echo 'data: '.$data;

//mail('asd@asd.ru', 'Hello from loftschool', "Привет из скрипта! Заказ №".$number);



$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
//login - fsdfsdfsdf.05
//password yjdbxrb#123
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'fsdfsdfsdf.05@bk.ru';                 // SMTP username
$mail->Password = 'yjdbxrb#123';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->CharSet = 'UTF-8';
$mail->setFrom('fsdfsdfsdf.05@bk.ru', 'mr. fsd');
$mail->addAddress($_POST['email'], 'Дорогому клиенту');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Ваш заказ сформирован';
$mail->Body    = 'Заказ №33 оплачен и готов к выдаче';
$mail->AltBody = 'Заказ №33 оплачен и готов к выдаче';

if(!$mail->send()) {
    $mydata['status'] = 'Message could not be sent.';
    $mydata['status'] .= 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    $mydata['status'] = 'Message has been sent';
}

echo json_encode($mydata);