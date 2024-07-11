import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSpringboot } from "react-icons/si";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

type data = {
  title: string;
  location: string;
  description: string;
  icon: JSX.Element;
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
  /*{
    name: "Projects",
    hash: "#projects"
  },*/
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
      "I'm now a full-stack application developer. My current stack includes React, Redux, TypeScript, Java, and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
    skills: ["React", "Node.js", "TypeScript", "Java", "Spring Boot", "AWS"],
    institution: "Discover Financial Services"
  },
  {
    title: "Master of Computer Science",
    location: "Champaign, IL",
    description:
      "While working full-time, I obtained my Master of Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    skills: ["Cloud Computing", "Software Engineering", "Data Science"],
    institution: "University of Illinois Urbana-Champaign"
  },
  {
    title: "Software Engineer I",
    location: "Chicago, IL",
    description:
      "I was a frontend React developer supporting the complete redesign of the Discover Home Loan website.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
    skills: ["React", "Redux", "JavaScript"],
    institution: "Discover Financial Services"
  },
  {
    title: "Software Engineer I",
    location: "Chicago, IL",
    description:
      "I was a full-stack web developer at Discover Financial Services supporting credit card applications.",
    icon: React.createElement(SiSpringboot),
    date: "2022 - 2023",
    skills: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    institution: "Discover Financial Services"
  },
  {
    title: "Bachelor of Computer Science",
    location: "Champaign, IL",
    description: "I studied Computer Science and minored in Economics.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
    skills: ["Algorithms", "Data Structures", "Web Development", "Economics"],
    institution: "University of Illinois Urbana-Champaign"
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg
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
  "Playwright"
] as const;
