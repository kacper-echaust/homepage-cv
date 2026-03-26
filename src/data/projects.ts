import fishkappImage from "../images/fishkapp.png";
import taskAppReduxImage from "../images/taskappredux.png";
import mamPlan from "../images/mam-plan.png";
import { SingleProjectType } from "../types";

export const projects: SingleProjectType[] = [
  {
    name: "fishkapp",
    description:
      "Fischkapp to prosta aplikacja do nauki z fiszek, która pozwala tworzyć, edytować, usuwać i przeglądać fiszki oraz przełączać ich widok (front/back). Projekt skupia się na ćwiczeniu pracy z komponentami, stanem i interakcjami użytkownika.",
    imgSrc: fishkappImage,
    technologies: [
      "React",
      "Typescript",
      "REST API",
      "Jest",
      "React Testing Library",
    ],
    live: "https://kacper-echaust.github.io/fischkapp/",
    github: "https://github.com/kacper-echaust/fischkapp",
  },
  {
    name: "todo",
    description:
      "Aplikacja TODO z wykorzystaniem Redux do zarządzania stanem. Umożliwia pełny CRUD z walidacją danych oraz oznaczanie zadań jako ukończone.",
    imgSrc: taskAppReduxImage,
    technologies: ["React", "Redux", "Typescript", "Sass", "shadcn"],
    live: "https://kacper-echaust.github.io/task-app-redux/",
    github: "https://github.com/kacper-echaust/task-app-redux",
  },
  {
    name: "Mam Plan",
    description:
      "Strona portfolio przygotowana dla firmy „Mam Plan”. Projekt prezentuje ofertę firmy, sekcję realizacji oraz informacje kontaktowe, w lekkiej i responsywnej formie.",
    imgSrc: mamPlan,
    technologies: ["React", "Typescript", "TailwindCSS", "Firebase"],
    live: "https://mam-plan.netlify.app/",
    github: "https://github.com/kacper-echaust/mam-plan",
  },
];
