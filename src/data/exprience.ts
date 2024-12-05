interface Experience {
    [key: string]: {
        title: string;
        duration: [string, string]; // Tuple with two string elements for start and end dates
        year: number;
        company: string;
        work: string[];
        techStack: { name: string, img: string, link: string }[];
    };
}

const experience: Experience = {
    backendEgineer: {
        title: "Backend Engineer",
        duration: ["2021", "2022"],
        year: 2021,
        company: "BlueCognition",
        work: [
            "Developed clean and maintainable code within an agile framework to extract and filter financial data from diverse statement formats.",
            "Engineered an innovative solution enabling the generation of 150+ templates for bank statements.",
            "Eliminated dependency on external APIs, achieving a 0% text conversion cost and substantial cost savings.",
            "Crafted user-friendly interfaces for extracting data from bank statements.",
        ],
        techStack: [
            { name: "Python", img: "python.png", link: "https://www.python.org/" },
            { name: "JavaScript", img: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "Django", img: "django.png", link: "https://www.djangoproject.com/" },
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "React Router", img: "react-router.svg", link: "https://reactrouter.com/" },
            { name: "TypeScript", img: "ts.png", link: "https://www.typescriptlang.org/" },
            { name: "Tailwind", img: "tailwind.png", link: "https://tailwindcss.com/" },
        ],
    },
    fullstackEngineer: {
        title: "FullStack Engineer",
        duration: ["2022", "2022"],
        year: 2022,
        company: "Kamat Minerals",
        work: [
            "Conceptualized and crafted a highly efficient Electron JS application for digitizing and centralizing employee data.",
            "Enabled seamless tracking of business operations, enhancing data accessibility and management.",
            "Achieved a significant 20% enhancement in workflow efficiency and data accuracy metrics.",
            "Streamlined data tracking processes, resulting in improved operational efficiency and increased accuracy in business operations.",
            " Implemented a user-friendly interface, ensuring easy navigation and efficient data management for employee-related information.",
        ],
        techStack: [
            { name: "JavaScript", img: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "HTML", img: "html-5.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", img: "css.jpg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "Electron JS", img: "electron.png", link: "https://www.electronjs.org/" },
            { name: "Node.js", img: "node.png", link: "https://nodejs.org/" },
            { name: "Charts.js", img: "chartsjs.png", link: "https://www.chartjs.org/" },
        ],
    },
    SDE2: {
        title: "SDE 2",
        duration: ["2022", "2023"],
        year: 2023,
        company: "Noviga Automations",
        work: [
            "Spearheaded a Python-based back-end for an IoT and Automation Project in the Automobile Industry, orchestrating 200+ remote Linux IoT devices.",
            "Achieved seamless real-time code deployment, maintenance, and swift onboarding of new devices, meeting stringent time constraints.",
            "Directed the design and implementation of UI dashboards, ensuring efficient data display and enhancing user accessibility.",
            "Oversaw device management and system maintenance, optimizing performance and reliability.",
            "Collaborated cross-functionally, facilitating smooth integration between backend functionalities and user interfaces.",
        ],
        techStack: [
            { name: "Python", img: "python.png", link: "https://www.python.org/" },
            { name: "JavaScript", img: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "Django", img: "django.png", link: "https://www.djangoproject.com/" },
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "React Router", img: "react-router.svg", link: "https://reactrouter.com/" },
            { name: "TypeScript", img: "ts.png", link: "https://www.typescriptlang.org/" },
            { name: "Tailwind", img: "tailwind.png", link: "https://tailwindcss.com/" },
            { name: "Linux", img: "linux.png", link: "https://www.linux.org/" },
        ],
    },
    Freelancer: {
        title: "Full Stack Engineer",
        duration: ["July 2023", "July 2024"],
        year: 2023,
        company: "Freelance",
        work: [
            "Developed and maintained web applications using Python frameworks like Django and Flask, and JavaScript libraries such as React and Express.",
            "Designed and implemented RESTful APIs for seamless integration with front-end systems and third-party services.",
            "Created and optimized database schemas and queries, working with SQL databases, MongoDB, and PostgreSQL to ensure efficient data handling.",
            "Collaborated with cross-functional teams to deliver high-quality software solutions tailored to client requirements.",
            "Implemented CI/CD pipelines to streamline deployment processes and maintain code quality standards.",
            "Developed a productivity tracking app to enhance team efficiency, focusing on user-friendly interfaces and real-time data insights."
        ],
        techStack: [
            { name: "Python", img: "python.png", link: "https://www.python.org/" },
            { name: "Django", img: "django.png", link: "https://www.djangoproject.com/" },
            { name: "Flask", img: "flask.png", link: "https://flask.palletsprojects.com/" },
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "Express.js", img: "express.png", link: "https://expressjs.com/" },
            { name: "PostgreSQL", img: "postgresql.webp", link: "https://www.postgresql.org/" },
            { name: "MongoDB", img: "mongodb.png", link: "https://www.mongodb.com/" },
            { name: "CI/CD", img: "cicd.webp", link: "https://en.wikipedia.org/wiki/CI/CD" }
        ],
    },
    SeniorSoftwareEng: {
        title: "Senior Software Engineer",
        duration: ["July 2024", "Present"],
        year: 2024,
        company: "Good Health Company",
        work: [
            "Led the development of dynamic web applications, implementing features such as cart management, item addition, updates, deletions, payments, and location-based customization.",
            "Developed AI-powered voice bots for handling customer reservations using natural language processing, enhancing user experience and automation.",
            "Contributed to multiple full-stack projects, ensuring seamless integration of frontend and backend systems for optimal performance and scalability.",
            "Collaborated with cross-functional teams to deliver user-centric software solutions tailored to complex business needs.",
            "Implemented best practices in software engineering to ensure robust code quality, maintainability, and scalability.",
            "Continuously explored and integrated emerging technologies to enhance system reliability and efficiency."
        ],
        techStack: [
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "Next.js", img: "nextjs.png", link: "https://nextjs.org/" },
            { name: "Node.js", img: "node.png", link: "https://nodejs.org/" },
            { name: "Express.js", img: "express.png", link: "https://expressjs.com/" },
            { name: "Python", img: "python.png", link: "https://www.python.org/" },
            { name: "Django", img: "django.png", link: "https://www.djangoproject.com/" },
            { name: "PostgreSQL", img: "postgresql.webp", link: "https://www.postgresql.org/" },
            { name: "MongoDB", img: "mongodb.png", link: "https://www.mongodb.com/" },
            { name: "Stripe API", img: "stripe.png", link: "https://stripe.com/" },
            { name: "OpenAI", img: "openai.webp", link: "https://openai.com/" }
        ],
    },
    
};

export default experience;
