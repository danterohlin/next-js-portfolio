import "../styles/index.css";
import Navbar from "../components/navbar";
import GitHubShareButton from "../components/githubShareBtn";
import PageSocial from "../components/pageSocial";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Navbar />
			<Component {...pageProps} />
			<PageSocial />
			<GitHubShareButton />
		</ThemeProvider>
	);
}

export default MyApp;
