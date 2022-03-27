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
		<div className="sm:mx-2 mx-auto relative">
			<div className="mb-5">
				<CoverImage
					slug={slug}
					title={title}
					imageObject={coverImage}
					url={imageBuilder(coverImage).url()}
				/>
			</div>
			<div className="text-xl mb-3 leading-snug absolute -left-2 text-white bottom-10 bg-opacity-70 rounded-r bg-green-500 p-2">
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a className="hover:underline">{title}</a>
				</Link>
			</div>
			{/* <div className="text-lg mb-4">
				<Date dateString={date} />
			</div> */}
			<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
			{/* <Avatar name={author?.name} picture={author?.picture} /> */}
		</div>
	);
}
