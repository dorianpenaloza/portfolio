<?php

	// Mail settings
	$to      = "dorianpenaloza@yahoo.com";
	$subject = "Dorian";

	// You can put here your email
	$header = "From: dorian@gator4241.hostgator.com\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

	if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {

		$content  = "Name: "     . $_POST["name"]    . "\r\n";
		$content .= "Email: "    . $_POST["email"]   . "\r\n";
		$content .= "Message: "  . "\r\n" . $_POST["message"];

		if (mail($to, $subject, $content, $header)) {

			$result = array(
				"message"    => "Hey, Thank you for reaching out. We'll be in touch soon!",
				"sendstatus" => 1
			);

			echo json_encode($result);

		} else {

			$result = array(
				"message"    => "Whoops Sorry, something went wrong.",
				"sendstatus" => 0
			);

			echo json_encode($result);

		}

	}

?>
