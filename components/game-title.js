export default function GameTitle({ children, link }) {
	return (
		<a href={link}>
			<h1
				className={`sm:game-title text-4xl lg:text-6xl xl:text-7xl sm:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left`}
			>
				{children}
			</h1>
		</a>
	);
}
