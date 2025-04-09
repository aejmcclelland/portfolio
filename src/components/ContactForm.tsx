'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendContactEmail } from '@/actions/sendContactEmail';
import ContactSuccessToast from './ContactSuccessToast';

const initialState = { message: '', status: '' };

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			className='btn btn-primary w-full sm:w-fit'
			disabled={pending}>
			{pending ? 'Sending...' : 'Send Message'}
		</button>
	);
}

export default function ContactForm() {
	const [state, formAction] = useActionState(
		async (prevState: typeof initialState, formData: FormData) => {
			const grecaptcha = (window as any).grecaptcha;

			if (!grecaptcha) {
				return {
					message: 'reCAPTCHA not ready. Please try again.',
					status: 'error',
				};
			}

			const token = await grecaptcha.execute(
				process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
				{ action: 'submit' }
			);

			formData.append('recaptcha', token);
			const result = await sendContactEmail(prevState, formData);

			return {
				message: result.message,
				status: result.message.includes('successfully') ? 'success' : 'error',
			};
		},
		initialState
	);

	return (
		<section
			id='contact'
			className='py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-base-100'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-3xl font-bold mb-6 text-center'>Get in Touch</h2>
				<ContactSuccessToast status={state.status} />
				<form
					action={formAction}
					className='bg-base-200 shadow-md p-6 rounded-xl space-y-6'>
					<div className='flex flex-col lg:flex-row gap-6'>
						<div className='form-control w-full'>
							<label className='label justify-start'>
								<span className='label-text font-semibold'>Preferred Name</span>
							</label>
							<input
								type='text'
								name='name'
								placeholder='Andrew'
								className='input input-bordered w-full'
							/>
						</div>

						<div className='form-control w-full'>
							<label className='label justify-start'>
								<span className='label-text font-semibold'>Your Email</span>
							</label>
							<input
								type='email'
								name='email'
								placeholder='you@example.com'
								className='input input-bordered w-full'
								required
							/>
						</div>
					</div>

					<div className='form-control w-full'>
						<label className='label justify-start'>
							<span className='label-text font-semibold'>
								Your Message (optional)
							</span>
						</label>
						<textarea
							name='message'
							className='textarea textarea-bordered w-full h-32'
							placeholder='What would you like to say?'></textarea>
					</div>

					<div className='form-control w-full'>
						<SubmitButton />
					</div>
				</form>
				<p className='text-xs text-center text-base-content/70 mt-4'>
					This site is protected by reCAPTCHA and the Google{' '}
					<a
						href='https://policies.google.com/privacy'
						target='_blank'
						rel='noopener noreferrer'
						className='underline hover:text-primary'>
						Privacy Policy
					</a>{' '}
					and{' '}
					<a
						href='https://policies.google.com/terms'
						target='_blank'
						rel='noopener noreferrer'
						className='underline hover:text-primary'>
						Terms of Service
					</a>{' '}
					apply.
				</p>
			</div>
		</section>
	);
}
