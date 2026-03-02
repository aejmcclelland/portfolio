// src/app/(demos)/samples/page.tsx

import Link from 'next/link';
import { SAMPLES } from './_content';

export const dynamic = 'force-static';
export const revalidate = false;

function initialFromBrand(brand: string) {
	const cleaned = (brand || '').trim();
	if (!cleaned) return 'S';
	const parts = cleaned.split(/\s+/).filter(Boolean);
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function SamplesIndexPage() {
	return (
		<div className='mx-auto w-full max-w-6xl px-4 py-10'>
			{/* Header row */}
			<div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<div className='flex items-center gap-3'>
						<Link href='/' className='link link-hover text-sm opacity-70'>
							Back to portfolio
						</Link>
						<span className='opacity-40'>/</span>
						<span className='text-sm opacity-70'>Demos</span>
					</div>

					<h1 className='mt-3 text-4xl font-bold'>Website Samples</h1>
					<p className='mt-2 max-w-2xl opacity-70'>
						Client-ready one-page templates. Each sample is driven by shared
						components + config so I can ship fast, consistently, and with a
						professional finish.
					</p>
				</div>

				<div className='flex items-center gap-3'>
					<Link href='/contact' className='btn btn-primary'>
						Ask about a build
					</Link>
				</div>
			</div>

			{/* What you get */}
			<div className='mt-8 rounded-2xl bg-base-100 p-6 shadow'>
				<h2 className='text-lg font-semibold'>What these demos include</h2>
				<div className='mt-4 grid gap-4 md:grid-cols-2'>
					<ul className='space-y-2 opacity-80'>
						<li>Mobile-first layout with modern UI (Tailwind + daisyUI)</li>
						<li>Clear call-to-action flow: Call, WhatsApp, or Quote</li>
						<li>Service/pricing sections designed to reduce back-and-forth</li>
					</ul>
					<ul className='space-y-2 opacity-80'>
						<li>Gallery + reviews to build trust quickly</li>
						<li>Fast performance and clean on-page structure</li>
						<li>Delivered as a finished site with optional updates</li>
					</ul>
				</div>
			</div>

			{/* Services */}
			<section
				id='services'
				className='mt-8 rounded-2xl bg-base-100 p-6 shadow'>
				<div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<h2 className='text-lg font-semibold'>What I can build for you</h2>
						<p className='mt-1 max-w-2xl opacity-70'>
							A focused set of website packages for local businesses. Clear
							scope, fast delivery, and a professional finish.
						</p>
					</div>
					<Link href='/contact' className='btn btn-outline btn-sm'>
						Check availability
					</Link>
				</div>

				<div className='mt-6 grid gap-4 md:grid-cols-2'>
					<div className='rounded-xl bg-base-200 p-5'>
						<h3 className='font-semibold'>Services</h3>
						<ul className='mt-3 space-y-2 opacity-80'>
							<li>One-page website (hero, services, gallery, reviews, CTA)</li>
							<li>Small multi-page rebuild (4–6 pages) when needed</li>
							<li>Conversion-first CTAs: Call / WhatsApp / Quote</li>
							<li>Quote / enquiry form that captures the right info</li>
							<li>Basic local SEO setup (titles, headings, sitemap)</li>
							<li>Deploy + handover (or optional care plan)</li>
						</ul>
					</div>

					<div className='rounded-xl bg-base-200 p-5'>
						<h3 className='font-semibold'>To keep delivery fast</h3>
						<p className='mt-3 opacity-80'>
							These packages are designed to ship quickly and stay maintainable.
						</p>
						<ul className='mt-3 space-y-2 opacity-80'>
							<li>
								<span className='font-medium'>Not included by default:</span>{' '}
								client-managed CMS / admin panel
							</li>
							<li>
								eCommerce, complex bookings, or custom integrations (quoted
								separately)
							</li>
							<li>
								Ongoing changes are either billed hourly or covered by an update
								bundle
							</li>
						</ul>
						<div className='mt-4'>
							<div className='badge badge-ghost'>Fixed scope</div>
							<div className='badge badge-ghost ml-2'>Fast turnaround</div>
							<div className='badge badge-ghost ml-2'>Clear boundaries</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section id='pricing' className='mt-8'>
				<div className='flex items-end justify-between gap-4'>
					<div>
						<h2 className='text-lg font-semibold'>Pricing</h2>
						<p className='mt-1 opacity-70'>
							Simple packages for small businesses. If you’re unsure, start with
							Starter or Business.
						</p>
					</div>
					<Link href='/contact' className='btn btn-primary btn-sm'>
						Get a quote
					</Link>
				</div>

				<div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
					<div className='card bg-base-100 shadow'>
						<div className='card-body'>
							<div className='flex items-center justify-between'>
								<h3 className='font-semibold'>Starter Pack</h3>
								<span className='badge badge-outline'>Best value</span>
							</div>
							<p className='mt-2 text-2xl font-bold'>£299</p>
							<p className='opacity-70'>For sole traders & home studios.</p>
							<ul className='mt-4 space-y-2 opacity-80 text-sm'>
								<li>One-page site (mobile-first)</li>
								<li>Services + gallery + reviews</li>
								<li>Call / WhatsApp CTA buttons</li>
								<li>Basic SEO + deployment</li>
							</ul>
						</div>
					</div>

					<div className='card bg-base-100 shadow'>
						<div className='card-body'>
							<h3 className='font-semibold'>Business Pack</h3>
							<p className='mt-2 text-2xl font-bold'>£599</p>
							<p className='opacity-70'>For established local businesses.</p>
							<ul className='mt-4 space-y-2 opacity-80 text-sm'>
								<li>Everything in Starter</li>
								<li>Pricing section (clear packages)</li>
								<li>Better enquiry form</li>
								<li>2 revision rounds</li>
							</ul>
						</div>
					</div>

					<div className='card bg-base-100 shadow'>
						<div className='card-body'>
							<h3 className='font-semibold'>Rebuild Pack</h3>
							<p className='mt-2 text-2xl font-bold'>£1,200–£1,800</p>
							<p className='opacity-70'>For outdated multi-page sites.</p>
							<ul className='mt-4 space-y-2 opacity-80 text-sm'>
								<li>4–6 pages</li>
								<li>Fresh design + improved nav</li>
								<li>Stronger trust signals</li>
								<li>Redirects + migration help</li>
							</ul>
						</div>
					</div>

					<div className='card bg-base-100 shadow'>
						<div className='card-body'>
							<h3 className='font-semibold'>Let’s talk</h3>
							<p className='mt-2 text-2xl font-bold'>Custom</p>
							<p className='opacity-70'>Bookings, eCommerce, integrations.</p>
							<ul className='mt-4 space-y-2 opacity-80 text-sm'>
								<li>Short scoping call</li>
								<li>Written quote</li>
								<li>Options for ongoing support</li>
							</ul>
							<div className='mt-4'>
								<Link href='/contact' className='btn btn-outline btn-sm w-full'>
									Discuss your project
								</Link>
							</div>
						</div>
					</div>
				</div>

				<p className='mt-4 text-sm opacity-60'>
					Note: ongoing changes can be handled hourly or via an update bundle.
					Hosting/care plan optional.
				</p>
			</section>

			{/* Samples grid */}
			<div className='mt-8 grid gap-6 md:grid-cols-2'>
				{SAMPLES.map((s) => (
					<div key={s.slug} className='card bg-base-100 shadow'>
						<div className='card-body gap-4'>
							{/* Preview placeholder */}
							<div className='rounded-xl bg-base-200 p-6'>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-3'>
										<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-base-300 font-semibold'>
											{initialFromBrand(s.brand)}
										</div>
										<div>
											<p className='text-sm opacity-70'>Template preview</p>
											<p className='font-semibold'>{s.brand}</p>
										</div>
									</div>
									<span className='badge badge-outline'>Live demo</span>
								</div>

								<p className='mt-4 opacity-70'>{s.tagline}</p>
							</div>

							<div className='flex items-center justify-between gap-3'>
								<div className='flex flex-wrap items-center gap-2'>
									<span className='badge badge-ghost'>One-page</span>
									<span className='badge badge-ghost'>Fast</span>
									<span className='badge badge-ghost'>Mobile-first</span>
								</div>

								<Link
									href={`/samples/${s.slug}`}
									className='btn btn-primary btn-sm'>
									View demo
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Bottom CTA */}
			<div className='mt-10 rounded-2xl bg-base-100 p-6 shadow'>
				<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
					<div>
						<h3 className='text-lg font-semibold'>
							Want one of these for your business?
						</h3>
						<p className='mt-1 opacity-70'>
							I build and deploy modern, mobile-first sites for local
							businesses. Clear pricing, and optional update bundles.
						</p>
					</div>
					<Link href='/contact' className='btn btn-outline'>
						Get a quote
					</Link>
				</div>
			</div>
		</div>
	);
}
