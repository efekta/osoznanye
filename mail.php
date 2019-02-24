<?php
/* Article FructCode.com */
if (isset($_POST["phonenumber"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'phonenumber' => $_POST["phonenumber"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>
