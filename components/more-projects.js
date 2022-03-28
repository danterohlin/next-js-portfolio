import GamePreview from "./game-preview";

export default function MoreProjects({ games }) {
	return (
		<section>
			<h2 className="text-center sm:text-left pt-4 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
				More Projects
			</h2>
			<div className="grid grid-cols-2 p-2 gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 row-gap-20 md:row-gap-32 mb-32">
				{games.map((post) => (
					<GamePreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
