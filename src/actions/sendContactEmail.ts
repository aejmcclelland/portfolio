'use server';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendContactEmail(
	_prevState: { message: string },
	formData: FormData
) {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;

	if (!email || !message) {
		return { message: 'Missing required fields' };
	}

	const msg = {
		to: process.env.SENDGRID_SENDER!,
		from: process.env.SENDGRID_SENDER!,
		subject: `New Portfolio Contact from ${name || 'Anonymous'}`,
		text: message,
		html: `
       <div style="font-family: sans-serif; line-height: 1.6;">
    <p><strong>From:</strong> ${name || 'Anonymous'} &lt;${email}&gt;</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
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

	const verifyData = await verifyRes.json();
	console.log('🔐 reCAPTCHA token:', token);
	console.log('✅ reCAPTCHA verification result:', verifyData);
	if (!verifyData.success || verifyData.score < 0.5) {
		console.error('❌ reCAPTCHA failed:', verifyData);
		return { message: 'reCAPTCHA verification failed. Please try again.' };
	}

	try {
		const [response] = await sgMail.send(msg);
		console.log('✅ SendGrid response:', response?.statusCode);
		return { message: 'Message sent successfully!' };
	} catch (error: any) {
		console.error('SendGrid error:');

		if (error.response) {
			console.error('Response body:', error.response.body);
			console.error('Status code:', error.response.statusCode);
		} else {
			console.error('Error message:', error.message || error);
		}

		return { message: 'Failed to send message.' };
	}
}
