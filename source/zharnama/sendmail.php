<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	// от кого письмо
	$mail->setFrom('alefet89@mail.ru', 'AleFet');
	//  Кому отправить
	$mail->addAddress('alefet89@mail.ru'); //	тут можно указывать несколько мейлов
	//  Тема письма
	$mail->Subject = 'Заказ';

	// Тело письма
	$body = '<h1>Заказ!</h1>';

	if (trim(!empty($_POST['userName']))) {
		$body.='<p><strong>Имя:</strong> '.$_POST['userName'].'</p>';
	}
	if (trim(!empty($_POST['userPhone']))) {
		$body.='<p><strong>Телефон:</strong> '.$_POST['userPhone'].'</p>';
	}
	if (trim(!empty($_POST['userEmail']))) {
		$body.='<p><strong>E-mail:</strong> '.$_POST['userEmail'].'</p>';
	}
	if (trim(!empty($_POST['message']))) {
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}
	
	// собранную переменную $body присваиваем в плагин
	$mail->Body = $body;

	// Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	}  else {
		$message = 'Данные отправлены!';
	}
	// Формируем json
	$response = ["message" => $message];
	// json с заголовком возвращаем в наш JS
	header('Content-type: application/json');	
	echo json_encode($response);
?>
