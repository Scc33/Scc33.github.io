"use client";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 animate-fade-in-up-delay-175"
      id="about"
      aria-labelledby="about-heading"
    >
      <SectionHeading id="about-heading">About me</SectionHeading>
      <div role="region" aria-label="Personal background and experience">
        <p className="mb-3">
          I have my undergraduate and graduate degrees in{" "}
          <span className="font-medium">computer science</span>. I am currently
          a <span className="font-medium">full-stack web developer</span> with
          Capital One (formerly Discover).{" "}
          <span className="italic">My favorite part of programming</span> is
          seeing creations come to life. I{" "}
          <span className="underline">love</span> the feeling of finally
          shipping code.
        </p>
        <p className="mb-3">
          My core stack is{" "}
          <span className="font-medium">
            React, Next.js, Java, and Spring Boot
          </span>
          . I am also familiar with TypeScript and cloud development. I am
          always looking to learn new technologies. Currently, I am studying for{" "}
          <span className="font-medium">cloud certifications</span>.
        </p>
        <p>
          When I&apos;m not coding, I enjoy{" "}
          <span className="font-medium">
            working out, hiking, exploring National Parks, and reading
          </span>
          .
        </p>
      </div>
    </section>
  );
}
