import Image from 'next/image';
import React from 'react';

export default function Logo() {
	return (
		<div className='flex items-center'>
			<Image
				src='/public/profile-avatar.png'
				alt='Logo'
				width={40}
				height={40}
				className='rounded-full'
			/>
			<span className='text-2xl font-bold ml-2'>Andrew McClelland</span>
		</div>
	);
}
