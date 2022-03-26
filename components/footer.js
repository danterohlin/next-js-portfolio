import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="bg-gray-200 dark:bg-gray-800">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<h3 className="text-xl lg:text-xl  font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
						@ Dante Rohlin
					</h3>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
						<a
							href="https://github.com/officialskum/"
							className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
						>
							Github
						</a>
						<a
							href={`https://github.com/officialskum/`}
							className="mx-3 font-bold hover:underline"
						>
							View on GitHub
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
