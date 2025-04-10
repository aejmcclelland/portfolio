import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
	slug: 'users',
	admin: {
		useAsTitle: 'email',
	},
	auth: true,
	access: {
		create: () => false, // disallow creating new users via API
	},
	fields: [],
};
