import { ArrowBigDownDash } from "lucide-react";
import TechTile from "./TechTile";
import experience from "../data/exprience";
import { useState } from "react";

const Exprience: React.FC = () => {
	const [exp, setexp] = useState(experience.backendEgineer);
    const [active, setactive] = useState(experience.backendEgineer.title);
	const changeActive = (name: string) => {
		setactive(name);
	};
	return (
		<>
			<div className="px-5">
				<div className="flex justify-between">
					<div className="font-roboto text-5xl ">I have been to places</div>
					<a
						href="files/PalashDhavleResume.pdf"
						target="_blank"
						rel="noreferrer"
						className="underline flex gap-1"
					>
						<span className="text-lg mt-auto">Resume</span>{" "}
						<span className="mt-auto">
							<ArrowBigDownDash className="pe-0" />
						</span>
					</a>
				</div>
				<div className="flex mt-6 ps-24">
					<div className="basis-1/2 flex gap-6">
						<div
							className="flex flex-col justify-around h-96 font-roboto"
							style={{ height: "30rem" }}
						>
							{Object.entries(experience).map(([key, value]) => {
								return (
									<div
										key={key}
										className={`cursor-pointer ${active === value.title && "text-orange-500"} text-3xl hover:scale-105`}
										onClick={() => {
                                            changeActive(value.title)
											setexp(experience[key]);
										}}
										onKeyDown={() => {
                                            changeActive(value.title)
											setexp(experience[key]);
										}}
									>
										{value.year}
									</div>
								);
							})}
						</div>
						<div
							className="flex flex-col justify-around h-96 border-s-4 rounded-sm w-28"
							style={{ height: "30rem" }}
						>
                            {Object.entries(experience).map(([key, value]) => {
								return (
									<div
										key={key}
										className="h-1 bg-white rounded-sm"

									>
										<div className={`w-5 h-5 relative bottom-2 right-3 rounded-full ${active === value.title? "bg-orange-500":"bg-white"} ring-2 ring-white`} />
									</div>
								);
							})}
							{/* <div className="h-1 bg-white rounded-sm">
								<div className="w-5 h-5 relative bottom-2 right-3 rounded-full bg-orange-500 ring-2 ring-white" />
							</div>
							<div className="h-1 bg-white rounded-sm">
								<div className="w-5 h-5 relative bottom-2 right-3 rounded-full bg-white" />
							</div>
							<div className="h-1 bg-white rounded-sm">
								<div className="w-5 h-5 relative bottom-2 right-3 rounded-full bg-white" />
							</div> */}
						</div>
						<div
							className="flex flex-col justify-around h-96 font-roboto"
							style={{ height: "30rem" }}
						>
							{Object.entries(experience).map(([key, value]) => {
								return (
									<div
										key={key}
										className={`cursor-pointer ${active === value.title && "text-orange-500"} text-3xl hover:scale-105`}
										onClick={() => {
                                            changeActive(value.title)
											setexp(experience[key]);
										}}
										onKeyDown={() => {
                                            changeActive(value.title)
											setexp(experience[key]);
										}}
									>
										{value.title}
									</div>
								);
							})}
						</div>
					</div>
					<div className="basis-1/2">
						<div
							className="flex flex-col w-96 rounded-md"
							style={{
								width: "35rem",
								height: "30rem",
								backgroundColor: "#212121",
							}}
						>
							<div
								className="basis-3/12 h-14 bg-cover px-4 rounded-t-md"
								style={{
									backgroundImage: "url('images/bg2.jpg')",
									width: "35rem",
								}}
							>
								<div className="font-roboto text-4xl mt-10">{exp.title}</div>
								<div className="flex justify-between ms-1">
									<p className="font-roboto text-lg">{exp.company}</p>
									<p className="text-lg">{`${exp.duration[0]}-${exp.duration[1]}`}</p>
								</div>
							</div>
							<div className="overflow-auto h-52 mt-3">
								<div className=" ms-9">
									<ul className="list-disc text-md">
										{exp.work.map((item, index) => {
											return (
												<li key={`${index}${item.slice(0, 5)}`}>{item}</li>
											);
										})}
									</ul>
								</div>
							</div>
							<div className="mt-3 ms-5">
								<p className="font-roboto text-lg">TechStack</p>
								<div className="flex flex-wrap gap-5 w-full overflow-y-auto h-14 mt-2">
									{exp.techStack.map((tech) => {
										return (
											<TechTile tech={tech} key={tech} dimensions="11" />
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Exprience;
