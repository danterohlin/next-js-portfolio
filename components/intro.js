import { CMS_NAME, CMS_URL } from "../lib/constants";
import Link from "next/link";

export default function Intro() {
	return (
		<section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
			<h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
				Andreas Portfolio.
			</h1>
			<nav className="flex flex-row">
				<h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
					<Link href="/about">
						<a className="hover:underline">Projects</a>
					</Link>
				</h4>
				<h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
					<Link href="/about">
						<a className="hover:underline">About me</a>
					</Link>
				</h4>
			</nav>
		</section>
	);
}
