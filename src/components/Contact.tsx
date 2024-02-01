import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// using formspree to directly mail me messages 
// https://formspree.io/

const Contact: React.FC = () => {
	const formspreeSecret = import.meta.env.VITE_FORMSPREE_SECRET;
	const [state, handleSubmit] = useForm(formspreeSecret);
	return (
		<div className="text-center mt-10 mb-36">
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
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col w-full gap-3 justify-center items-center mt-5">
					<input
						type="text"
						placeholder="Name"
						name="name"
						id="name"
						className="p-2 rounded-md w-96 focus:outline-orange-500 text-black"
					/>
					<ValidationError prefix="Name" field="text" errors={state.errors} />
					<input
						type="email"
						placeholder="Email"
						name="email"
						id="email"
						className="p-2 rounded-md w-96 focus:outline-orange-500 text-black"
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<textarea
						id="message"
						name="message"
						placeholder="Message..."
						className="p-2 rounded-md w-96 h-32 focus:outline-orange-500 text-black"
					/>
					<ValidationError
						prefix="Message"
						field="text"
						errors={state.errors}
					/>
					<input
						type="submit"
						value={state.succeeded ? "Message sent" : "Send"}
						disabled={state.succeeded || state.submitting}
						className={`${(state.succeeded || state.submitting)?"bg-orange-300":"bg-orange-500 hover:scale-105 cursor-pointer"} w-fit p-2 px-4 rounded-md text-xl`}
					/>

					<div className="flex" style={{ marginLeft: "35rem" }}>
						<img src="images/arrow.png" alt="arrow" />
						<div className="mb-8 relative bottom-20 text-3xl font-caveat -rotate-12">
							<p>You can also contact me </p>
							<p>through my socials </p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
