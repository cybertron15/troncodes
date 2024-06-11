import { ArrowUpRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import ImageDisplay from "./ImageDisplay";
import TechTile from "./TechTile";
import projects from "../data/projects";
import { useState } from "react";
const Projects: React.FC = () => {
	const [move, setmove] = useState(0);
	const handleMove = (sign: "+" | "-") => {
		setmove((prev) => {
			const limit = -projects.length * 100 + 100;
			if (sign === "+") {
				if (limit < prev) return prev - 100;
				return prev;
			}
			if (sign === "-") {
				if (0 > prev) return prev + 100;
				return prev;
			}
			return prev + 100;
		});
	};
	return (
		<>
			<div className="px-5">
				<div className="md:flex md:justify-between ">
					<div className="font-roboto md:text-3xl lg:text-5xl sm:text-5xl text-4xl">
						I{" "}
						<Heart
							className="inline animate-heartbeat"
							strokeWidth={0}
							width="46"
							height="46"
							fill="red"
						/>{" "}
						to build stuff
					</div>
					<a
						href="https://github.com/cybertron15"
						target="_blank"
						rel="noreferrer"
						className="mt-auto "
					>
						<div className="flex gap-1 underline">
							<span className="text-lg mt-auto">Github</span>{" "}
							<span className="mt-auto">
								<ArrowUpRight className="pe-0" />
							</span>
						</div>
					</a>
				</div>
			</div>
			<div
				className="flex justify-center mt-5"
				style={{ backgroundColor: "#212121" }}
			>
				<div className="md:flex flex-col w-14 justify-center items-center hidden">
					<ChevronLeft
						size={"55"}
						onClick={() => handleMove("-")}
						className="cursor-pointer"
					/>
				</div>
				{/* window */}
				<div className="w-full overflow-hidden">
					{/* slider */}
					<div
						className={"flex w-full mt-5 transition delay-100"}
						style={{ transform: `translateX(${move}%)` }}
					>
						{projects.map((project) => {
							return (
								// <div className="flex flex-none w-full px-3" key={project.title}>
								<div
									className="lg:flex gap-5 flex-none w-full px-4"
									key={project.title}
								>
									<div className="basis-2/3 mb-2">
										<ImageDisplay
											images={project.images}
											project={project.name}
										/>
									</div>
									<div className="basis-3/5 mt-4 flex flex-col justify-between">
										<div>
											<div className="font-roboto md:text-3xl lg:text-4xl xl:text-5xl sm:text-5xl text-4xl relative">
												{project.title}
											</div>
											<div className="font-roboto md:text-xl lg:text-lg xl:text-2xl xl:h-48 text-sm h-20 md:h-28 lg:mt-2 overflow-y-auto">
												{project.desc}
											</div>
										</div>
										<div>
											<div className="font-roboto md:text-2xl text-xl lg:text-lg xl:text-2xl relative bottom-2 mt-8">
												Tech Stack
											</div>

											<div className="flex flex-wrap gap-5 w-full h-14 overflow-y-scroll">
												{project.techStack.map((tech) => {
													return (
														<TechTile
															tech={tech.name}
															key={tech.name}
															link={tech.link}
															img={tech.img}
															dimensions={"14"}
														/>
													);
												})}
											</div>

										
											 <div>
												<hr className="to-white mt-6 mb-2 lg:mb-6" />
												<div className="flex gap-3 justify-between md:mb-2">
												
													<div className="basic-1/2 w-full">
													<button type="button" disabled={!project.opensource} className="bg-slate-700 hover:bg-slate-800 w-full text-lg md:text-xl lg:text-lg p-3 lg:p-1 xl:p-3 rounded-md text-center">
														<a href={project.github}
															target="blank"
															type="button"
															
															>
															Source Code {!project.opensource && "(Private)"}
														</a>
															</button>
													</div>
													{project.live &&
														<div className="basic-1/2 w-full">
														<a href={project.liveLink}
															target="blank"
															type="button"
															className="bg-orange-500 hover:bg-orange-600 w-full text-lg md:text-xl p-3 lg:p-1 xl:p-3 rounded-md lg:text-lg text-center"
														>
															Open Application
														</a>
													</div>}
												</div>
											</div>
										</div>


										<div className="flex justify-between md:hidden mt-2 mb-2 gap-3">
											<button
												type="button"
												className="flex flex-col justify-center items-center bg-gray-800 rounded-lg"
											>
												<ChevronLeft
													size={"40"}
													onClick={() => handleMove("-")}
													className="cursor-pointer"
												/>
											</button>
											<button
												type="button"
												className="flex flex-col justify-center items-center bg-gray-800 rounded-lg"
											>
												<ChevronRight
													size={"40"}
													onClick={() => handleMove("+")}
													className="cursor-pointer hover:to-red-600"
												/>
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="md:flex flex-col w-14 justify-center items-center hidden">
					<ChevronRight
						size={"55"}
						onClick={() => handleMove("+")}
						className="cursor-pointer hover:to-red-600"
					/>
				</div>
			</div>
		</>
	);
};

export default Projects;
