import "../styles/index.css";
import Navbar from "../components/navbar";
import GitHubShareButton from "../components/githubShareBtn";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<GitHubShareButton />
		</>
	);
}

export default MyApp;
