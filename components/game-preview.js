import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
export default function GamePreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<div className="sm:mx-2 mx-auto w-fit p-2 sm:p-0 flex flex-wrap relative">
			<div className="mb-5">
				<CoverImage
					slug={slug}
					title={title}
					imageObject={coverImage}
					url={imageBuilder(coverImage).url()}
				/>
			</div>
			<p className="text-sm sm:text-md xl:text-md whitespace-nowrap leading-snug absolute text-white bottom-20 right-1 left-1 sm:-right-1 sm:-left-1  bg-purple-500 bg-opacity-80 p-2">
				<Link as={`/games/${slug}`} href="/games/[slug]">
					<a className="hover:underline">{title}</a>
				</Link>
			</p>
			{/* <div className="text-lg mb-4">
				<Date dateString={date} />
			</div> */}
			<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
			{/* <Avatar name={author?.name} picture={author?.picture} /> */}
		</div>
	);
}
