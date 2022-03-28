module.exports = {
	content: [
		"./pages/**/*.{html,js,jsx,ts,tsx}",
		"./components/**/*.{html,js,jsx,ts,tsx}",
	],
	darkMode: "class",
	theme: {
		typography: (theme) => ({ dark: "dark" }),
		extend: {
			keyframes: {
				slidei: {
					"0%": { transform: "translateX(-100%)" },
					"85%": { transform: "translateX(20%)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideo: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-0.2deg)" },
					"25%": { transform: "rotate(0.2deg)" },
					"50%": { transform: "rotate(-0.2deg)" },
					"75%": { transform: "rotate(0.2deg)" },
				},
			},
			animation: {
				slideout: "slideo 0.2s ease-out forwards",
				slidein: "slidei 0.3s ease-out forwards",
				wiggle: "wiggle 0.2s ease-in-out",
			},
			colors: {
				"accent-1": "#FAFAFA",
				"accent-2": "#EAEAEA",
				"accent-7": "#333",
				success: "#0070f3",
				cyan: "#79FFE1",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
			},
			boxShadow: {
				small: "0 5px 10px rgba(0, 0, 0, 0.12)",
				medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
};
