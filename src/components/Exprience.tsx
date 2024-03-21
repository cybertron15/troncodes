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
				<div className="md:flex md:justify-between">
					<div className="font-roboto md:text-3xl lg:text-5xl sm:text-5xl text-4xl">I have been to places</div>
					<a
						href="files/PalashDhavleResume.pdf"
						target="_blank"
						rel="noreferrer"
						className="underline flex gap-1"
					>
						<span className="text-lg mt-auto animate-pulse">Resume</span>{" "}
						<span className="mt-auto animate-pulse">
							<ArrowBigDownDash className="pe-0" />
						</span>
					</a>
				</div>
				<div className="flex flex-col lg:flex-row mt-6 lg:ps-24 gap-2 xl:gap-0">
					<div className="basis-1/2 lg:flex gap-6">
						<div
							className="flex lg:flex-col justify-around lg:h-[30rem] font-roboto"
						>
							{Object.entries(experience).map(([key, value]) => {
								return (
									<div
										key={key}
										className={`cursor-pointer ${active === value.title && "text-orange-500"} md:text-xl lg:text-2xl xl:text-3xl hover:scale-105`}
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
							className="flex lg:flex-col justify-around lg:h-[30rem] h-[2rem] lg:border-s-4 border-t-2 md:border-t-4 lg:border-t-0 rounded-sm mt-3 lg:mt-0"
						>
                            {Object.entries(experience).map(([key, value]) => {
								return (
									<div
										key={key}
										className="lg:h-1 w-[2px] md:w-1 lg:w-36 bg-white rounded-sm"

									>
										<div className={`lg:w-5 lg:h-5 w-2 h-2 md:w-4 md:h-4 md:right-1.5 md:bottom-2 relative lg:bottom-2 lg:right-3 right-[3px] bottom-1 rounded-full ${active === value.title? "bg-orange-500":"bg-white"} ring-2 ring-white`} />
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
							className="flex lg:flex-col justify-around lg:h-[30rem] font-roboto"
						>
							{Object.entries(experience).map(([key, value]) => {
								return (
									<div
										key={key}
										className={`cursor-pointer ${active === value.title && "text-orange-500"} md:text-xl lg:text-xl xl:text-3xl hover:scale-105 w-1/4 xl:w-fit text-center`}
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
					<div className="basis-1/2 mt-5 lg:mt-0">
						<div
							className="flex flex-col lg:w-[35rem] lg:h-[30rem] md:h-[37rem] w-full rounded-md bg-[#212121]"
						>
							<div
								className="basis-3/12 h-14 lg:w-[35rem] bg-cover px-4 rounded-t-md"
								style={{
									backgroundImage: "url('images/bg2.jpg')",
								}}
							>
								<div className="font-roboto text-2xl md:text-4xl md:mt-10 mt-3">{exp.title}</div>
								<div className="flex justify-between md:ms-1 mb-1">
									<p className="font-roboto text-base md:text-xl">{exp.company}</p>
									<p className="text-base md:text-xl">{`${exp.duration[0]}-${exp.duration[1]}`}</p>
								</div>
							</div>
							<div className="overflow-auto h-52 md:h-80 lg:h-52  mt-3">
								<div className=" ms-9">
									<ul className="list-disc md:text-xl lg:text-lg text-sm">
										{exp.work.map((item, index) => {
											return (
												<li key={`${index}${item.slice(0, 5)}`}>{item}</li>
											);
										})}
									</ul>
								</div>
							</div>
							<div className="mt-3 ms-5 mb-4">
								<p className="font-roboto md:text-2xl text-xl lg:text-lg xl:text-2xl ">TechStack</p>
								<div className="flex flex-wrap gap-5 w-full overflow-y-auto h-14 mt-2">
									{exp.techStack.map((tech) => {
										return (
											<TechTile tech={tech.name} key={tech.name} img={tech.img} link={tech.link} dimensions="14" />
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
