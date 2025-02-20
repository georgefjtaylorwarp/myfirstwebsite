import Header from "@/components/lander/header";
import Projects from "@/components/lander/projects";
import InterestSelector from "@/components/lander/interests";
import CTA from "@/components/lander/cta";

export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <InterestSelector />
      <CTA />
    </div>
  );
}
