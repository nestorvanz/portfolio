import { AboutMe } from "./AboutMe";
import { Accessibility } from "./Accessibility";
import { AI } from "./AI";
import { DesignSystems } from "./DesignSystems";
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
      <Start />
    </Main>
  );
}
