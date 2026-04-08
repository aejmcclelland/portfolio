'use client';
import { useEffect, useState } from 'react';

interface ContactSuccessToastProps {
	status: string;
}

function TimedSuccessToast() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = window.setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => window.clearTimeout(timer);
	}, []);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className='bg-success text-success-content text-center p-6 rounded-lg shadow-md mb-6 transition-all duration-500 ease-in-out transform animate-slide-in'
			style={{ animation: 'slideOut 0.5s ease-in-out 2.5s forwards' }}>
			<h3 className='text-xl font-bold mb-2'>Thank you!</h3>
			<p>Your message has been sent. I&apos;ll be in touch soon.</p>
		</div>
	);
}

export default function ContactSuccessToast({
	status,
}: ContactSuccessToastProps) {
	if (status !== 'success') {
		return null;
	}

	return <TimedSuccessToast />;
}
