import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import Image from "next/image";

export default function HeroGame({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage
					slug={slug}
					imageObject={coverImage}
					title={title}
					url={coverImage}
				/>
				{/* <Image src="/quiz1.png" width="300" height="550" alt="andreas-spel" />
				<Image src="/quiz2.png" width="300" height="550" alt="andreas-spel" />
				<Image src="/quiz3.png" width="300" height="550" alt="andreas-spel" />
				<Image src="/quiz4.png" width="300" height="550" alt="andreas-spel" /> */}
			</div>
			<div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
						<Link as={`/games/${slug}`} href="/games/[slug]">
							<a className="hover:underline">Hyper Pong v1.5</a>
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<Date dateString={date} />
					</div>
				</div>
				<div>
					<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
					<Avatar name={author?.name} picture={author?.picture} />
				</div>
			</div>
		</section>
	);
}
