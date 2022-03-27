import { CommentIcon } from "@sanity/icons";

export default {
	name: "comment",
	type: "document",
	title: "Comment",
	icon: CommentIcon,
	fields: [
		{
			name: "name",
			type: "string",
		},
		{
			title: "Approved",
			name: "approved",
			type: "boolean",
			description: "Comments won't show on the site without approval",
		},
		{
			name: "email",
			type: "string",
		},
		{
			name: "comment",
			type: "text",
		},
		{
			name: "game",
			type: "reference",
			to: [{ type: "game" }],
		},
	],
	preview: {
		select: {
			name: "name",
			comment: "comment",
			game: "game.title",
		},
		prepare({ name, comment, game }) {
			return {
				title: `${name} on ${game}`,
				subtitle: comment,
			};
		},
	},
};
