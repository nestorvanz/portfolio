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
            Powered accessible code generation at Meta using a routing-based
            set of over 25 LLM rules, skills, and references for HTML and
            Facebook AI code authoring, improving AI code generation for
            Facebook web applications.
          </Paragraph>
        </Section>
        <Section heading="Code Migrations">
          <Paragraph>
            Spearheaded a large-scale Flow/JavaScript modernization at Meta
            using AI-automated migrations for Meta's public-facing web
            applications, optimizing the codebase for AI efficiency and
            reducing token usage by up to 7% of the treated code.
          </Paragraph>
        </Section>
      </Article>
    </View>
  );
}
