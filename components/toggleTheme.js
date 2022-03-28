import React from "react";
import { useTheme } from "next-themes";

export default function darkmode() {
	const { theme, setTheme } = useTheme();

	return (
		<button
			className="pl-0 sm:pl-8 text-center md:text-left text-lg md:pl-8"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<p className={"sun relative"}>
					<img width="34" src="/sun.png" />
				</p>
			) : (
				<div className={"moon relative"}>
					<img width="34" src="/moon.png" />
				</div>
			)}
		</button>
	);
}
