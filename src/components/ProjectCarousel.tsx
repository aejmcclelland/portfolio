// src/components/ProjectCarousel.tsx
'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type ProjectCarouselProps = {
	images: { src: string; alt?: string }[];
	interval?: number; // ms between slides
	showThumbs?: boolean; // toggle thumbnail dots
};

export default function ProjectCarousel({
	images,
	interval = 4000,
	showThumbs = false,
}: ProjectCarouselProps) {
	const validImages = images.filter(
		(img) => typeof img.src === 'string' && img.src.trim() !== ''
	);

	if (validImages.length === 0) return null;

	return (
		<Carousel
			autoPlay
			infiniteLoop
			showStatus={false}
			showIndicators={true}
			showThumbs={showThumbs}
			interval={interval}
			swipeable
			emulateTouch
			stopOnHover>
			{validImages.map((img, i) => (
				<div key={i} className='relative w-full aspect-video'>
					<Image
						src={img.src}
						alt={img.alt || `Slide ${i + 1}`}
						fill
						className='object-cover rounded-lg'
						priority={i === 0}
					/>
				</div>
			))}
		</Carousel>
	);
}
