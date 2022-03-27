import Date from "./date";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";

export default function Posters({ posters = [], link }) {
	return (
		<>
			<div className="sm:flex mt-10 flex-column w-fit mx-auto sm:mx-0">
				{posters?.map(({ poster, caption, i }) => (
					<a key={i} target="_blank" className="text-white">
						<div className="poster mx-2 relative rounded-2xl flex opacity-90 drop-shadow-xl hover:opacity-100 items-center justify-center">
							<Image
								alt={caption}
								src={imageBuilder(poster).width(260).height(500).url()}
								width="260"
								height="500"
								className="rounded-xl"
							/>
							<p className="font-semibold bg-gray-800 dark:bg-red-500 dark:bg-opacity-60 dark:text-white rounded-r-md p-2 bg-opacity-60 absolute bottom-10 -left-2 pointer-events-none">
								{caption}
							</p>
						</div>
					</a>
				))}
			</div>
		</>
	);
}
