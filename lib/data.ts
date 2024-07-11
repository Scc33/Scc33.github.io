import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSpringboot } from "react-icons/si";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export type data = {
  title: string;
  location: string;
  description: string;
  icon: JSX.Element;
  date: string;
  skills: string[];
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
    name: "Projects",
    hash: "#projects"
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
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
    skills: ["React", "Node.js", "TypeScript", "Java"]
  },
  {
    title: "Software Engineer I",
    location: "Chicago, IL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
    skills: ["React", "Redux", "JavaScript"]
  },
  {
    title: "Software Engineer I",
    location: "Chicago, IL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(SiSpringboot),
    date: "2022 - 2023",
    skills: ["Java", "Spring Boot"]
  }
] as const;

export const educationData: data[] = [
  {
    title: "Master of Computer Science",
    location: "Champaign, IL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    skills: []
  },
  {
    title: "Bachelor of Computer Science",
    location: "Champaign, IL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
    skills: []
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
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Playwright"
] as const;
