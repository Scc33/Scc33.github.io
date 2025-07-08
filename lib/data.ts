import { ReactNode, createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSpringboot } from "react-icons/si";

type Skill = {
  link: string;
};

type data = {
  title: string;
  location: string;
  description: string;
  icon: ReactNode;
  date: string;
  skills: string[];
  institution: string;
};

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  }
] as const;

export const skillsLookup: Record<string, Skill> = {
  HTML: { link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  CSS: { link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  JavaScript: {
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  TypeScript: { link: "https://www.typescriptlang.org/" },
  React: { link: "https://react.dev/" },
  Redux: { link: "https://redux.js.org/" },
  "Next.js": { link: "https://nextjs.org/" },
  "Node.js": { link: "https://nodejs.org/" },
  Java: { link: "https://www.oracle.com/java/" },
  "Spring Boot": { link: "https://spring.io/projects/spring-boot" },
  Git: { link: "https://git-scm.com/" },
  Tailwind: { link: "https://tailwindcss.com/" },
  MongoDB: { link: "https://www.mongodb.com/" },
  "REST APIs": { link: "https://restfulapi.net/" },
  SQL: { link: "https://en.wikipedia.org/wiki/SQL" },
  AWS: { link: "https://aws.amazon.com/" },
  Python: { link: "https://www.python.org/" },
  Playwright: { link: "https://playwright.dev/" },
  Docker: { link: "https://www.docker.com/" },
  Kubernetes: { link: "https://kubernetes.io/" },
  Terraform: { link: "https://www.terraform.io/" },
  Jenkins: { link: "https://www.jenkins.io/" },
  "Cloud Computing": { link: "https://en.wikipedia.org/wiki/Cloud_computing" },
  "Software Engineering": {
    link: "https://en.wikipedia.org/wiki/Software_engineering"
  },
  "Data Science": { link: "https://en.wikipedia.org/wiki/Data_science" },
  Algorithms: { link: "https://en.wikipedia.org/wiki/Algorithm" },
  "Data Structures": { link: "https://en.wikipedia.org/wiki/Data_structure" },
  "Web Development": { link: "https://en.wikipedia.org/wiki/Web_development" },
  Economics: { link: "https://en.wikipedia.org/wiki/Economics" }
};

export const experiencesData: data[] = [
  {
    title: "Software Engineer II",
    location: "Chicago, IL",
    description:
      "In May 2025 Discover was acquired by Capital One and I joined integration efforts.",
    icon: createElement(CiCreditCard1),
    date: "2025 - present",
    skills: ["React", "TypeScript", "Java", "Spring Boot", "AWS"],
    institution: "Capital One"
  },
  {
    title: "Software Engineer II",
    location: "Chicago, IL",
    description:
      "I was a fullstack engineer working on financial integrations. My stack included React, Redux, TypeScript, Java, and AWS.",
    icon: createElement(CgWorkAlt),
    date: "2024 - 2025",
    skills: ["React", "TypeScript", "Java", "Spring Boot", "AWS"],
    institution: "Discover Financial Services"
  },
  {
    title: "Master of Computer Science",
    location: "Champaign, IL",
    description:
      "While working full-time, I obtained my Master of Computer Science.",
    icon: createElement(LuGraduationCap),
    date: "2024",
    skills: ["Cloud Computing", "Software Engineering", "Data Science"],
    institution: "University of Illinois Urbana-Champaign"
  },
  {
    title: "Software Engineer I",
    location: "Chicago, IL",
    description:
      "I was a frontend React developer supporting the complete redesign of the Discover Home Loan website.",
    icon: createElement(FaReact),
    date: "2023 - 2024",
    skills: ["React", "Redux", "JavaScript"],
    institution: "Discover Financial Services"
  },
  {
    title: "Software Engineer I",
    location: "Chicago, IL",
    description:
      "I was a full-stack web developer at Discover Financial Services supporting credit card applications.",
    icon: createElement(SiSpringboot),
    date: "2022 - 2023",
    skills: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    institution: "Discover Financial Services"
  },
  {
    title: "Bachelor of Computer Science",
    location: "Champaign, IL",
    description: "I studied Computer Science and minored in Economics.",
    icon: createElement(LuGraduationCap),
    date: "2021",
    skills: ["Algorithms", "Data Structures", "Web Development", "Economics"],
    institution: "University of Illinois Urbana-Champaign"
  }
] as const;

export const skillsData: Skill[] = Object.entries(skillsLookup).map(
  ([name, skill]) => ({
    name,
    link: skill.link
  })
);

export const getSkill = (skillName: string): { name: string; link: string } => {
  const skill = skillsLookup[skillName];
  return skill
    ? { name: skillName, link: skill.link }
    : { name: skillName, link: "#" };
};
