export default function GameTitle({ children, link }) {
	return (
		<a href={link}>
			<h1 className="game-title text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
				{children}
			</h1>
		</a>
	);
}
