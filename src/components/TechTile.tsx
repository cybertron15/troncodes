import React from "react";
interface ImageDisplayProps {
	tech: string;
}
const TechTile: React.FC<ImageDisplayProps> = ({ tech }) => {
	return (
		<div
			title={tech.slice(0, -4)}
			className="w-20 h-20 flex justify-center items-center rounded-lg hover:scale-105 transition-transform duration-300 transform"
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
