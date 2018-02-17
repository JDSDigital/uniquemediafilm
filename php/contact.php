<?php
require 'PHPMailerAutoload.php';

if (isset($_POST['name'])) {
    
    /* Field 1 */
	
    $name = $_POST['name'];
	
    /* Field 2 */
    
    $email = $_POST['email'];
	
    /* Field 3 */
    
    $message = $_POST['message'];
	
    /* Message's Body */
    
    $body = 'Hi,<br><br>'.
			'We have received a new message: <br><br>'.
			'Name: '.$name.'<br><br>'.
			'Email: '.$email.'<br><br>';
	$body .= 'Message: '.$message.'<br><br>';
    
    /* Subject */
    
	$subject_mail = "Important: New Message";

    /* PHPMailer Settings */
    
    $mail = new PHPMailer;
	
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.domain.com';                     // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                              // Enable SMTP authentication
    $mail->Username = 'info@domain.com';        // SMTP username
    $mail->Password = 'xxxxxxxxx';                     // SMTP password
    $mail->Port = 26;                                     // TCP port to connect to

    $mail->From = 'info@domain.com';
    $mail->FromName = 'Notifications';
    $mail->addAddress('support@domain.com', 'Support');  // Add a recipient
    
    $mail->isHTML(true);                                 // Set email format to HTML

    $mail->Subject = $subject_mail;
    $mail->Body    = $body;
	if($mail->Send())
	{
        $success = true;
	}
	echo json_encode(array("success" => $success));
}

?>