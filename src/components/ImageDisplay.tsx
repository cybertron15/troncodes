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
		<div className="flex-grow gap-4 flex flex-col my-12">
			<div className=" h-72">
				<img
					src={`images/projects/autolearn/${currentPicture}`}
					alt=""
					className="object-cover rounded-lg w-full h-full"
				/>
			</div>
			<div className="flex justify-between gap-5 w-full cursor-pointer">
				{images.map((img) => {
					return (
						<div
							className={`w-48 h-32  ${
								active === img && "ring-4 ring-orange-500"
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
