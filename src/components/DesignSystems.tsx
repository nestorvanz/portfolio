import { Article } from "./Article";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { View } from "./ui/View";
import { Paragraph } from "./ui/Paragraph";

export function DesignSystems() {
  return (
    <View name="Design Sytems">
      <Article heading="Design Sytems experience" image="/fb_ds.png">
        <Paragraph>
          I have great expertice building web design system. I contributed to
          the created of Facebook design system. I also worked on creating the
          Meta's Accounts Center design system where I gain a great experience
          buildign multi brand design systems
        </Paragraph>
        <Section heading="Base Components">
          <Paragraph>
            Architected over 20 design system components using React for
            Meta's design systems, enabling the creation of new experiences
            with 100% design accuracy for Facebook and Account Center web
            applications. Implemented multiple UI base components for
            composing design system libraries with shared logic and
            functionality, allowing the creation of 4 design systems from a
            single source of truth.
          </Paragraph>
        </Section>
        <Section heading="Cross-Platform">
          <Paragraph>
            Migrated web design system components to cross-platform versions
            using React Native, enabling the development of Facebook and
            Account Center with 100% parity across 3 platforms (web, mobile,
            and VR) from a single source code.
          </Paragraph>
        </Section>
        <Section heading="Iconography">
          <Paragraph>
            Directed an iconography migration project of over 24K icons from
            PNG to SVG for Facebook and Accounts Center web applications,
            optimizing performance with a projected 80% saving in network
            data transfer for image assets.
          </Paragraph>
        </Section>
        <Section heading="Design Tokens">
          <Paragraph>
            Migrated Facebook's web design system from legacy design token
            infrastructure to a shared infrastructure, enabling parity in
            design tokens between mobile and web implementations while
            maintaining independence.
          </Paragraph>
        </Section>
      </Article>
    </View>
  );
}
