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
