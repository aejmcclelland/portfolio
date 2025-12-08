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
			name: 'images',
			type: 'array',
			label: 'Gallery Images',
			fields: [
				{
					name: 'imageUrl',
					type: 'text',
					required: true,
					admin: {
						description: 'Paste the Cloudinary URL for this image',
					},
				},
				{
					name: 'caption',
					type: 'text',
					required: false,
					admin: {
						description: 'Optional caption for this image',
					},
				},
			],
		},
		{
			name: 'imageAlt',
			type: 'text',
			required: false,
		},
		{
			name: 'coverImageUrl',
			type: 'text',
			required: false,
			admin: {
				description: 'Paste the Cloudinary URL for the post cover image',
			},
		},
		{
			name: 'projectType',
			label: 'Project Type',
			type: 'select',
			required: false,
			defaultValue: 'application',
			options: [
				{ label: 'Application', value: 'application' },
				{ label: 'Small Business Website', value: 'small-business-site' },
			],
		},
	],
};

export default Projects;
