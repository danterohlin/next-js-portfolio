import Container from "../components/container";
import { getAuthors } from "../lib/api";
import Image from "next/image";

export default function about({ authors }) {
	return (
		<div className="p-4 sm:p-0">
			<Container>
				<h2 className="pt-4 text-5xl">Andreas Jonasson</h2>
				<p className="text-xl">Software Developer</p>
				<p className="pt-10">I'm just a noob</p>
			</Container>
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
