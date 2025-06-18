import project1 from "../assets/projects/CeylonGemGallery.png";
import project2 from "../assets/projects/OnlineHospitalManagementSystem.png";
import project3 from "../assets/projects/OnlineFashionStoreManagementSystem.png";
import project4 from "../assets/projects/GlobeTrekker.png";
import project5 from "../assets/projects/DineSwift.png";
import project6 from "../assets/projects/BotaniX.png";

export const HERO_CONTENT = `Aspiring Software Engineer | Project Leader | Tech Enthusiast I’m a third-year Software Engineering student at SLIIT with a passion for creating innovative, user-centric software solutions. With experience leading projects like Online Hospital Management Systems, Gem Management Systems, and Mobile Apps, I specialize in full-stack development (MERN, Java, Kotlin) and UI/UX design using Figma. Driven by a love for technology and continuous learning, I aim to build efficient, impactful digital experiences that solve real-world problems.`;

export const ABOUT_TEXT = `I'm Nithika Perera, a passionate and driven third-year student at SLIIT, specializing in Software Engineering. My academic journey is complemented by hands-on experience in developing innovative projects, from online management systems to mobile applications. As a project leader, I’ve demonstrated strong skills in HTML, CSS, JavaScript, Java, SQL, Kotlin, and the MERN stack, with a keen eye for UI/UX design using Figma. Beyond academics, my leadership and teamwork abilities were shaped through my involvement in SLIIT’s ERIC and IEEE societies, as well as my commitment to extracurricular activities like the National Cadet Corps. My goal is to apply my technical expertise, creativity, and problem-solving skills to real-world challenges, continually learning and growing in the dynamic field of technology.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Gem Management System",
    image: project1,
    description:
      "I led the development of the Gem Cutting System within the Gem Management System as the project team leader. Utilizing my expertise in the MERN stack and Figma for UI/UX design, I oversaw the creation of a user-friendly and efficient system. My role involved managing the development team, ensuring the smooth integration of features, and delivering a high-quality platform.",
    technologies: ["MongoDB ", "Express.js", "React.js", "Node.js", "Figma"],
  },
  {
    title: "Online Hospital Management System",
    image: project2,
    description:
      "As the project team leader, I was responsible for the design and development of the Home Site, Login page, and User Profile (Doctor) sections in the Online Hospital Management System. I applied my skills in HTML, CSS, JavaScript, Java, and SQL to build an efficient and user-friendly platform. My role also involved managing the team, ensuring timely delivery, and integrating all key functionalities seamlessl",
    technologies: ["HTML","Java", "CSS", "PHP", "JavaScript","SQL"],
  },
  {
    title: "Online Fashion Store Management system",
    image: project3,
    description:
      "As the project team leader, I led the development of an Online Fashion Store Management System. My responsibilities included overseeing the design and implementation of the Home Site and Login page, ensuring a seamless user experience. This project involved coordinating with a team of developers, managing timelines, and integrating essential features to create a functional and user-friendly platform",
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    },
  {
    title: "GlobeTrekker — Explore the World Like Never Before",
    image: project4,
    description:
      "I built GlobeTrekker, a full-stack web application that redefines global exploration through an interactive 3D globe powered by react-globe.gl and real-time country data. The app enables users to dynamically search and filter countries by name, capital, region, or language, visualize global insights using Nivo Charts, and securely save favorite locations through JWT-based authentication with Express.js and MongoDB. The UI is fully responsive and animated using React 18, Vite, Tailwind CSS v4.1, Framer Motion, and GSAP, delivering a seamless and visually engaging user experience.",
    technologies: ["React 18", "Vite", "Tailwind CSS v4.1", "Node.js", "Express.js", "MongoDB", "JWT", "Framer Motion", "GSAP", "Nivo Charts", "Axios"],

  },
  {
    title: "DineSwift — Cloud-Native Food Ordering & Delivery Platform",
    image: project5,
    description:
      "I led the development of DineSwift, a cloud-native food ordering and delivery system architected with microservices, inspired by platforms like UberEats and PickMe Food. As the Project Lead, I was responsible for designing and implementing key backend services such as the User Service and Order Service using Node.js, Express, and MongoDB, and I developed the entire frontend using React.js, styled with Tailwind CSS v4.1 and enhanced with Framer Motion for a modern, interactive UI/UX. I also handled the integration of services using Kafka for asynchronous messaging and ensured robust deployment through Docker and Kubernetes. The platform features real-time order tracking, AI-based driver assignment, multi-gateway secure payments (PayHere, Dialog Genie, Stripe), and instant email/SMS notifications via a dedicated NotificationService. DineSwift exemplifies a full DevOps pipeline with scalable, containerized services and efficient service orchestration. My contributions reflect a strong command of full-stack development and cloud-native software engineering.",
    technologies: ["React 18", "Vite", "Tailwind CSS v4.1", "Node.js", "Express.js", "MongoDB", "JWT", "Framer Motion", "Docker", "Kafka", "Axios"],
  },
  {
    title: "Greenhouse Monitoring and Control System — Modular IoT Control with OSGi Framework",
    image: project6,
    description:
      "As part of an advanced software engineering project, I led the development of a real-time greenhouse monitoring and control system utilizing the OSGi framework for modular, dynamic service management. This system automates the maintenance of optimal environmental conditions—temperature, humidity, soil moisture, and UV light levels—to support smart greenhouse farming. I architected the solution using Java 8, Apache Felix, and Maven, creating a flexible plug-and-play structure for device modules. My responsibilities included implementing sensor data producers and consumers for all environmental parameters, designing threshold-based control logic to automate irrigation, heating, lighting, and humidification, and developing a main controller interface for device management, sensor customization, and user interaction. The modular design allows scalable and maintainable expansion of devices and features real-time sensor data acquisition, dynamic threshold adjustments, and full control over connected devices—add, remove, toggle, and disable—making it a robust and extensible IoT control system.",
    technologies: ["Java 8","Apache Felix (OSGi runtime)","Maven (modular build management)","Custom OSGi services for dynamic device interaction"],
  },
];

export const CONTACT = {
  address: "89/1/i Wanaguru Mawatha Namal Sewana Hokandara ",
  phoneNo: "+94 76 039 4961",
  email: "nithika151@gmail.com",
};
