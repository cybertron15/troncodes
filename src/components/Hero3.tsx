// import { useRef, useEffect } from "react";
import ScrollCarousel from "scroll-carousel-react";
import skills from "../data/skills";
// import TechTile from "./TechTile";

const Hero3: React.FC = () => {
	return (
		<div className="text-center fixed w-full mt-24">
			<div className="font-roboto text-5xl">
				along with debts I have these skills
			</div>
			<ScrollCarousel
				autoplay
				autoplaySpeed={8}
				speed={7}
			>
				{skills.map((item) => (
					<div
						key={item.name}
						className="rounded h-48 w-40 mx-7 flex flex-col justify-center items-center mt-10"
					>
						<img
							src={`images/techstack/${item.img}`}
							alt="icon"
							className="object-contain rounded-xl w-32 h-32 hover:scale-105 transition-transform duration-300 transform cursor-pointer hover:ring-1 ring-orange-500"
						/>
						<div className="mt-2 text-2xl">
							{item.name}
						</div>
					</div>
				))}
			</ScrollCarousel>
		</div>
	);
};

export default Hero3;
