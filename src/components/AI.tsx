import { Article } from "./Article";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Continue } from "./ui/Continue";
import { View } from "./ui/View";
import { Paragraph } from "./ui/Paragraph";

export function AI() {
  return (
    <View name="AI">
      <Article heading="AI Implementations" image="/img/ai.png">
        <Paragraph>
          I've gone beyond coding with AI, but making customs implementation to
          speed up development process and code maintainece.
        </Paragraph>
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
