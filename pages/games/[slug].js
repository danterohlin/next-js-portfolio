import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import GameBody from "../../components/game-body";
import MoreStories from "../../components/more-stories";
import MoreProjects from "../../components/more-projects";
import GameHeader from "../../components/game-header";
import Comments from "../../components/comments";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllGamesWithSlug, getGameAndMoreGames } from "../../lib/api";
import GameTitle from "../../components/game-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Form from "../../components/form";

export default function Game({ game, moreGames, preview }) {
	const router = useRouter();
	if (!router.isFallback && !game?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<Container>
				{router.isFallback ? (
					<GameTitle>Loading…</GameTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{game.title} | Next.js Portfolio Example with {CMS_NAME}
								</title>
								{/* <meta property="og:image" content={game.ogImage.url} /> */}
							</Head>
							<GameHeader
								title={game.title}
								coverImage={game.coverImage}
								date={game.date}
								author={game.author}
							/>
							<GameBody content={game.body} />
						</article>

						<Comments comments={game.comments} />
						<Form _id={game._id} />

						<SectionSeparator />
						{moreGames.length > 0 && <MoreProjects games={moreGames} />}
					</>
				)}
			</Container>
		</Layout>
	);
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getGameAndMoreGames(params.slug, preview);
	return {
		props: {
			preview,
			game: data?.game || null,
			moreGames: data?.moreGames || null,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllGamesWithSlug();
	return {
		paths:
			allPosts?.map((game) => ({
				params: {
					slug: game.slug,
				},
			})) || [],
		fallback: true,
	};
}
