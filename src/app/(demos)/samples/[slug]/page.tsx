import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSampleBySlug, SAMPLES } from '../_content';
import TemplateShell from '../_components/TemplateShell';

type PageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return SAMPLES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const sample = getSampleBySlug(slug);
	if (!sample) return { title: 'Sample not found | Andrew McClelland' };

	return {
		title: `${sample.brand} Template | Andrew McClelland`,
		description: sample.description,
	};
}

export default async function SamplePage({ params }: PageProps) {
	const { slug } = await params;
	const sample = getSampleBySlug(slug);
	if (!sample) notFound();

	return <TemplateShell sample={sample} />;
}
