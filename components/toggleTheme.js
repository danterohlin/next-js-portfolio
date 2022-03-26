import React from "react";
import { useTheme } from "next-themes";

export default function darkmode() {
	const { theme, setTheme } = useTheme();

	console.log(theme);
	return (
		<button
			className="pl-8 text-center md:text-left text-lg md:pl-8"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? <span>Lightmode</span> : <span>Darkmode</span>}
		</button>
	);
}
