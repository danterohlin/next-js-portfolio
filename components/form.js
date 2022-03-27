import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ _id }) {
	const [formData, setFormData] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		let response;
		setFormData(data);
		try {
			response = _id
				? await fetch("/api/createComment", {
						method: "POST",
						body: JSON.stringify(data),
						type: "application/json",
				  })
				: await fetch("/api/createMessage", {
						method: "POST",
						body: JSON.stringify(data),
						type: "application/json",
				  });
			setIsSubmitting(false);
			setHasSubmitted(true);
		} catch (err) {
			setFormData(err);
		}
	};

	if (isSubmitting) {
		return <h3>Submitting {_id ? "comment…" : "message..."}</h3>;
	}
	if (hasSubmitted) {
		return (
			<>
				<h3>Success, thank you!</h3>
				<ul>
					<li>
						Name: {formData.name} <br />
						Email: {formData.email} <br />
						{_id ? "Comment: " + formData.comment : "Message: " + formData.message}
					</li>
				</ul>
			</>
		);
	}

	return (
		<>
			{/* <form action="mailto:dante.rohlin@gmail.com" method="GET">
				<input name="subject" type="text" />
				<textarea name="body"></textarea>
				<input type="submit" value="Send" />
			</form> */}

			<form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg" disabled>
				<input {...register("_id")} type="hidden" name="_id" value={_id} />
				<label className="block mb-5">
					<span className="text-gray-700">Name</span>
					<input
						name="name"
						{...register("name", { required: true })}
						className="shadow border rounded py-2 px-3 form-input mt-1 block w-full"
						placeholder="John Appleseed"
					/>
				</label>
				<label className="block mb-5">
					<span className="text-gray-700">Email</span>
					<input
						name="email"
						type="email"
						{...register("email", { required: true })}
						className="shadow border rounded py-2 px-3 form-input mt-1 block w-full"
						placeholder="your@email.com"
					/>
				</label>

				{_id ? (
					<label className="block mb-5">
						<span className="text-gray-700">Comment</span>
						<textarea
							{...register("comment", { required: true })}
							name={"comment"}
							className="shadow border rounded py-2 px-3  form-textarea mt-1 block w-full"
							rows="8"
							placeholder="Enter some long form content."
						></textarea>
					</label>
				) : (
					<label className="block mb-5">
						<span className="text-gray-700">Message</span>
						<textarea
							{...register("message", { required: true })}
							name={"message"}
							className="shadow border rounded py-2 px-3  form-textarea mt-1 block w-full"
							rows="8"
							placeholder="Enter some long form content."
						></textarea>
					</label>
				)}

				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}
				<input
					type="submit"
					className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
				/>
			</form>
		</>
	);
}
