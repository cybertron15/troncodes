import { ChevronDown } from "lucide-react";
interface HeroProps {
	navbarController: (navigateTo: string) => void;
  };
const Hero: React.FC<HeroProps>  = ({ navbarController }) => {
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
			<div className="font-roboto md:text-7xl lg:text-8xl sm:text-5xl text-3xl mt-16">
				Welcome to <span className="font-pacifico">TronCodes</span>
			</div>
			<div className="font-roboto md:text-3xl sm:text-2xl text-lg md:mt-4 mt-2">
				I code, Therefore I am not broke.
			</div>
			<div className="font-roboto md:text-2xl sm:text-xl text-sm italic mt-2">&mdash; Palash Dhavle</div>
			<button
				type="button"
				className="bg-orange-500 md:text-2xl text-sm px-6 pt-1 pb-1 rounded-lg mt-3 cursor-pointer hover:scale-105"
				onClick={()=>navbarController("contact")}
			>
				Hire me
			</button>
			<div className="mt-2 md:text-lg text-xs">Scroll to know more</div>
			<div className="flex justify-center mt-4">
			<div className="animate-bounce">
					<ChevronDown width={chevronSize} height={chevronSize} />
					<ChevronDown width={chevronSize} height={chevronSize} className="relative bottom-9" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
