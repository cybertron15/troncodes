import React from "react";
interface ImageDisplayProps {
	tech: string;
	dimensions: string;
}
const TechTile: React.FC<ImageDisplayProps> = ({ tech, dimensions}) => {
	return (
		<div
			title={tech.slice(0, -4)}
			className={`w-${dimensions} h-${dimensions} flex justify-center items-center rounded-lg hover:scale-105 transition-transform duration-300 transform cursor-pointer`}
		>
			<img
				className="object-contain rounded-lg"
				src={`images/techstack/${tech}`}
				alt="icon"
			/>
		</div>
	);
};

export default TechTile;
