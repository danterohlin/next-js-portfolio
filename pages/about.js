import Container from "../components/container";
import { getAuthors } from "../lib/api";
import Image from "next/image";

export default function about({ authors }) {
	console.log(authors[0]);
	return <Container>About Andreas Nördsson</Container>;
}

export async function getStaticProps({}) {
	const authors = await getAuthors();
	return {
		props: { authors },
		revalidate: 1,
	};
}
