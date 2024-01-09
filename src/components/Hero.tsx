import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
	return (
		<div className="text-center">
			<div className="font-roboto text-8xl mt-20">
				Welcome to <span className="font-pacifico">TronCodes</span>
			</div>
			<div className="font-roboto text-3xl mt-4">
				I code, Therefore I am not broke.
			</div>
			<div className="font-roboto text-2xl italic mt-2">&mdash; Palash Dhavle</div>
			<button
				type="button"
				className="bg-orange-500 text-2xl px-6 pt-1 pb-1 rounded-lg mt-3 cursor-pointer hover:scale-105"
			>
				Hire me
			</button>
			<div className="mt-2">Know more</div>
			<div className="flex justify-center mt-4">
				<div className="animate-bounce">
					<ChevronDown width={50} height={50}/>
					<ChevronDown  width={50} height={50} className="relative bottom-9" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
