import type { SampleConfig } from './types';
import { garageSample } from './garage';

export const SAMPLES: SampleConfig[] = [
	garageSample,
	// add nailsSample, electricianSample, etc.
];

export function getSampleBySlug(slug: string) {
	return SAMPLES.find((s) => s.slug === slug) ?? null;
}
