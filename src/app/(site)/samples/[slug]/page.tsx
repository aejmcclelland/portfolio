import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSampleBySlug, SAMPLES } from '../_content';
import TemplateShell from '../_components/TemplateShell';

type PageProps = {
	params: { slug: string };
};

export function generateStaticParams() {
	return SAMPLES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
	const sample = getSampleBySlug(params.slug);
	if (!sample) return { title: 'Sample not found | Andrew McClelland' };

	return {
		title: `${sample.brand} Template | Andrew McClelland`,
		description: sample.description,
	};
}

export default function SamplePage({ params }: PageProps) {
	const sample = getSampleBySlug(params.slug);
	if (!sample) notFound();

	return <TemplateShell sample={sample} />;
}
