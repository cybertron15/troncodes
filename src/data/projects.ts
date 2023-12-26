interface Project {
    name: string
    desc:string
    techStack: string[]
    images: [string,string,string]
}

const projects: Project[] = [
	{
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
		images: ["login.png", "dashboard.png", "main_bg.jpg"],
	},
];

export default projects
