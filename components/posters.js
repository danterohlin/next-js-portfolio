import { imageBuilder } from "../lib/sanity";

export default function Posters({ posters = [], link }) {
	return (
		<>
			<div className="grid grid-cols-2 p-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 row-gap-20 md:row-gap-32 mb-32">
				{posters?.map(({ poster, caption, i }) => (
					<div
						key={i}
						className="poster mx-2 relative m-2 w-fit sm:w-fit flex opacity-90 drop-shadow-xl hover:opacity-100 items-center justify-center"
					>
						<img
							alt={caption}
							src={imageBuilder(poster).url()}
							width="250"
							className="rounded-3xl border-2 border-black dark:border-white"
							key={i}
						/>
						<p className="font-semibold bg-gray-800 text-xs sm:text-sm dark:bg-gray-800 text-white dark:bg-opacity-70 dark:text-white rounded-r-md p-2 bg-opacity-60 absolute bottom-10 -left-2 pointer-events-none">
							{caption}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
