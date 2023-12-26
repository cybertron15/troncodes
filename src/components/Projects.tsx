import { ArrowUpRight, Heart } from "lucide-react";
import ImageDisplay from "./ImageDisplay";
import TechTile from "./TechTile";
import projects from "../data/projects";

const Projects: React.FC = () => {
	
	return (
		<>
			<div className="px-5">
				<div className="flex justify-between mt-10">
					<div className="font-roboto text-5xl ">
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
			<div className="px-14" style={{ backgroundColor: "#212121" }}>
				<div className="mt-5">
					{projects.map((project) => {
						return (
							<div className="flex" key={project.name}>
								<ImageDisplay images={project.images} project={project.name} />
								<div className="basis-3/5 h-10 my-12 ms-10">
									<div className="font-roboto text-6xl relative bottom-2">
										Auto Learn
									</div>
									<div className="font-roboto text-xl h-36 overflow-auto">
										{project.desc}
									</div>
									<div className="font-roboto text-2xl relative bottom-2 mt-8">
										Tech Stack
									</div>
									<div className="flex gap-5 w-full ">
										{project.techStack.map((tech) => {
											return <TechTile tech={tech} key={tech}/>;
										})}
									</div>
									<hr className="to-white my-4" />
									<div className="flex gap-3 justify-between">
										<div className="basic-1/2 w-full">
											<button
												type="button"
												className="bg-slate-700 hover:bg-slate-800 w-full text-xl p-3 rounded-md"
											>
												Source Code
											</button>
										</div>
										<div className="basic-1/2 w-full">
											<button
												type="button"
												className="bg-orange-500 hover:bg-orange-600 w-full text-xl p-3 rounded-md"
											>
												Open Application
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Projects;
