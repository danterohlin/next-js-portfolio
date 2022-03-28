import { imageBuilder } from "../lib/sanity";
import { useState } from "react";

export default function Posters({ posters = [], link }) {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<div className="hidden sm:block">
			<p
				className={`p-2 mx-2 cursor-pointer`}
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{!toggle ? "Show Gallery" : "Hide Gallery"}
			</p>
			{toggle ? (
				<div className="grid grid-cols-2 p-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 row-gap-20 md:row-gap-32 mb-32">
					{posters?.map(({ poster, caption, i }) => (
						<div
							key={i}
							className="poster mx-2 relative m-2 w-fit sm:w-fit flex opacity-90 drop-shadow-xl hover:opacity-100 items-center justify-center"
						>
							<img
								alt={caption}
								src={imageBuilder(poster).url()}
								width="250"
								className="rounded-3xl border-2 border-black dark:border-0 "
								key={i}
							/>
							<p className="font-semibold bg-green-500 bg-opacity-70 text-xs dark:bg-gray-800 sm:text-sm sm:bg-green-500 text-white  dark:text-white rounded-r-md p-2 absolute bottom-10 -left-2 pointer-events-none">
								{caption}
							</p>
						</div>
					))}
				</div>
			) : (
				<div>
					<hr></hr>
				</div>
			)}
			</div>
			<div className="sm:hidden">
			<p
				className={`p-2 mx-2 cursor-pointer`}
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{toggle ? "Show Gallery" : "Hide Gallery"}
			</p>
			{toggle ? (
				<div className="grid grid-cols-2 p-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 row-gap-20 md:row-gap-32 mb-32">
					{posters?.map(({ poster, caption, i }) => (
						<div
							key={i}
							className="poster mx-2 relative m-2 w-fit sm:w-fit flex opacity-90 drop-shadow-xl hover:opacity-100 items-center justify-center"
						>
							<img
								alt={caption}
								src={imageBuilder(poster).url()}
								width="250"
								className="rounded-3xl border-2 border-black dark:border-0 "
								key={i}
							/>
							<p className="font-semibold bg-green-500 bg-opacity-70 text-xs dark:bg-gray-800 sm:text-sm sm:bg-green-500 text-white  dark:text-white rounded-r-md p-2 absolute bottom-10 -left-2 pointer-events-none">
								{caption}
							</p>
						</div>
					))}
				</div>
			) : (
				<div>
					<hr></hr>
				</div>
			)}
			</div>
		</>
	);
}
