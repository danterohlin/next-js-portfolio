import Avatar from "./avatar";
import Date from "./date";
import GameTitle from "./game-title";
export default function PostHeader({ title, link, date, author }) {
	return (
		<div className="p-2 xs:p-0">
			<GameTitle link={link}>{title}</GameTitle>
			<div className="hidden md:block md:mb-12"></div>
		</div>
	);
}
