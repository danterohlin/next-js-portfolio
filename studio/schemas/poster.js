import { ImageIcon } from "@sanity/icons";

export default {
	name: "poster",
	type: "document",
	title: "Poster",
	icon: ImageIcon,
	fields: [
		{
			name: "poster",
			title: "Poster",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "caption",
			type: "string",
			title: "Caption",
			options: {
				isHighlighted: true, // <-- make this field easily accessible
			},
		},
		// {
		// 	// Editing this field will be hidden behind an "Edit"-button
		// 	name: "attribution",
		// 	type: "string",
		// 	title: "Attribution",
		// },
		{
			name: "game",
			type: "reference",
			to: [{ type: "game" }],
		},
	],
	// preview: {
	// 	select: {
	// 		caption: "caption",
	// 		poster: "poster",
	// 		game: "game.title",
	// 	},
	// 	prepare({ caption, poster, game }) {
	// 		return {
	// 			title: `${caption} on ${game}`,
	// 			subtitle: comment,
	// 		};
	// 	},
	// },
};
