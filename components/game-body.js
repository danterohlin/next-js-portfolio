import markdownStyles from "./styles.module.css";
import { PortableText } from "@portabletext/react";
import Date from "./date";

export default function PostBody({ content, date }) {
	return (
		<div className={"max-w-2xl mx-auto p-2 xs:p-0 " + markdownStyles.markdown}>
			<div className="mb-6 text-lg">
				<Date dateString={date} />
			</div>
			<div className="body-text">
				{content && <PortableText value={content} />}
			</div>
		</div>
	);
}
