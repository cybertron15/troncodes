interface Project {
    title: string
    name: string
    desc: string
    techStack: { name: string, img: string, link: string }[]
    images: [string, string, string]
}

const projects: Project[] = [
    {
        title: "Auto Learn",
        name: "autolearn",
        desc: "AutoLearn is an innovative platform designed to revolutionize your learning experience. Harnessing the power of AI, AutoLearn generates structured educational content, breaks down complex topics into manageable chunks, and automatically creates quizzes to reinforce your understanding. Additionally, it helps you plan your learning journey by automatically scheduling your study timetable based on your availability and desired daily study hours.",
        techStack: [
            { name: "Python", img: "python.png", link: "https://www.python.org/" },
            { name: "JavaScript", img: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "Django", img: "django.png", link: "https://www.djangoproject.com/" },
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "React Router", img: "react-router.svg", link: "https://reactrouter.com/" },
            { name: "Radix", img: "radix.png", link: "https://radix-ui.com/" },
            { name: "Tailwind", img: "tailwind.png", link: "https://tailwindcss.com/" },
            { name: "PaLM", img: "PaLM.png", link: "https://ai.google/discover/palm2/" },
        ],
        images: ["login.png", "dashboard.png", "dashboard2.png"],
    },
    {
        title: "BMS",
        name: "BMS",
        desc: "A specialized desktop application meticulously crafted for efficient management of various business operations, comprehensive employee data handling, and streamlined generation of integrated bills. This application leverages the power of graphical data visualization to provide enhanced insights, facilitating well-informed decision-making processes. With an intuitive user interface and robust functionality, it ensures a specialized and user-friendly experience, promoting productivity and organizational efficiency.",
        techStack: [
            { name: "Electron JS", img: "electron.png", link: "https://www.electronjs.org/" },
            { name: "Node.js", img: "node.png", link: "https://nodejs.org/" },
            { name: "JavaScript", img: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "HTML", img: "html-5.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", img: "css.jpg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "Charts.js", img: "chartsjs.png", link: "https://www.chartjs.org/" },
        ],
        images: ["login.png", "dashboard.png", "billings.png"],
    },
];

export default projects;
