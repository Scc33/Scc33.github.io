"use client";

import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "./VerticalTimeline";
import { useSectionInView } from "@/lib/hooks";
import { Fragment } from "react";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 flex flex-col items-center mb-24 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              date={item.date}
              icon={item.icon}
              index={index}
              isLast={index === experiencesData.length - 1}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 mb-2">
                {item.description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {item.skills.map((skill, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
