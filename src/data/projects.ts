import fishkappImage from "../images/fishkapp.png";
import barberShopImage from "../images/barber-shop.png";
import taskAppImage from "../images/taskapp.png";
import taskAppReduxImage from "../images/taskappredux.png";
import loginApp from "../images/login-app.png";
import calculator from "../images/calculator.png";
import mamPlan from "../images/mam-plan.png";

export const projects = [
  {
    name: "fishkapp",
    description:
      "A lightweight card-based app designed for quick note-taking, organizing ideas, and saving content. With an intuitive interface and clean layout, it makes capturing thoughts fast and effortless.",
    imgSrc: fishkappImage,
    technologies: [
      "React",
      "Typescript",
      "REST Api",
      "Jest",
      "React Testing Library",
    ],
    link: "https://kacper-echaust.github.io/fischkapp/",
  },
  {
    name: "barber shop",
    description:
      "A modern and stylish barber shop website designed to reflect the brand’s vibe. Smooth navigation, a clean layout, and bold visuals create an engaging experience that helps users easily explore services and book appointments.",
    imgSrc: barberShopImage,
    technologies: ["React", "React-Router", "Typescript", "CSS modules"],
    link: "https://kacper-echaust.github.io/barber-shop/#/",
  },
  {
    name: "task app",
    description:
      "A simple yet powerful task manager that stores data in the browser’s local storage. It allows users to sort tasks by date, mark completed items, and stay organized throughout the day.",
    imgSrc: taskAppImage,
    technologies: ["React", "Typescript", "Sass"],
    link: "https://kacper-echaust.github.io/task-app/",
  },
  {
    name: "task app redux",
    description:
      "A more advanced version of the task manager, built with Redux for state management. It offers improved structure, better scalability, and a smooth user experience for organizing daily tasks.",
    imgSrc: taskAppReduxImage,
    technologies: ["React", "Redux", "Typescript", "Sass", "shadcn"],
    link: "https://kacper-echaust.github.io/task-app-redux/",
  },
  {
    name: "Income & Expense Tracker — In progress",
    description:
      "A mobile-first finance tracker for monitoring expenses and income. It provides real-time balance calculations and a clean, intuitive interface for managing personal finances on the go.",
    imgSrc: "In progress",
    technologies: ["React", "React Native", "Typescript", "Expo-router"],
    link: "https://github.com/kacper-echaust/Transactions-mobile-app",
  },
  {
    name: "Login App",
    description:
      "A secure authentication app featuring user registration and login, built with Firebase. Designed with clean UI components, form validation, and a smooth user flow.",
    imgSrc: loginApp,
    technologies: [
      "React",
      "React router",
      "Typescript",
      "Hooks",
      "shadcn",
      "TailwindCSS",
      "Firebase",
      "React-hook-form",
    ],
    link: "https://login-app-kacper.netlify.app/",
  },
  {
    name: "Calculator",
    description:
      "A minimalist and responsive calculator with a clean interface. Built for simplicity and speed, it demonstrates UI precision and React component reusability.",
    imgSrc: calculator,
    technologies: ["React", "Typescript", "TailwindCSS", "shadcn"],
    link: "https://calculator-ecru-omega.vercel.app/",
  },
  {
    name: "Mam Plan",
    description:
      "A professional portfolio website created for the Mam Plan agency. It showcases services, achievements, and brand identity through a modern, clean, and fully responsive design.",
    imgSrc: mamPlan,
    technologies: ["React", "Typescript", "TailwindCSS", "Firebase"],
    link: "https://mam-plan.netlify.app/",
  },
];
