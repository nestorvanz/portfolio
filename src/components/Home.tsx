import { AboutMe } from "./AboutMe";
import { Accessibility } from "./Accessibility";
import { AI } from "./AI";
import { Backend } from "./Backend";
import { DesignSystems } from "./DesignSystems";
import { Education } from "./Education";
import { Main } from "./Main";
import { Start } from "./Start";

export function Home() {
  return (
    <Main>
      <Start />
      <AboutMe />
      <AI />
      <DesignSystems />
      <Accessibility />
      <Backend />
      <Education />
      <Start />
    </Main>
  );
}
