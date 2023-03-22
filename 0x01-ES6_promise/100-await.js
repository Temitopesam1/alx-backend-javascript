import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
	try {
		return {
			photo: await uploadPhoto(),
			user: await createUser()
		}
	}
	catch(error) {
		console.log({ photo: null, user: null });
	}
}
