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
			className={'rounded-lg hover:scale-105 transition-transform duration-300 transform cursor-pointer flex-shrink-0'}
			href={link}
			target="blank"
		>
			<img
				className={`w-${dimensions} h-${dimensions} object-contain rounded-lg`}
				src={`images/techstack/${img}`}
				alt="icon"
			/>
		</a>
	);
};

export default TechTile;
