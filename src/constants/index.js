import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  Capita,
  carrent,
  jobit,
  tripguide,
  eis,
  etpl,
  ldna,
  angular,
  ionic,
  azure,
  mui,
  spring,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "Angular Developer",
  //   icon: mobile,
  // },
  {
    title: "Ionic Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular
  },
  {
    name: "Ionic",
    icon: ionic
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SpringBoot",
    icon: spring,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Capita",
    icon: Capita,
    iconBg: "#02083c",
    date: "Dec 2020 - Present",
    points: [
      "Contributed to the development of Web portals and the Library of a Payment domain.",
      "Work with Technical Architects, BA's, UX leads and Scrum masters for feasibility studies, designing, providing solutions, estimations, and execution of project requirements.",
      "Mentor the freshers and laterals in the team.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Received multiple rewards and recognition like 'Pat on the Back', 'You carried the Day' and 'Impact Award'.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Enhanced Information Solution",
    icon: eis,
    iconBg: "#fff",
    date: "Sep 2018 - Dec 2020",
    points: [
      "Eliciting business/system requirements & providing with best solutions involving evaluation & definition of the scope of the project and finalization of project requirements.",
      "Successfully migrated AngularJs application to Angular 7.",
      "Involved and participated in the overall application life cycle",
      "Working on various POC like Web Barcode Scanning, Froala Rich Text Editor, JavaScript Execution System, Service Worker, SAML Integration, etc.",
      "Assisting the team member in understanding the Product and analyzing issues. Ensuring timely completion & delivery of projects to the client."
    ],
  },
  {
    title: "Jr. Software Developer",
    company_name: "Exceptionaire Technologies",
    icon: etpl,
    iconBg: "#fff",
    date: "Nov 2017 - Aug 2018",
    points: [
      "Developing, designing and building hybrid apps on Ionic Framework for Android and iOS",
      "Collaborated with designers, engineers, and product managers to build great experiences.",
      "Developed 3 Hybrid Mobile Apps (Android/iOS) viz. TribeMinder, Ezi Shuttle and Tulii",
      "Integrated Wikitude SDK for Augmented Reality in 1 Native Android/iOS App named ImagineCraft",
    ],
  },
  {
    title: "Intern",
    company_name: "Logical DNA Solutions",
    icon: ldna,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Jun 2017",
    points: [
      "Assisting in the development of software applications and components according to specifications",
      "Assisting in the coding, testing, and debugging of new software or enhancements to existing software",
      "Developed 2 projects within a team of 3 interns. An  Android/iOS Hybrid Mobile App using Ionic and a Windows App using Electron and Angular.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };