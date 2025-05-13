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
	const phone = formData.get('phone') as string;
	const linkedin = formData.get('linkedin') as string;

	if (!email || !message) {
		return { message: 'Missing required fields' };
	}

	const msg = {
		to: 'aejmcclelland@gmail.com', // your actual inbox
		from: 'contact@amcclelland.net', // must match authenticated domain in SendGrid
		subject: `New Portfolio Contact from ${name || 'Anonymous'}`,
		text: message,
		html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <p><strong>From:</strong> ${name || 'Anonymous'} &lt;${email}&gt;</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>LinkedIn:</strong> ${
          linkedin ? `<a href="${linkedin}" target="_blank">${linkedin}</a>` : 'N/A'
        }</p>
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
	
	if (!verifyData.success || verifyData.score < 0.5) {
		console.error('reCAPTCHA failed:', verifyData);
		return { message: 'reCAPTCHA verification failed. Please try again.' };
	}

	try {
		const [response] = await sgMail.send(msg);
		console.log('✅ SendGrid response:', response?.statusCode);
		return { message: 'Message sent successfully!' };
	} catch (error: unknown) {
		console.error('SendGrid error:');

		const err = error as Error & {
			response?: {
				body?: Record<string, unknown>;
				statusCode?: number;
			};
		};

		if (err.response) {
			console.error('Response body:', err.response.body);
			console.error('Status code:', err.response.statusCode);
		} else {
			console.error('Error message:', err.message || err);
		}

		return { message: 'Failed to send message.' };
	}
}
