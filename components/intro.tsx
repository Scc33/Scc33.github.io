"use client";

import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { CgWebsite } from "react-icons/cg";
import { LuFolder } from "react-icons/lu";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="animate-scale-in">
            <Image
              src="/profile.webp"
              alt="Sean Coughlin portrait"
              width="245"
              height="245"
              quality="95"
              priority={true}
              className="h-64 w-64 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
          <span className="absolute bottom-0 right-0 text-4xl animate-scale-in-delay-1">
            👋
          </span>
        </div>
      </div>
      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5]! sm:text-4xl animate-fade-in-up">
        Hello, I&apos;m <span className="font-bold">Sean.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is web
        development.
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 px-4 text-lg font-medium animate-fade-in-up-delay-1">
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-hidden focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://www.linkedin.com/in/sean-m-coughlin/"
          target="_blank"
        >
          LinkedIn
          <BsLinkedin />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-hidden focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://github.com/scc33"
          target="_blank"
        >
          GitHub
          <FaGithubSquare />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-hidden focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://blog.seancoughlin.me"
          target="_blank"
        >
          Blog
          <CgWebsite className="opacity-60" />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-hidden focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://portfolio.seancoughlin.me"
          target="_blank"
        >
          Portfolio
          <LuFolder className="opacity-60" />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-hidden focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume.pdf"
          download
        >
          Download Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </div>
    </section>
  );
}
