import About from '@/components/about';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* <About /> */}
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
