function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "jezwinvarghese@gmail.com",
	Password : "qw3rtyui0p",
	To : 'jezwin@au-ki.com',
	From : "jezwinvarghese@gmail.com",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
