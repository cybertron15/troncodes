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
		images: ["login.png", "dashboard.png", "main_bg.jpg"],
	},
	{
		title: "Air Brush",
		name: "airbrush",
		desc: "Effortlessly draw on-screen using gestures, naturally control the UI with hand movements, and experience seamless integration of gestures with the interface.",
		techStack: [
			"python.png",
			"mediapipe.png",
			"opencv.png"
		],
		images: ["login.png", "dashboard.png", "main_bg.jpg"],
	},
];

export default projects
