import client, { previewClient } from "./sanity";

export async function getAuthors() {
	const data = await getClient(true).fetch(`*[_type == "author"] {
    name,
    image,
  }`);
	return data;
}

const getUniquePosts = (posts) => {
	const slugs = new Set();
	return posts.filter((post) => {
		if (slugs.has(post.slug)) {
			return false;
		} else {
			slugs.add(post.slug);
			return true;
		}
	});
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
	const data = await getClient(true).fetch(
		`*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
		{ slug }
	);
	return data[0];
}

export async function getAllPostsWithSlug() {
	const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
	return data;
}

export async function getAllPostsForHome(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
	return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
	const curClient = getClient(preview);
	const [post, morePosts] = await Promise.all([
		curClient
			.fetch(
				`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
				{ slug }
			)
			.then((res) => res?.[0]),
		curClient.fetch(
			`*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
			{ slug }
		),
	]);
	return { post, morePosts: getUniquePosts(morePosts) };
}

/* GAMES */

const getUniqueGames = (games) => {
	const slugs = new Set();
	return games.filter((game) => {
		if (slugs.has(game.slug)) {
			return false;
		} else {
			slugs.add(game.slug);
			return true;
		}
	});
};

const gameFields = `
  _id,
  link,
  name, 
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

export async function getPreviewGameBySlug(slug) {
	const data = await getClient(true).fetch(
		`*[_type == "game" && slug.current == $slug] | order(publishedAt desc){
      ${gameFields}
      body
    }`,
		{ slug }
	);
	return data[0];
}

export async function getAllGamesWithSlug() {
	const data = await client.fetch(`*[_type == "game"]{ 'slug': slug.current }`);
	return data;
}

export async function getAllGamesForHome(preview) {
	const results = await getClient(preview)
		.fetch(`*[_type == "game"] | order(publishedAt desc){
      ${gameFields}
    }`);
	return getUniqueGames(results);
}

export async function getGameAndMoreGames(slug, preview) {
	const curClient = getClient(preview);
	const [game, moreGames] = await Promise.all([
		curClient
			.fetch(
				`*[_type == "game" && slug.current == $slug] | order(_updatedAt desc) {
        ${gameFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      game._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        },
		'posters': *[
                      _type == "poster" &&
                      game._ref == ^._id] {caption, 'poster': poster.asset->url}
      }`,
				{ slug }
			)
			.then((res) => res?.[0]),
		curClient.fetch(
			`*[_type == "game" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${gameFields}
        body,
      }[0...2]`,
			{ slug }
		),
	]);
	return { game, moreGames: getUniqueGames(moreGames) };
}
