import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { Media } from './collections/Media';
import { Users } from './collections/Users';
import { Projects } from './collections/Projects';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	secret: process.env.PAYLOAD_SECRET || '',
	db: mongooseAdapter({
		url: process.env.MONGODB_URI || '',
	}),
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	editor: lexicalEditor(),
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	collections: [Media, Users, Projects],
	plugins: [
		vercelBlobStorage({
			collections: {
				media: true,
			},
			token: process.env.BLOB_READ_WRITE_TOKEN || '',
		}),
	],
});
