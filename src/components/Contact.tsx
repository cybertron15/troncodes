import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// using formspree to directly mail me messages 
// https://formspree.io/

const Contact: React.FC = () => {
	const formspreeSecret = import.meta.env.VITE_FORMSPREE_SECRET;
	const [state, handleSubmit] = useForm(formspreeSecret);
	return (
		<div className="text-center mt-10 lg:mb-32 mb-56">
			<div className="font-roboto md:text-3xl lg:text-5xl sm:text-5xl text-4xl">Contact</div>
			<div className="font-roboto  md:text-lg lg:text-2xl text-sm mt-3 px-8 lg:px-40 xl:px-80">
				Hello random stranger from the internet. If you liked my portfolio and
				feel like I can help you build something awesome, checkout my{" "}
				<a
					href="files/PalashDhavleResume.pdf"
					target="_blank"
					rel="noreferrer"
					className="underline text-orange-400"
				>
					resume
				</a>
				. you can fill this form to reach out to me.
			</div>
			<form onSubmit={handleSubmit} method="POST">
				<div className="flex flex-col w-full gap-3 justify-center items-center mt-5">
					<input
						type="text"
						placeholder="Name"
						name="name"
						id="name"
						className="p-2 rounded-md  w-80 lg:w-96 focus:outline-orange-500 text-black md:text-lg lg:text-xl text-sm"
					/>
					<ValidationError prefix="Name" field="text" errors={state.errors} />
					<input
						type="email"
						placeholder="Email"
						name="email"
						id="email"
						className="p-2 rounded-md w-80 lg:w-96 focus:outline-orange-500 text-black md:text-lg lg:text-xl text-sm"
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<textarea
						id="message"
						name="message"
						placeholder="Message..."
						className="p-2 rounded-md  w-80 lg:w-96 h-32 focus:outline-orange-500 text-black md:text-lg lg:text-xl text-sm"
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

				</div>
			</form>
		</div>
	);
};

export default Contact;
