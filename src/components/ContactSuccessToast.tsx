'use client';
import { useEffect, useState } from 'react';

export default function ContactSuccessToast() {
	const [showToast, setShowToast] = useState(false);

	const state = { status: 'success' }; // Replace this with the actual state logic

	useEffect(() => {
		if (state.status === 'success') {
			setShowToast(true);
			const timer = setTimeout(() => {
				setShowToast(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<>
			{showToast && (
				<div
					className='bg-success text-success-content text-center p-6 rounded-lg shadow-md mb-6 transition-all duration-500 ease-in-out transform animate-slide-in'
					style={{ animation: 'slideOut 0.5s ease-in-out 2.5s forwards' }}>
					<h3 className='text-xl font-bold mb-2'>Thank you!</h3>
					<p>Your message has been sent. I'll be in touch soon.</p>
				</div>
			)}
		</>
	);
}
