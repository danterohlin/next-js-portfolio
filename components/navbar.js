import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { useRouter } from "next/router";

export default function navbar() {
	const router = useRouter();
	return (
		<>
			<navbar className="fixed w-full flex items-center justify-center">
				<section className="container sm:flex-row sm:justify-between lg:px-32 flex-col md:flex-row flex items-center p-4 md:justify-between ">
					<h1 className="text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">
						<Link href="/">
							<a className="hover:underline">Andreas Portfolio</a>
						</Link>
					</h1>
					<nav className="flex flex-row">
						{/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
						<Link href="/projects">
							<a className="hover:underline">Projects</a>
						</Link>
					</h4> */}
						<h4 className="text-center md:text-left text-lg md:pl-8">
							<Link href="/about">
								<a
									className={`hover:underline + ${
										router.pathname == "/about" ? "underline" : ""
									}
									`}
								>
									About me
								</a>
							</Link>
						</h4>
						<ToggleTheme />
					</nav>
				</section>
			</navbar>
			<div className="p-8"></div>
		</>
	);
}
