interface Project<T> {
    title: T
    name: T
    desc: T
    techStack: { name: T, img: T, link: T }[]
    images: [T, T, T]
    live:boolean
    opensource:boolean
    github: T
    liveLink: T
}

const projects: Project<string>[] = [
    {
        title: "Table Talk AI",
        name: "table-talk-ai",
        desc: "Table Talk AI is an advanced AI-driven voice bot designed to revolutionize customer interactions in the restaurant industry. Powered by OpenAI GPT models, this bot is capable of answering user queries, taking orders, and providing detailed restaurant information in a human-like manner. Features include noise cancellation, customizable behavior, and a variety of voice options to suit different brand tones. Table Talk AI enhances efficiency and consistency in customer service while offering seamless integration into existing systems.",
        techStack: [
            { name: "OpenAI", img: "openai.webp", link: "https://openai.com/" },
            { name: "Google Text-to-Speech", img: "googletts.png", link: "https://cloud.google.com/text-to-speech" },
            { name: "Twilio", img: "twilio.jpg", link: "https://www.twilio.com/" },
            { name: "Deepgram", img: "deepgram.png", link: "https://deepgram.com/" },
            { name: "Express", img: "express.png", link: "https://expressjs.com/" },
            { name: "WebSockets", img: "websockets.jpg", link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" }
        ],
        images: ["tabletalk-ai-1.png", "tabletalk-ai-2.png", "tabletalk-ai-3.png"],
        live: true,
        opensource: false,
        github: "",
        liveLink: "https://www.aitabletalk.com/"
    },
    {
        title: "Habibi Halal",
        name: "habibi-halal",
        desc: "Habibi Halal is a dynamic restaurant website that allows users to browse location-specific menus, place orders, and manage favorites. With robust payment integration and cart functionality, Habibi Halal ensures a seamless and personalized ordering experience. Its modern interface and optimized design provide a rich user experience for customers.",
        techStack: [
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "PostgreSQL", img: "postgresql.webp", link: "https://www.postgresql.org/" },
            { name: "GraphQL", img: "graphql.png", link: "https://graphql.org/" },
            { name: "Stripe", img: "stripe.png", link: "https://stripe.com/" },
            { name: "ShadCN", img: "shadcn.png", link: "https://ui.shadcn.com/" },
            { name: "Tailwind CSS", img: "tailwind.png", link: "https://tailwindcss.com/" }
        ],
        images: ["habibi-halal-1.png", "habibi-halal-2.png", "habibi-halal-3.png"],
        live: false,
        opensource: false,
        github: "",
        liveLink: ""
    },
    {
        title: "Spyder",
        name: "spyder",
        desc: "Spyder is a comprehensive platform for online tax filing, streamlining the process for both clients and tax professionals. Users can purchase plans, upload documents, and engage with a tax filing team through live chat and email notifications. Spyder features intuitive payment integration, document verification, and a seamless workflow to ensure efficient tax computations and client satisfaction.",
        techStack: [
            { name: "Next.js", img: "nextjs.png", link: "https://nextjs.org/" },
            { name: "Stripe", img: "stripe.png", link: "https://stripe.com/" },
            { name: "Nhost", img: "nhost.jpg", link: "https://nhost.io/" },
            { name: "GraphQL", img: "graphql.png", link: "https://graphql.org/" },
            { name: "PostgreSQL", img: "postgresql.webp", link: "https://www.postgresql.org/" },
            { name: "Hasura", img: "hasura.jpeg", link: "https://hasura.io/" },
            { name: "Tailwind CSS", img: "tailwind.png", link: "https://tailwindcss.com/" },
            { name: "ShadCN", img: "shadcn.png", link: "https://ui.shadcn.com/" }
        ],
        images: ["spyder-1.png", "spyder-2.png", "spyder-3.png"],
        live: true,
        opensource: false,
        github: "",
        liveLink: "https://usespyder.com/"
    },
    {
        title: "TREN",
        name: "TREN",
        desc: "TREN is a productivity tracker designed to help you manage and analyze your tasks linked to long-term goals. By providing detailed analytics on your activities, TREN helps you understand and improve your habits, ensuring you stay on track and achieve your objectives. Monitor your progress and optimize your productivity with TREN's insightful data and user-friendly interface.",
        techStack: [
            { name: "Python", img: "python.png", link: "https://www.python.org/" },
            { name: "JavaScript", img: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "Django", img: "django.png", link: "https://www.djangoproject.com/" },
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "React Router", img: "react-router.svg", link: "https://reactrouter.com/" },
            { name: "Radix", img: "radix.png", link: "https://radix-ui.com/" },
            { name: "Tailwind", img: "tailwind.png", link: "https://tailwindcss.com/" },
            { name: "ShadCN", img: "shadcn.png", link: "https://ui.shadcn.com/" },
            { name: "ReCharts", img: "recharts.png", link: "https://recharts.org/en-US/guide" },
            { name: "SQL", img: "sql.png", link: "https://www.mysql.com/" }
        ],
        images: [ "tren.png","dashboard.png", "journal.png"],
        live: false,
        opensource: true,
        github: "https://github.com/cybertron15/TREN",
        liveLink: ""
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
            { name: "Charts.js", img: "chartsjs.png", link: "https://www.chartjs.org/" }
        ],
        images: ["login.png", "dashboard.png", "billings.png"],
        live: false,
        opensource: false,
        github: "",
        liveLink: ""
    },
    {
        title: "TaskIT",
        name: "taskit",
        desc: "TaskIT is a modern, user-friendly task management app designed to help you manage your tasks efficiently. TaskIT can be used on both desktop and mobile devices with features like setting statuses for tasks, filtering tasks based on status, sorting tasks by date and name, and searching for tasks, TaskIT offers a clean, minimalistic UI for a better user experience. The app includes authentication features built using JWT and leverages modern web frameworks such as React for the frontend and Django/Django REST framework for the backend.",
        techStack: [
            { name: "Python", img: "python.png", link: "https://www.python.org/" },
            { name: "JavaScript", img: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "Django", img: "django.png", link: "https://www.djangoproject.com/" },
            { name: "React", img: "react.png", link: "https://reactjs.org/" },
            { name: "React Router", img: "react-router.svg", link: "https://reactrouter.com/" },
            { name: "Radix", img: "radix.png", link: "https://radix-ui.com/" },
            { name: "Tailwind", img: "tailwind.png", link: "https://tailwindcss.com/" },
            { name: "ShadCN", img: "shadcn.png", link: "https://ui.shadcn.com/" },
            { name: "SQL", img: "sql.png", link: "https://www.mysql.com/" }
        ],
        images: [ "login.png","taskit.png", "edit.png"],
        live: false,
        opensource: true,
        github: "https://github.com/cybertron15/Taskit",
        liveLink: ""
    }
    
];

export default projects;
