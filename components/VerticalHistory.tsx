"use client";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline as VerticalTimelineComponent,
  VerticalTimelineElement as VerticalTimelineElementComponent,
  VerticalTimelineElementProps,
  VerticalTimelineProps
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { Fragment } from "react";
import { data } from "@/lib/data";

const VerticalTimeline = VerticalTimelineComponent as React.ComponentType<
  React.PropsWithChildren<VerticalTimelineProps>
>;
const VerticalTimelineElement =
  VerticalTimelineElementComponent as React.ComponentType<
    React.PropsWithChildren<VerticalTimelineElementProps>
  >;

export default function VerticalHistory({
  title,
  data
}: {
  title: string;
  data: data[];
}) {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section ref={ref} className="scroll-mt-28 mb-24 sm:mb-40">
      <SectionHeading>{title}</SectionHeading>
      <VerticalTimeline lineColor="">
        {data.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem"
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)"
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem"
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <ul className="flex flex-wrap !mt-1 gap-2 sm:mt-auto">
                {item.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
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
