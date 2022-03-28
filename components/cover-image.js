import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import styles from "./styles.module.css";

export default function CoverImage({ title, url, imageObject, slug }) {
	const image = (
		<img
			width={260}
			height={500}
			alt={`Cover Image for ${title}`}
			className={
				cn("shadow-small", {
					"hover:shadow-medium transition-shadow duration-200 rounded-2xl border-2 border-black ":
						slug,
				}) + styles.card_zoom_image
			}
			src={imageBuilder(imageObject).width(260).height(500).url()}
		/>
	);

	return (
		<div
			className={
				"-sm:mx-5 md:mx-0 opacity-90 hover:opacity-100 rounded-2xl hover:animate-wiggle " +
				styles.card_zoom
			}
		>
			{slug ? (
				<Link as={`/games/${slug}`} href="/games/[slug]">
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
}
