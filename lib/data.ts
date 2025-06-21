import { ReactNode, createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSpringboot } from "react-icons/si";

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

export const skillsData: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Java",
  "Spring Boot",
  "Git",
  "Tailwind",
  "MongoDB",
  "REST APIs",
  "SQL",
  "AWS",
  "Python",
  "Playwright",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins"
] as const;
