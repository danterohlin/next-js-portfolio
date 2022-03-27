import markdownStyles from "./styles.module.css";
import { PortableText } from "@portabletext/react";

export default function PostBody({ content }) {
	return (
		<div className={"max-w-2xl mx-auto p-2 xs:p-0 " + markdownStyles.markdown}>
			<PortableText value={content} />
		</div>
	);
}
