import React from "react";
interface ImageDisplayProps {
	tech: string;
	dimensions: string;
	img:string;
	link: string;
}
const TechTile: React.FC<ImageDisplayProps> = ({ tech,img, dimensions,link}) => {
	return (
		<a
			title={tech.slice(0, -4)}
			className={`w-${dimensions} h-${dimensions} flex justify-center items-center rounded-lg hover:scale-105 transition-transform duration-300 transform cursor-pointer`}
			// className={`flex justify-center items-center rounded-lg hover:scale-105 transition-transform duration-300 transform cursor-pointer w-11 h-11`}
			href={link}
			target="blank"
		>
			<img
				className="object-contain rounded-lg"
				src={`images/techstack/${img}`}
				alt="icon"
			/>
		</a>
	);
};

export default TechTile;
