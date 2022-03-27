import sanityClient from "@sanity/client";
const config = {
	dataset: process.env.SANITY_STUDIO_API_DATASET,
	projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
	useCdn: process.env.NODE_ENV === "production",
	token: process.env.SANITY_API_TOKEN,
};
const client = sanityClient(config);

export default async function createMessage(req, res) {
	const { name, email, message } = JSON.parse(req.body);
	try {
		await client.create({
			_type: "message",
			name,
			email,
			message,
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: `Couldn't submit message`, err });
	}
	return res.status(200).json({ message: "Message submitted" });
}
