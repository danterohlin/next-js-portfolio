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
					"hover:shadow-medium drop-shadow-2xl transition-shadow drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_35px_35px_rgba(123,123,123,0.1)] dark:hover:drop-shadow-[0_35px_35px_rgba(123,123,123,0.12)] duration-200 rounded-2xl border-2 border-black ":
						slug,
				}) + styles.card_zoom_image
			}
			src={imageBuilder(imageObject).width(260).height(500).url()}
		/>
	);

	return (
		<div
			className={
				"-sm:mx-5 md:mx-0 opacity-90 hover:opacity-100 hover:animate-wiggle " +
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
