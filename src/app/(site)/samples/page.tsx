export const dynamic = 'force-static';
export const revalidate = false;

import Link from 'next/link';
import { SAMPLES } from './_content';

export default function SamplesIndexPage() {
	return (
		<div className='mx-auto w-full max-w-6xl px-4 py-10'>
			<h1 className='text-4xl font-bold'>Website Samples</h1>
			<p className='mt-2 opacity-70'>
				Client-ready one-page templates. Each sample is driven by shared
				components + config.
			</p>

			<div className='mt-8 grid gap-4 md:grid-cols-2'>
				{SAMPLES.map((s) => (
					<Link
						key={s.slug}
						href={`/samples/${s.slug}`}
						className='rounded-2xl bg-base-100 p-6 shadow hover:shadow-md transition-shadow'>
						<div className='flex items-center justify-between gap-4'>
							<div>
								<h2 className='text-xl font-semibold'>{s.brand}</h2>
								<p className='mt-1 opacity-70'>{s.tagline}</p>
							</div>
							<span className='badge badge-outline'>Template</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
