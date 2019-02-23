<?php
    // $response = $_POST['captcha']; // Checking the captcha response
    // if ($response) {
    // $url_to_google_api = "https://www.google.com/recaptcha/api/siteverify";
    // $secret_key = 'key'; // Secret key from recaptcha
    // $query = $url_to_google_api . '?secret=' . $secret_key . '&response=' . $response;
    // $data = json_decode(file_get_contents($query));
    // if ($data->success) {
	   //      // Working with data if validation was success
	   //      /*mailto*/
			$email = 'mail@google.com';
			$from = 'from@yourwebsite.com';
		 	/*Function to validate the input*/
		 	function validate_input($data) {
			  $data = trim($data);
			  $data = stripslashes($data);
			  $data = htmlspecialchars($data);
			  return $data;
			}
			$name = validate_input($_POST['name']);
			$phone = validate_input($_POST['phone']);
			$text = validate_input($_POST['text']);
	    		//Email template
			$msg = "<h3>Theme</h3>";
			$msg .= "<hr/>";
			$msg .= "<p><strong>Name: </strong>".$name."<p>";
			$msg .= "<p><strong>Phone: </strong>".$phone."</p>";
			$msg .= "<p><strong>Text: </strong>".$text."</p>";
			$msg .= "<hr/>";
			$msg .= "<p><em>Sign</em></p>";
			$headers  = "Content-type: text/html; charset= UTF-8 \r\n";
			$headers .= "From: site@yourwebsite.com \r\n";
			mail($email, 'Letter from website', $msg, $headers);
	    } else {
	        exit('Sorry, but seems like you are a bot \(0_0)/');
	    }
} else {
    exit('You did not pass Recaptcha validation');
}