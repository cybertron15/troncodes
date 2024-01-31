import { ArrowUpRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import ImageDisplay from "./ImageDisplay";
import TechTile from "./TechTile";
import projects from "../data/projects";
import { useState } from "react";
const Projects: React.FC = () => {
	const [move, setmove] = useState(0);
	const handleMove = (sign: "+" | "-") => {
		setmove((prev) => {
			const limit = (-projects.length * 100) + 100
			if (sign === "+") {
				if (limit < prev)
					return prev - 100; return prev
			}if (sign === "-"){
				if (0 > prev)
					return prev + 100; return prev
			}
			return prev + 100;
		});
	};
	return (
		<>
			<div className="px-5 mt-5">
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
			<div
				className="flex justify-center mt-5"
				style={{ backgroundColor: "#212121" }}
			>
				<div className="flex flex-col w-14 justify-center items-center">
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
						className={"flex mt-5 transition delay-100"}
						style={{ transform: `translateX(${move}%)` }}
					>
						{projects.map((project) => {
							return (
								<div className="flex flex-none w-full px-3" key={project.title}>
									<ImageDisplay
										images={project.images}
										project={project.name}
									/>
									<div className="basis-3/5 h-10 my-12 ms-10">
										<div className="font-roboto text-6xl relative">
											{project.title}
										</div>
										<div className="font-roboto text-xl h-36 overflow-y-auto">
											{project.desc}
										</div>
										<div className="font-roboto text-2xl relative bottom-2 mt-8">
											Tech Stack
										</div>
										<div className="flex flex-wrap gap-5 w-full overflow-y-auto h-20">
											{project.techStack.map((tech) => {
												return <TechTile tech={tech} key={tech} dimensions={"14"}/>;
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
				<div className="flex flex-col w-14 justify-center items-center">
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
