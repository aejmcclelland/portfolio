import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
	slug: 'projects',
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true,
		},
		{
			name: 'description',
			type: 'textarea',
			required: true,
		},
		{
			name: 'features',
			type: 'array',
			label: 'Key Features',
			fields: [
				{
					name: 'feature',
					type: 'text',
				},
			],
		},
		{
			name: 'tech',
			type: 'array',
			label: 'Tech Stack',
			fields: [
				{
					name: 'name',
					type: 'text',
				},
			],
		},
		{
			name: 'liveLink',
			type: 'text',
			label: 'Live Link',
			required: false,
		},
		{
			name: 'githubLink',
			type: 'text',
			label: 'GitHub Link',
			required: false,
		},
		{
			name: 'imageUrl',
			type: 'text',
			required: false,
		},
		{
			name: 'imageAlt',
			type: 'text',
			required: false,
		},
	],
};

export default Projects;
