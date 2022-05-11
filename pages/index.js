import Container from "../components/container";
import MoreProjects from "../components/more-projects";
import GameHero from "../components/hero-game";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { getAllGamesForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Intro from "../components/intro";

export default function Index({ allGames, allPosts, preview }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	const heroGame = allGames[0];
	const moreGames = allGames.slice(1);

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Andreas Portfolio</title>
				</Head>
				<Container>
					<Intro games={allGames} />
					{/* {GameHero && (
						<GameHero
							title={heroGame.title}
							coverImage={heroGame.coverImage}
							date={heroGame.date}
							author={heroGame.author}
							slug={heroGame.slug}
							excerpt={heroGame.excerpt}
						/>
					)} */}
					{moreGames.length > 0 && <MoreProjects games={moreGames} />}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	const allGames = await getAllGamesForHome(preview);
	return {
		props: { allGames, allPosts, preview },
		revalidate: 1,
	};
}
