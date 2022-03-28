import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="border-t dark:border-gray-700">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<h3 className="text-xl lg:text-xl  font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
						@Dante Rohlin
					</h3>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
						<a
							href="https://github.com/officialskum/"
							className="mx-3 bg-black dark:bg-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-transparent dark:hover:border-gray-800 hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
						>
							Github
						</a>
						<a
							href="/contact"
							target="_blank"
							className="mx-3 font-bold hover:underline"
						>
							Contact me
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
