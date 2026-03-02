import Link from 'next/link';
import type { SampleConfig } from '@/types/sample';

type Props = { sample: SampleConfig };

function Stars({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
	return (
		<span aria-label={`${rating} out of 5`} className='text-sm opacity-80'>
			{'★'.repeat(rating)}
			<span className='opacity-30'>{'★'.repeat(5 - rating)}</span>
		</span>
	);
}

export default function TemplateShell({ sample }: Props) {
	const hasPrices = !!sample.prices?.length;
	const hasGallery = !!sample.gallery?.length;
	const hasReviews = !!sample.reviews?.length;
	const hasFaqs = !!sample.faqs?.length;
	const hasHighlights = !!sample.highlights?.length;
	const hasHours = !!sample.openingHours?.length;

	return (
		<div data-theme={sample.theme} className='min-h-screen bg-base-200'>
			<div className='mx-auto w-full max-w-6xl px-4 py-10'>
				{/* Hero */}
				<section className='rounded-2xl bg-base-100 p-6 shadow'>
					<div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
						<div>
							<span className='badge badge-outline'>Live demo</span>
							<h1 className='mt-3 text-4xl font-bold'>{sample.brand}</h1>
							<p className='mt-2 text-lg opacity-80'>{sample.tagline}</p>
							<p className='mt-3 max-w-2xl opacity-70'>{sample.description}</p>

							{hasHighlights && (
								<ul className='mt-5 grid gap-2 sm:grid-cols-2 opacity-80'>
									{sample.highlights!.map((h) => (
										<li key={h} className='flex items-start gap-2'>
											<span className='mt-1 inline-block h-2 w-2 rounded-full bg-primary' />
											<span>{h}</span>
										</li>
									))}
								</ul>
							)}
						</div>

						<div className='flex flex-col gap-3 md:min-w-55'>
							{sample.ctas.map((cta) => (
								<a
									key={cta.label}
									href={cta.href}
									className='btn btn-primary w-full'>
									{cta.label}
								</a>
							))}
							<Link href='/contact' className='btn btn-outline w-full'>
								Contact me about a site
							</Link>
						</div>
					</div>
				</section>

				{/* Services */}
				<section id='services' className='mt-10'>
					<h2 className='text-2xl font-bold'>Services</h2>
					<p className='mt-1 opacity-70'>What we can help with.</p>

					<div className='mt-5 grid gap-6 md:grid-cols-3'>
						{sample.services.map((svc) => (
							<div key={svc.title} className='card bg-base-100 shadow'>
								<div className='card-body'>
									<h3 className='card-title text-base'>{svc.title}</h3>
									<p className='opacity-70'>{svc.description}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Prices */}
				{hasPrices && (
					<section id='prices' className='mt-10'>
						<h2 className='text-2xl font-bold'>Prices</h2>
						<p className='mt-1 opacity-70'>Clear pricing before work starts.</p>

						<div className='mt-5 grid gap-6 md:grid-cols-3'>
							{sample.prices!.map((p) => (
								<div key={p.title} className='card bg-base-100 shadow'>
									<div className='card-body'>
										<div className='flex items-start justify-between gap-3'>
											<h3 className='font-semibold'>{p.title}</h3>
											<span className='badge badge-primary'>{p.price}</span>
										</div>
										{p.note ? (
											<p className='mt-2 text-sm opacity-70'>{p.note}</p>
										) : null}
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Gallery */}
				{hasGallery && (
					<section id='gallery' className='mt-10'>
						<h2 className='text-2xl font-bold'>Gallery</h2>
						<p className='mt-1 opacity-70'>A quick look at the workshop.</p>

						<div className='mt-5 grid gap-4 sm:grid-cols-2'>
							{sample.gallery!.map((img) => (
								<div
									key={img.src}
									className='rounded-2xl bg-base-100 p-3 shadow'>
									<div className='aspect-16/10] w-full overflow-hidden rounded-xl bg-base-200 flex items-center justify-center'>
										<span className='text-sm opacity-60'>{img.alt}</span>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Reviews */}
				{hasReviews && (
					<section id='reviews' className='mt-10'>
						<h2 className='text-2xl font-bold'>Reviews</h2>
						<p className='mt-1 opacity-70'>Trusted by local customers.</p>

						<div className='mt-5 grid gap-6 md:grid-cols-2'>
							{sample.reviews!.map((r) => (
								<div key={r.name} className='card bg-base-100 shadow'>
									<div className='card-body'>
										<div className='flex items-start justify-between gap-3'>
											<div>
												<p className='font-semibold'>{r.name}</p>
												<Stars rating={r.rating} />
											</div>
											<span className='badge badge-ghost'>Verified</span>
										</div>
										<p className='mt-3 opacity-80'>{r.text}</p>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* FAQs */}
				{hasFaqs && (
					<section id='faqs' className='mt-10'>
						<h2 className='text-2xl font-bold'>FAQs</h2>
						<p className='mt-1 opacity-70'>Quick answers.</p>

						<div className='mt-5 space-y-3'>
							{sample.faqs!.map((f) => (
								<div
									key={f.q}
									className='collapse collapse-arrow bg-base-100 shadow'>
									<input type='checkbox' />
									<div className='collapse-title font-semibold'>{f.q}</div>
									<div className='collapse-content'>
										<p className='opacity-80'>{f.a}</p>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Contact */}
				<section id='contact' className='mt-10'>
					<div className='rounded-2xl bg-base-100 p-6 shadow'>
						<div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
							<div>
								<h2 className='text-2xl font-bold'>Contact</h2>
								<p className='mt-1 opacity-70'>
									Call, message, or request a quote.
								</p>

								<div className='mt-4 space-y-2 opacity-80'>
									{sample.contact?.serviceArea ? (
										<p>
											<span className='font-medium'>Service area:</span>{' '}
											{sample.contact.serviceArea}
										</p>
									) : null}
									{sample.contact?.phone ? (
										<p>
											<span className='font-medium'>Phone:</span>{' '}
											{sample.contact.phone}
										</p>
									) : null}
									{sample.contact?.whatsapp ? (
										<p>
											<span className='font-medium'>WhatsApp:</span>{' '}
											{sample.contact.whatsapp}
										</p>
									) : null}
									{sample.contact?.email ? (
										<p>
											<span className='font-medium'>Email:</span>{' '}
											{sample.contact.email}
										</p>
									) : null}
								</div>

								{hasHours && (
									<div className='mt-5'>
										<h3 className='font-semibold'>Opening hours</h3>
										<div className='mt-2 space-y-1 opacity-80'>
											{sample.openingHours!.map((h) => (
												<div
													key={h.day}
													className='flex items-center justify-between gap-4'>
													<span>{h.day}</span>
													<span className='font-medium'>{h.hours}</span>
												</div>
											))}
										</div>
									</div>
								)}
							</div>

							<div className='flex w-full flex-col gap-3 md:max-w-xs'>
								{sample.contact?.phone ? (
									<a
										href={`tel:${sample.contact.phone}`}
										className='btn btn-primary w-full'>
										Call now
									</a>
								) : null}

								{sample.contact?.whatsapp ? (
									<a
										href={`https://wa.me/${sample.contact.whatsapp.replace(/\D/g, '')}`}
										target='_blank'
										rel='noreferrer'
										className='btn btn-outline w-full'>
										Message on WhatsApp
									</a>
								) : null}

								<Link href='#contact' className='btn btn-ghost w-full'>
									Get a website like this
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
