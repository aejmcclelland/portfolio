import type { SampleConfig } from '../../../../types/sample';
import { garageSample } from './garage';
import { beautySample } from './beauty';

export const SAMPLES: SampleConfig[] = [
	garageSample,
	beautySample,
	// add nailsSample, electricianSample, etc.
];

export function getSampleBySlug(slug: string) {
	return SAMPLES.find((s) => s.slug === slug) ?? null;
}
