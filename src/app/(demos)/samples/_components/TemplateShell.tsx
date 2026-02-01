import type { SampleConfig } from '../../../../types/sample';

export default function TemplateShell({ sample }: { sample: SampleConfig }) {
	return (
		<div className='mx-auto w-full max-w-6xl px-4 py-10'>
			{/* Hero */}
			<div className='rounded-3xl bg-base-100 p-8 shadow'>
				<p className='text-sm opacity-70'>Template</p>
				<h1 className='mt-2 text-4xl font-bold'>{sample.brand}</h1>
				<p className='mt-3 text-lg opacity-80'>{sample.tagline}</p>
				<p className='mt-4 max-w-2xl opacity-70'>{sample.description}</p>

				<div className='mt-6 flex flex-wrap gap-3'>
					{sample.ctas.map((cta) => (
						<a key={cta.href} className='btn btn-primary' href={cta.href}>
							{cta.label}
						</a>
					))}
				</div>
			</div>

			{/* Services */}
			<section className='mt-10'>
				<h2 className='text-2xl font-semibold'>Services</h2>
				<div className='mt-4 grid gap-4 md:grid-cols-3'>
					{sample.services.map((s) => (
						<div key={s.title} className='rounded-2xl bg-base-100 p-6 shadow'>
							<h3 className='font-semibold'>{s.title}</h3>
							<p className='mt-2 opacity-70'>{s.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Contact anchor (for #contact CTA) */}
			<section
				id='contact'
				className='mt-10 rounded-2xl bg-base-100 p-6 shadow'>
				<h2 className='text-2xl font-semibold'>Contact</h2>
				<p className='mt-2 opacity-70'>
					This is where you’d drop a simple form, opening hours, and a map
					embed.
				</p>
			</section>
		</div>
	);
}
