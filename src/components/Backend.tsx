import { Article } from "./Article";
import { Heading } from "./Heading";
import { Section } from "./Section";

export function Backend() {
  return (
    <Article heading="Backend experience" image="/img/backend.png">
      <Section heading="Overview">
        <p>
          I have engineered variety of backend application including
          microservices for tech companies.
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
  );
}
