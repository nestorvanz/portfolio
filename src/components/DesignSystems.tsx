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
        <Section heading="Facebook">
          <Paragraph>
            Developed and maintained a serie of base components for composing
            other Meta's web application desing sytems, for example, Messenger,
            Instagram, Threads, MetaAI.
          </Paragraph>
        </Section>
        <Section heading="Meta Cross Product">
          <Paragraph>
            Developed and maintained a serie of base components for composing
            other Meta's web application desing sytems, for example, Messenger,
            Instagram, Threads, MetaAI.
          </Paragraph>
        </Section>
        <Section heading="Base Components">
          <Paragraph>
            Developed and maintained a serie of base components for composing
            other Meta's web application desing sytems, for example, Messenger,
            Instagram, Threads, MetaAI.
          </Paragraph>
        </Section>
      </Article>
    </View>
  );
}
