import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function navbar() {
	const router = useRouter();
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<navbar
				className={`fixed w-full flex items-center justify-center z-10 transition ease-in-out duration-800 ${
					scrollY > 50
						? "bg-opacity-40 dark:bg-opacity-40 bg-white dark:bg-black"
						: "bg-opacity-100"
				}`}
			>
				<section className="container sm:flex-row sm:justify-between lg:px-32 flex-col md:flex-row flex items-center p-4 md:justify-between ">
					<h1 className="text-2xl md:text-2xl font-bold tracking-tighter w-full sm:w-initial leading-tight md:pr-8">
						<Link href="/">
							{scrollY > 50 ? (
								<a></a>
							) : (
								<a className="hover:underline">Andreas Portfolio</a>
							)}
						</Link>
					</h1>
					<nav className="flex flex-row justify-between sm:justify-end w-full">
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
						<div className="sm:hidden">{scrollY < 50 && <ToggleTheme />}</div>
						<h4 className="text-center md:text-left text-lg pl-8">
							<Link href="/contact">
								<a
									className={`hover:underline + ${
										router.pathname == "/contact" ? "underline" : ""
									}
									`}
								>
									Contact me
								</a>
							</Link>
						</h4>
						<div className="hidden sm:block">{scrollY < 50 && <ToggleTheme />}</div>
					</nav>
				</section>
			</navbar>
			<div className="p-8"></div>
		</>
	);
}
