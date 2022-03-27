import Avatar from "./avatar";
import Date from "./date";
import GameTitle from "./game-title";
import { imageBuilder } from "../lib/sanity";
export default function PostHeader({ title, link, date, author }) {
	return (
		<>
			<GameTitle link={link}>{title}</GameTitle>
			<div className="hidden md:block md:mb-12">
				<Avatar name={author?.name} picture={author?.picture} />
			</div>
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar name={author?.name} picture={author?.picture} />
				</div>
				<div className="mb-6 text-lg">
					<Date dateString={date} />
				</div>
			</div>
		</>
	);
}
