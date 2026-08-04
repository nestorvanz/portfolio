import { Article } from "./Article";
import { Section } from "./Section";
import { View } from "./ui/View";
import { Paragraph } from "./ui/Paragraph";

export function Accessibility() {
  return (
    <View name="Accessibility">
      <Article heading="Accessibility" image="/img/ax.png">
        <Paragraph>
          Specializing in digital accessibility at a global scale, building
          WCAG-compliant, accessible-by-design enterprise applications across
          Meta's web design systems.
        </Paragraph>
        <Section heading="Compliance">
          <Paragraph>
            Led the Design System's accessibility compliance project for
            Facebook and Accounts Center web components, enabling Facebook's and
            Accounts Center's web applications to be 100% compliant with
            government regulations.
          </Paragraph>
        </Section>
        <Section heading="AI-Powered Authoring">
          <Paragraph>
            Powered accessible code generation using a routing-based set of over
            25 LLM rules, skills, and references for HTML and Facebook AI code
            authoring, improving AI code generation for Facebook web
            applications.
          </Paragraph>
        </Section>
      </Article>
    </View>
  );
}
