interface Project {
    title: string
    name: string
    desc:string
    techStack: string[]
    images: [string,string,string]
}

const projects: Project[] = [
	{
		title: "Auto Learn",
		name: "autolearn",
		desc: "AutoLearn is an innovative platform designed to revolutionize your learning experience. Harnessing the power of AI, AutoLearn generates structured educational content, breaks down complex topics into manageable chunks, and automatically creates quizzes to reinforce your understanding. Additionally, it helps you plan your learning journey by automatically scheduling your study timetable based on your availability and desired daily study hours.",
		techStack: [
			"python.png",
			"javascript.png",
			"django.png",
			"react.png",
			"react-router.svg",
			"radix.png",
			"tailwind.png",
			"PaLM.png",
		],
		images: ["login.png", "dashboard.png", "dashboard2.png"],
	},
	{
		title: "BMS",
		name: "BMS",
		desc: "A specialized desktop application meticulously crafted for efficient management of various business operations, comprehensive employee data handling, and streamlined generation of integrated bills. This application leverages the power of graphical data visualization to provide enhanced insights, facilitating well-informed decision-making processes. With an intuitive user interface and robust functionality, it ensures a specialized and user-friendly experience, promoting productivity and organizational efficiency.",
		techStack: [
			"electron.png",
			"node.png",
			"javascript.png",
			"html-5.png",
			"css.jpg",
			"chartsjs.png"
		],
		images: ["login.png", "dashboard.png", "billings.png"],
	},
];

export default projects
