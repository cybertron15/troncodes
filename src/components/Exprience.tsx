import { ArrowBigDownDash } from "lucide-react";
import TechTile from "./TechTile";

const Exprience: React.FC = () => {
    const techStack = [
        "python.png",
        "javascript.png",
        "django.png",
        "react.png",
        "react-router.svg",
        "radix.png",
        "tailwind.png",
        "PaLM.png"
    ]
	return (
		<>
			<div className="px-5">
				<div className="flex justify-between mt-10">
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
							<div className="cursor-pointer text-orange-500 text-3xl hover:scale-105">
								2021
							</div>
							<div className="cursor-pointer text-3xl hover:scale-105">
								2022
							</div>
							<div className="cursor-pointer text-3xl hover:scale-105">
								2023
							</div>
						</div>
						<div
							className="flex flex-col justify-around h-96 border-s-4 rounded-sm w-28"
							style={{ height: "30rem" }}
						>
							<div className="h-1 bg-white rounded-sm">
								<div className="w-5 h-5 relative bottom-2 right-3 rounded-full bg-orange-500 ring-2 ring-white" />
							</div>
							<div className="h-1 bg-white rounded-sm">
								<div className="w-5 h-5 relative bottom-2 right-3 rounded-full bg-white" />
							</div>
							<div className="h-1 bg-white rounded-sm">
								<div className="w-5 h-5 relative bottom-2 right-3 rounded-full bg-white" />
							</div>
						</div>
						<div
							className="flex flex-col justify-around h-96 font-roboto"
							style={{ height: "30rem" }}
						>
							<div className="cursor-pointer text-orange-500 text-3xl hover:scale-105">
								Backend Engineer
							</div>
							<div className="cursor-pointer text-3xl hover:scale-105">
								FullStack Engineer
							</div>
							<div className="cursor-pointer text-3xl hover:scale-105">
								SDE 2
							</div>
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
								<div className="font-roboto text-4xl mt-10">
									Backend Engineer
								</div>
								<div className="flex justify-between mb-2 ms-1">
									<p className="font-roboto text-lg">BlueCognition</p>
									<p className="text-lg">2021-2022</p>
								</div>
								<div className="overflow-auto h-52 mt-8">
									<div className=" ms-9">
										<ul className="list-disc text-md">
											<li>
												Conceptualized and crafted a highly efficient Electron
												JS application for digitizing and centralizing employee
												data.
											</li>
											<li>
												Enabled seamless tracking of business operations,
												enhancing data accessibility and management.
											</li>
											<li>
												chieved a significant 20% enhancement in workflow
												efficiency and data accuracy metrics.
											</li>
											<li>
												Streamlined data tracking processes, resulting in
												improved operational efficiency and increased accuracy
												in business operations.
											</li>
										</ul>
									</div>
								</div>
                                <div className="mt-2 ms-2">
                                    <p className="font-roboto text-lg">TechStack</p>
                                    <div className="flex flex-wrap gap-5 w-full overflow-y-auto h-14 mt-2">
											{techStack.map((tech) => {
												return <TechTile tech={tech} key={tech} dimensions={"11"} />;
											})}
										</div>
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
