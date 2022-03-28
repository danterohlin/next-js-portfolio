import "../styles/index.css";
import Navbar from "../components/navbar";
import GitHubShareButton from "../components/githubShareBtn";
import PageSocial from "../components/pageSocial";
import { ThemeProvider } from "next-themes";
import BackgroundGradient from "../components/backgroundGradient";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&display=swap');
			</style>
			<Navbar />
			<BackgroundGradient />
			<Component {...pageProps} />
			<PageSocial />
			<GitHubShareButton />
		</ThemeProvider>
	);
}

export default MyApp;
