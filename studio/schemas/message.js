import { CommentIcon } from "@sanity/icons";

export default {
	name: "message",
	type: "document",
	title: "Message",
	icon: CommentIcon,
	fields: [
		{
			name: "name",
			type: "string",
		},
		{
			name: "email",
			type: "string",
		},
		{
			name: "message",
			type: "text",
		},
	],
	preview: {
		select: {
			name: "name",
			comment: "message",
		},
		prepare({ name, message }) {
			/** ({ name, comment, post }) */
			return {
				title: `${name}` /* `${name} on ${post}` */,
				subtitle: message,
			};
		},
	},
};
