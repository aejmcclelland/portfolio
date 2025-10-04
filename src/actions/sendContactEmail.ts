'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.maileroo.com',
	port: 587,
	secure: false,
	auth: {
		user: process.env.MAILEROO_USER,
		pass: process.env.MAILEROO_PASS,
	},
});

function sanitiseInput(str: string): string {
	return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function sendContactEmail(
	_prevState: { message: string },
	formData: FormData
) {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;
	const phone = formData.get('phone') as string;
	const linkedin = formData.get('linkedin') as string;

	if (!email || !message) {
		return { message: 'Missing required fields' };
	}

	const mailOptions = {
		from: 'contact@amcclelland.net',
		to: 'aejmcclelland@gmail.com',
		subject: `New Portfolio Contact from ${name || 'Anonymous'}`,
		text: message,
		html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <p><strong>From:</strong> ${
					sanitiseInput(name) || 'Anonymous'
				} &lt;${sanitiseInput(email)}&gt;</p>
        <p><strong>Phone:</strong> ${sanitiseInput(phone) || 'N/A'}</p>
        <p><strong>LinkedIn:</strong> ${
					sanitiseInput(linkedin)
						? `<a href="${sanitiseInput(
								linkedin
						  )}" target="_blank">${sanitiseInput(linkedin)}</a>`
						: 'N/A'
				}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitiseInput(message).replace(/\n/g, '<br>')}</p>
      </div>
    `,
		replyTo: email,
	};

	// Verify reCAPTCHA token
	const token = formData.get('recaptcha');

	const verifyRes = await fetch(
		'https://www.google.com/recaptcha/api/siteverify',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
		}
	);

	console.log('reCAPTCHA token received:', token);
	const verifyData = await verifyRes.json();
	console.log('reCAPTCHA verification response:', verifyData);

	if (!verifyData.success || verifyData.score < 0.5) {
		console.error('reCAPTCHA failed:', verifyData);
		return { message: 'reCAPTCHA verification failed. Please try again.' };
	}

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Maileroo SMTP response:', info.messageId);
		return { message: 'Message sent successfully!' };
	} catch (error) {
		if (error instanceof Error) {
			console.error('Mailer error:', error.message);
		} else {
			console.error('Mailer error:', error);
		}
		return { message: 'Failed to send message.' };
	}
}
