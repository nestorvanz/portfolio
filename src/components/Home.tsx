import { Heading } from "./Heading";
import { Main } from "./Main";

export function Home() {
  return (
    <Main>
      <div className="pb-10">
        <Heading level="1">Nestor Vanz</Heading>
        <p className="text-stone-400 text-2xl">
          <i>Software Engineer | Design Systems Engineer</i>
        </p>
      </div>
      <Heading level="2">Abount me</Heading>
      <p>
        Software Engineer with 15+ years of experience specializing in web
        infrastructure, design systems, and digital accessibility at a global
        scale. Proven track record across the software lifecycle as a Systems
        Architect, Technical Lead, and DevOps Engineer, recently expanding into
        advanced AI engineering and Prompt Engineering to build intelligent,
        accessible-by-design enterprise applications.
      </p>
    </Main>
  );
}
