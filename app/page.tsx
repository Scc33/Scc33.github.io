import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <div>Loading...</div>
});

const VerticalHistory = dynamic(() => import("@/components/VerticalHistory"), {
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <VerticalHistory />
    </main>
  );
}
