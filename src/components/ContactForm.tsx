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
				{state.status === 'success' && <ContactSuccessToast />}
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
			</div>
		</section>
	);
}
