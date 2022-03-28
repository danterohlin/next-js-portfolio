import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
	return (
		<footer className=" relative dark:border-gray-700">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<div className="lg:w-full">
						<a
							href="https://www.linkedin.com/in/dante-rohlin-1b72231b0/"
							target="_blank"
							className="sm:w-fit hidden sm:block p-6"
						>
							@Dante Rohlin
						</a>
					</div>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 whitespace-nowrap">
						<a
							href="https://github.com/officialskum/"
							className="mx-3 bg-black dark:bg-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-transparent dark:hover:border-gray-800 hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
						>
							Github
						</a>
						<a
							href="/contact"
							target="_blank"
							className="ml-3 font-bold hover:underline"
						>
							Contact me
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/in/dante-rohlin-1b72231b0/"
							target="_blank"
							className="sm:w-full absolute sm:hidden bottom-4 left-4 p-6"
						>
							@Dante Rohlin
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
