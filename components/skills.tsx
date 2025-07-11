"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-24 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:scale-105 transition-transform cursor-pointer animate-skills-item"
            key={index}
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {skill.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
