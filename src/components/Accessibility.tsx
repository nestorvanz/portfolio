import { Article } from "./Article";
import { Section } from "./Section";
import { View } from "./ui/View";

export function Accessibility() {
  return (
    <View name="Accessibility">
      <Article heading="Accessibility" image="/img/ai.png">
        <Section heading="Overview">
          <p>
            I've gone beyond coding with AI, but making customs implementation
            to speed up development process and code maintainece.
          </p>
        </Section>
        <Section heading="Code Generation">
          <p>
            Created custom implementations for Claude Code to improve agentic
            code.
          </p>
        </Section>
        <Section heading="Code Migrations">
          <p>
            Implemented code modernizations utilizing AI custom migrations for
            Meta's JavaScript code base.
          </p>
        </Section>
      </Article>
    </View>
  );
}
