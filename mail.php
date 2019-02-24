<?

if(isset($_POST)){
    $email = 'paulzotoff@yandex.ru';
    // Validate the input
    function input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    };
    
    $phone =  input($_POST['form_phone']);
    
    // Email template
	$msg = "<h3>Письмо с проекта Осознание</h3>";
	$msg .= "<hr/>";
	$msg .= "<p><strong>Телефон: </strong>".$phone."</p>";
	$msg .= "<hr/>";
	$msg .= "<p><em>Письмо было отправлено автоматически. Не отвечайте на него.</em></p>";
	$headers  = "Content-type: text/html; charset= UTF-8 \r\n";
	$headers .= "From: webmaster@ozosnanie.ru \r\n";
	if(mail($email, 'Письмо с проекта Осознание', $msg, $headers)){
        echo 'Письмо отправлено';
    }
}

?>
