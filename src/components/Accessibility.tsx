import { Article } from "./Article";
import { Section } from "./Section";
import { View } from "./ui/View";
import { Paragraph } from "./ui/Paragraph";

export function Accessibility() {
  return (
    <View name="Accessibility">
      <Article heading="Accessibility" image="/img/ax.png">
        <Section heading="Overview">
          <Paragraph>
            I've gone beyond coding with AI, but making customs implementation
            to speed up development process and code maintainece.
          </Paragraph>
        </Section>
        <Section heading="Code Generation">
          <Paragraph>
            Created custom implementations for Claude Code to improve agentic
            code.
          </Paragraph>
        </Section>
        <Section heading="Code Migrations">
          <Paragraph>
            Implemented code modernizations utilizing AI custom migrations for
            Meta's JavaScript code base.
          </Paragraph>
        </Section>
      </Article>
    </View>
  );
}
