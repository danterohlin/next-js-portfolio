import React from "react";
import { useTheme } from "next-themes";

export default function darkmode() {
	const { theme, setTheme } = useTheme();
	return (
		<button
			className="px-8"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? <span>Darkmode</span> : <span>Lightmode</span>}
		</button>
	);
}
