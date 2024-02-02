interface Experience {
    [key: string]: {
      title: string;
      duration: [string, string]; // Tuple with two string elements for start and end dates
      year: number
      company: string;
      work: string [];
      techStack: string[];
    };
  }
  
  const experience: Experience = {
    backendEgineer: {
        title: "Backend Engineer",
        duration: ["2021", "2022"],
        year: 2021,
        company: "BlueCognition",
        work:["Developed clean and maintainable code within an agile framework to extract and filter financial data from diverse statement formats.",
        "Engineered an innovative solution enabling the generation of 150+ templates for bank statements.",
        "Eliminated dependency on external APIs, achieving a 0% text conversion cost and substantial cost savings.",
        "Crafted user-friendly interfaces for extracting data from bank statements."],
        techStack: [
          "python.png",
          "javascript.png",
          "django.png",
          "react.png",
          "react-router.svg",
          "ts.png",
          "tailwind.png",
        ],
      },
    fullstackEngineer: {
        title: "FullStack Engineer",
        duration: ["2022", "2022"],
        year: 2022,
        company: "Kamat Minerals",
        work:["Conceptualized and crafted a highly efficient Electron JS application for digitizing and centralizing employee data.",
            "Enabled seamless tracking of business operations, enhancing data accessibility and management.",
            "Achieved a significant 20% enhancement in workflow efficiency and data accuracy metrics.",
            "Streamlined data tracking processes, resulting in improved operational efficiency and increased accuracy in business operations.",
           " Implemented a user-friendly interface, ensuring easy navigation and efficient data management for employee-related information."],
        techStack: [
          "javascript.png",
          "html-5.png",
          "css.jpg",
          "electron.png",
          "node.png",
          "chartsjs.png",
        ],
      },
      SDE2: {
        title: "SDE 2",
        duration: ["2022", "2023"],
        year: 2023,
        company: "Noviga Automations",
        work:["Spearheaded a Python-based back-end for an IoT and Automation Project in the Automobile Industry, orchestrating 200+ remote Linux IoT devices.",
         "Achieved seamless real-time code deployment, maintenance, and swift onboarding of new devices, meeting stringent time constraints.",
          "Directed the design and implementation of UI dashboards, ensuring efficient data display and enhancing user accessibility.",
          "Oversaw device management and system maintenance, optimizing performance and reliability.",
          "Collaborated cross-functionally, facilitating smooth integration between backend functionalities and user interfaces."],
        techStack: [
          "python.png",
          "javascript.png",
          "django.png",
          "react.png",
          "react-router.svg",
          "ts.png",
          "tailwind.png",
          "linux.png"
        ],
      },
      
      
    
  };
  
  export default experience;
  