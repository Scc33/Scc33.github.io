import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => (
    <div
      className="mb-24 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      aria-label="Loading skills section"
    >
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-8 mx-auto w-48 dark:bg-gray-700"></div>
        <div className="flex flex-wrap justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-12 bg-gray-200 rounded-xl w-24 dark:bg-gray-700"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
});

const VerticalHistory = dynamic(() => import("@/components/VerticalHistory"), {
  loading: () => (
    <div
      className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      aria-label="Loading experience timeline"
    >
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-8 mx-auto w-48 dark:bg-gray-700"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-20 bg-gray-200 rounded dark:bg-gray-700"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
});

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <VerticalHistory />
    </div>
  );
}
