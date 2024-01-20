import { ChevronDown } from "lucide-react";

const Hero2: React.FC = () => {
	return (
		<div className="text-center fixed z-20 w-full mt-16">
			<div className="font-roboto text-5xl mt-28">
				Hello, My name is Palash Dhavle and I'm a 
			</div>
			<div className="font-roboto text-5xl mt-2">
				Software developer from Goa, India.
			</div>

			<div className="mt-4">Keep Scrolling</div>
			<div className="flex justify-center mt-4">
				<div className="animate-bounce">
					<ChevronDown width={50} height={50} />
					<ChevronDown width={50} height={50} className="relative bottom-9" />
				</div>
			</div>
		</div>
	);
};

export default Hero2;
