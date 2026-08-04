import { Article } from "./Article";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Paragraph } from "./ui/Paragraph";

export function Backend() {
  return (
    <Article heading="Backend experience" image="/img/backend.png">
      <Section heading="Overview">
        <Paragraph>
          I have engineered variety of backend application including
          microservices for tech companies.
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
  );
}
