function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "jezwin@au-ki.com",
	Password : "j3zw1n@4u-k1",
	To : 'jezwinvarghese@gmail.com',
	From : "jezwin@au-ki.com",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
