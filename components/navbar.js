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
				className={`fixed w-full flex h-20 items-center border-b dark:border-gray-800 justify-center z-20 transition ease-in-out duration-800 ${
					toggleMenu && "border-b-0 sm:border-b"
				} ${
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
								<a className="hover:underline whitespace-nowrap hidden sm:inline dark:text-white px-2 xs:bg-transparent">
									Andreas Portfolio
								</a>
							)}
						</Link>
					</h1>
					<nav className="flex flex-row justify-between items-center sm:justify-end w-full hidden sm:flex">
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
						<Link href="/">
							<a
								className={` ${router.pathname == "/" ? "text-black" : ""}
									`}
							>
								{" "}
								<h4
									className={`md:text-left dark:text-white border-gray-600 bg-opacity-70 text-lg whitespace-nowrap ${
										toggleMenu ? "bg-opacity-90 text-white " : "bg-opacity-0 border-b-0"
									}`}
									onClick={() => {
										toggleMenu && setToggleMenu(!toggleMenu);
									}}
								>
									Home
								</h4>
							</a>
						</Link>
						<div
							onClick={() => {
								setToggleMenu(!toggleMenu);
							}}
							className="cursor-pointer h-10 flex justify-center items-center"
						>
							<button
								className={`burger-menu--button ${toggleMenu && " toggled "}`}
							></button>
						</div>
					</div>
					<nav
						className={`flex absolute top-20 h-screen transition-all duration-300 left flex-col sm:hidden  ${
							toggleMenu ? " left-0 " : " left-full "
						}`}
					>
						<div
							className={`sm:hidden pr-2 bg-opacity-90 absolute bottom-28 right-2 `}
						>
							<ToggleTheme addText={true} />
						</div>

						<Link href="/about">
							<a
								className={` ${
									router.pathname == "/about" ? "bg-gray-800 bg-opacity-50" : ""
								}
									`}
							>
								<h4
									className={`md:text-left p-4 bg-black text-white border-b border-t border-gray-800 w-screen text-lg whitespace-nowrap ${
										toggleMenu ? "bg-opacity-0" : "bg-opacity-0 border-b-0"
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
								className={` ${
									router.pathname == "/contact" ? "bg-gray-800 bg-opacity-50" : ""
								}
									`}
							>
								<h4
									className={`md:text-left p-4 bg-black text-white border-b border-gray-800 bg-opacity-70 text-lg whitespace-nowrap ${
										toggleMenu ? "bg-opacity-0" : "bg-opacity-0 border-b-0"
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
					className="fixed w-full sm:hidden h-full bg-black opacity-90 z-10"
					onClick={() => {
						setToggleMenu(!toggleMenu);
					}}
				></div>
			)}
			<div className="p-10"></div>
		</>
	);
}
