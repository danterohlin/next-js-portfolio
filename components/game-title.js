export default function GameTitle({ children, link }) {
	return (
		<h1
			className={`game-title hidden sm:block text-4xl lg:text-6xl xl:text-7xl sm:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left`}
		>
			<a href={link} className="hover:opacity-90" target="_blank">
				{children}
			</a>
		</h1>
	);
}
