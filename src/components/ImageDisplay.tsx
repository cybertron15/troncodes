import { useState } from "react";

interface ImageDisplayProps {
    images: string[];
    project: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({images,project}) => {
    const [currentPicture, setcurrentPicture] = useState(images[0]);
    const [active, setactive] = useState(images[0]);
	const changeActive = (name: string) => {
		setactive(name);
	};
	return (
		<div className="">
			<div className="">
				<img
					src={`images/projects/${project}/${currentPicture}`}
					alt=""
					className="object-contain rounded-lg w-full aspect-video bg-black p-1"
				/>
			</div>
			<div className="flex justify-between gap-2 w-full cursor-pointer mt-2">
				{images.map((img) => {
					return (
						<div
							className={`aspect-video transition-transform duration-300 transform ${
								active === img && "ring-2 ring-orange-500"
							} rounded-lg`}
							onClick={() => {
								setcurrentPicture(img);
								changeActive(img);
							}}
							onKeyDown={() => {
								setcurrentPicture(img);
								changeActive(img);
							}}
                            key={img}
						>
							<img
								src={`images/projects/${project}/${img}`}
								alt={img}
								className="object-cover h-full rounded-lg"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageDisplay;
