import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function navbar() {
	const router = useRouter();
	const [scrollY, setScrollY] = useState(0);
	const [toggleMenu, setToggleMenu] = useState(false);

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
				className={`fixed w-full flex h-20 items-center border-b dark:border-gray-700 justify-center z-20 transition ease-in-out duration-800 ${
					scrollY > 50 && !toggleMenu
						? "bg-opacity-40 h-14 dark:bg-opacity-40 bg-white dark:bg-black"
						: "bg-opacity-100"
				}`}
			>
				<section className="container sm:flex-row sm:justify-between lg:px-32 flex-col md:flex-row flex items-center p-4 md:justify-between ">
					<h1 className="text-2xl md:text-2xl font-bold tracking-tighter w-full sm:w-initial leading-tight md:pr-8">
						<Link href="/">
							{scrollY > 50 ? (
								<a></a>
							) : (
								<a className="hover:underline bg-purple-100 whitespace-nowrap hidden sm:inline dark:text-black px-2 xs:bg-transparent">
									Andreas Portfolio
								</a>
							)}
						</Link>
					</h1>
					<nav className="flex flex-row justify-between sm:justify-end w-full hidden sm:flex">
						{/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
						<Link href="/projects">
							<a className="hover:underline">Projects</a>
						</Link>
					</h4> */}
						<h4 className="text-center md:text-left text-lg md:pl-8 whitespace-nowrap">
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
						<h4 className="text-center md:text-left text-lg pl-8 whitespace-nowrap">
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
					<div className="w-full flex justify-between items-center z-30 sm:hidden">
						<div
							className={`sm:hidden pt-2 ${
								toggleMenu ? "bg-opacity-90" : "bg-opacity-0"
							}`}
						>
							<ToggleTheme />
						</div>
						<div
							onClick={() => {
								setToggleMenu(!toggleMenu);
							}}
							className="cursor-pointer p-4 h-10 flex justify-center items-center"
						>
							<button className="burger-menu--button "></button>
						</div>
					</div>
					<nav
						className={`flex absolute top-20 left-0 flex-col sm:hidden  ${
							toggleMenu ? "animate-slidein" : "animate-slideout"
						}`}
					>
						<Link href="/">
							<a
								className={`hover:bg-gray-800 ${
									router.pathname == "/" ? "text-green-200" : ""
								}
									`}
							>
								{" "}
								<h4
									className={`md:text-left p-4 bg-gray-700 border-b border-gray-600 bg-opacity-70 text-lg whitespace-nowrap ${
										toggleMenu ? "bg-opacity-90" : "bg-opacity-0 border-b-0"
									}`}
									onClick={() => {
										setToggleMenu(!toggleMenu);
									}}
								>
									Home
								</h4>
							</a>
						</Link>

						<Link href="/about">
							<a
								className={`hover:bg-gray-800 ${
									router.pathname == "/about" ? "text-green-200" : ""
								}
									`}
							>
								<h4
									className={`md:text-left p-4 bg-gray-700 border-b border-gray-600 bg-opacity-70 w-screen text-lg whitespace-nowrap ${
										toggleMenu ? "bg-opacity-90" : "bg-opacity-0 border-b-0"
									}`}
									onClick={() => {
										setToggleMenu(!toggleMenu);
									}}
								>
									About me
								</h4>
							</a>
						</Link>

						<Link href="/contact">
							<a
								className={`hover:bg-gray-800 ${
									router.pathname == "/contact" ? "text-green-200" : ""
								}
									`}
							>
								<h4
									className={`md:text-left p-4 bg-gray-700 border-b border-gray-600 bg-opacity-70 text-lg whitespace-nowrap ${
										toggleMenu ? "bg-opacity-90" : "bg-opacity-0 border-b-0"
									}`}
									onClick={() => {
										setToggleMenu(!toggleMenu);
									}}
								>
									Contact me
								</h4>
							</a>
						</Link>
					</nav>
				</section>
			</navbar>
			{toggleMenu && (
				<div
					className="fixed w-full sm:hidden h-full bg-black opacity-80 z-10"
					onClick={() => {
						setToggleMenu(!toggleMenu);
					}}
				></div>
			)}
			<div className="p-12"></div>
		</>
	);
}
