import { useState, useEffect } from "react";

export default function backgroundGradient() {
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
	return <div className={`${scrollY > 50 && "scrollY"} bg-gradient_1`}></div>;
}
