import { imageBuilder } from "../lib/sanity";

export default function Posters({ posters = [], link }) {
	return (
		<>
			<div className="mt-10 flex flex-wrap w-full justify-center sm:justify-start mx-auto sm:mx-0">
				{posters?.map(({ poster, caption, i }) => (
					<div className="poster mx-2 relative m-2 w-auto  rounded-3xl  sm:w-auto flex opacity-90 drop-shadow-xl hover:opacity-100 items-center justify-center">
						<img
							alt={caption}
							src={imageBuilder(poster).width(260).height(500).url()}
							width="260"
							height="500"
							className="rounded-3xl border-2 border-black"
						/>
						<p className="font-semibold bg-gray-800 dark:bg-red-500 text-white dark:bg-opacity-70 dark:text-white rounded-r-md p-2 bg-opacity-60 absolute bottom-10 -left-2 pointer-events-none">
							{caption}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
