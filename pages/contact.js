import Form from "../components/form";
import Container from "../components/container";

export default function contact() {
	return (
		<div class="p-4 sm:p-0">
			<Container>
				<div>
					<h2 className="pt-4 text-5xl">Contact me here!</h2>
				</div>
				<div className="pt-10">
					<Form />
				</div>
			</Container>
		</div>
	);
}
