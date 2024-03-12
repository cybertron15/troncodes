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
		<div className="text-center w-full">
			<div className="font-roboto md:text-3xl sm:text-2xl lg:text-5xl text-xl">
				Whether you're looking for a skilled freelancer or a dedicated team
			</div>
			<div className="font-roboto md:text-3xl sm:text-2xl lg:text-5xl text-xl mt-2">
			member. let's connect and bring your projects to life together.
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
