import VerticalHistory from "@/components/VerticalHistory";
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { educationData, experiencesData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <div id="experience">
        <VerticalHistory
          title="My Experience"
          data={experiencesData}
        />
        <VerticalHistory
          title="My Education"
          data={educationData}
        />
      </div>
    </main>
  );
}
