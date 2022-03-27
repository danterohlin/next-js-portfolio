import Container from "../components/container";
import { getAuthors } from "../lib/api";
import Image from "next/image";

export default function about({ authors }) {
	console.log(authors[0]);
	return (
		<div className="p-2 xs:p-0 pt-10">
			<Container>I'm just a noob</Container>
		</div>
	);
}

export async function getStaticProps({}) {
	const authors = await getAuthors();
	return {
		props: { authors },
		revalidate: 1,
	};
}
