import React from "react";

const Contact: React.FC = () => {
	return (
		<div className="text-center mt-10">
			<div className="font-roboto text-5xl">Contact</div>
			<div className="font-roboto text-xl mt-3">
				Hello random stranger from the internet. If you liked my portfolio and
				feel
			</div>
			<div className="font-roboto text-xl">
				like I can help you build something awesome, checkout my{" "}
				<a
					href="files/PalashDhavleResume.pdf"
					target="_blank"
					rel="noreferrer"
					className="underline"
				>
					resume
				</a>
				. you
			</div>
			<div className="font-roboto text-xl">
				can fill this form to reach out to me.
			</div>
			<div className="flex flex-col w-full gap-3 justify-center items-center mt-5">
				<input type="text" placeholder="Name" className="p-2 rounded-md w-96" />
				<input
					type="email"
					placeholder="Email"
					className="p-2 rounded-md w-96"
				/>
				<textarea
					id="w3review"
					name="w3review"
					placeholder="Message..."
					className="p-2 rounded-md w-96 h-32"
				/>
				<input
					type="button"
					value="Send"
					className="bg-orange-500 w-24 p-2 rounded-md text-xl cursor-pointer hover:scale-105"
				/>
				<div className="flex" style={{marginLeft:"35rem"}}>
					<img src="images/arrow.png" alt="arrow" />
					<div className="mb-8 relative bottom-20 text-3xl font-caveat -rotate-12">
						<p>You can also contact me </p>
						<p>through my socials </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
