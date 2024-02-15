import { ChevronDown } from "lucide-react";

const Hero2: React.FC = () => {
	
	const mediumScreenSize = 768
	let chevronSize
	if (window.innerWidth < mediumScreenSize){
		chevronSize = 30
	}
		else{
		chevronSize = 50
	}
	return (
		<div className="text-center fixed w-full mt-16">
			<div className="font-roboto md:text-3xl sm:text-2xl lg:text-5xl text-xl mt-28">
				Hello, My name is Palash Dhavle and I'm a 
			</div>
			<div className="font-roboto md:text-3xl sm:text-2xl lg:text-5xl text-xl mt-2">
				Software developer from Goa, India.
			</div>

			<div className="mt-4  md:text-lg text-xs">Keep Scrolling</div>
			<div className="flex justify-center mt-4">
				<div className="animate-bounce">
					<ChevronDown width={chevronSize} height={chevronSize} />
					<ChevronDown width={chevronSize} height={chevronSize} className="relative bottom-9" />
				</div>
			</div>
		</div>
	);
};

export default Hero2;
