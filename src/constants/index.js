import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  Capita,
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
  pay360,
  opstrakker,
  seedball,
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
    id: "projects",
    title: "Projects",
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
    name: "Pay360",
    description:
      "Pay360 is a complete payment eco-system. It offers the breadth of payment options that we do, from direct debits to point of sale, web and mobile payments. Pay360 also provides a payment gateway, a payment facilitation platform for software providers, a range of value add payment solutions, enabling our customers to meet their own business challenges, fraud detection and ID verification.",
    tags: [
      {
        name: "angular13",
        color: "blue-text-gradient",
      },
      {
        name: "springBoot",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "angularMaterial",
        color: "pink-text-gradient",
      },
      {
        name: "ngRx",
        color: "pink-text-gradient",
      },
    ],
    image: pay360,
    source_code_link: "https://github.com/",
  },
  {
    name: "Opstrakker",
    description:
      "OpsTrakker is a suite of apps that focus on specific use cases to provide high-value manufacturing operations management functionality. OpsTrakker is used to replace paper records or spreadsheets with mobile apps and leverage real-time electronic data to improve manufacturing operations in the pharma industry.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "green-text-gradient",
      },
      {
        name: "ionic4",
        color: "pink-text-gradient",
      },
      {
        name: "springBoot",
        color: "pink-text-gradient",
      },
    ],
    image: opstrakker,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project Seedball",
    description:
      "Project Seed Ball is a Play to Earn blockchain game on WAX developed by The Iconical. This was a side project that we built using Web3 (WAX), ReactJs, MUI them library which is deployed using AWS S3.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: seedball,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };