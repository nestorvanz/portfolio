import { AboutMe } from "./AboutMe";
import { Accessibility } from "./Accessibility";
import { AI } from "./AI";
import { DesignSystems } from "./DesignSystems";
import { Heading } from "./Heading";
import { Main } from "./Main";

export function Home() {
  return (
    <Main>
      <div className="pb-1 mb-10">
        <Heading level="1">Nestor Vanz</Heading>
        <p className="text-stone-400 text-2xl">
          <i>Software Engineer</i>
        </p>
      </div>
      <AboutMe />
      <AI />
      <DesignSystems />
      <Accessibility />
    </Main>
  );
}
