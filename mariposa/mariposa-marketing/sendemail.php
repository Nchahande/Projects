<?php
//require_once "recaptchalib.php";
//$secret = "6LcGJhsTAAAAADPuWtlL9ve35OI3QRntnfIMIAf3";
 
// empty response
//$response = null;
 
// check secret key
//$reCaptcha = new ReCaptcha($secret);
if($_POST)
{
	$name			=	$_POST['name'];
	$company		=	$_POST['lastname'];
	$email			=	$_POST['email'];
	$phone			=	$_POST['phone'];
	$message		=	$_POST['message'];
	$email_sender 	= 	"NewUser@f1studioz.com";
	$email_carbon 	= 	"dhayan@f1studioz.com";
	$email 			= 	filter_var($email, FILTER_SANITIZE_EMAIL);
	$headers 		= 	'MIME-Version: 1.0' . "\r\n";
	
	$headers 		.= 	'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers 		.= 	'From:' . $email_sender . "\r\n"; // Sender's Email
	$headers 		.= 	'Cc:' . $email_carbon . "\r\n"; // Carbon copy to Sender
	$template 		= 	'<div style="padding:50px; color:DimGray;">'
	. 'Name:' . $name . '<br/>'
	. 'Last Name:' . $company . '<br/>'
	. 'Email:' . $email . '<br/>'
	. 'Contact No:' . $phone . '<br/>'
	. 'Message:' . $message . '<br/><br/>'
	. '</div>';
	$sendmessage = "<div style=\"background-color:White; color:DimGray;\">" . $template . "</div>";
	// message lines should not exceed 70 characters (PHP rule), so wrap it
	$sendmessage = wordwrap($sendmessage, 70);
	
	if ($response != null && $response->success) {
		mail("dhayan@f1studioz.com", " $name has contacted you Mariposa.care", $sendmessage, $headers);
		echo "<script>window.location = 'http://mariposa.care/'</script>";
	}	else {
		mail("dhayan@f1studioz.com", " $name has contacted you Mariposa.care", $sendmessage, $headers);
		mail($email, " $name has contacted you-Mariposa.care", $sendmessage, $headers); 
		echo "success";exit; 
	}
}
?>
