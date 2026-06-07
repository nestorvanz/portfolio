import { AboutMe } from "./AboutMe";
import { Accessibility } from "./Accessibility";
import { AI } from "./AI";
import { DesignSystems } from "./DesignSystems";
import { View } from "./ui/View";
import { Heading } from "./Heading";
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
    </Main>
  );
}
