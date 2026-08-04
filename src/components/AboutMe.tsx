import { Article } from "./Article";
import { Section } from "./Section";
import { Continue } from "./ui/Continue";
import { View } from "./ui/View";
import { ScrollIcon } from "../icons/ScrollIcon";
import { Paragraph } from "./ui/Paragraph";

export function AboutMe() {
  return (
    <View
      name="About me"
      hint="Scroll down to learn more about me"
      icon={<ScrollIcon size={18} />}
    >
      <Article heading="About Me" image="/img/me.png">
        {/* <Section heading="Overview">
          
        </Section> */}

        <Paragraph>
          I am a{" "}
          <b>
            <i>Software Engineer</i>
          </b>{" "}
          with over 15 years of experience specializing in web infrastructure,
          design systems, and digital accessibility at a global scale. Proven
          track record across the software lifecycle as a Systems Architect,
          Technical Lead, and DevOps Engineer, recently expanding into advanced
          AI engineering and Prompt Engineering to build intelligent,
          accessible-by-design enterprise applications.
        </Paragraph>

        <Section heading="My Skills">
          <Paragraph>
            Frontend Development, Full-Stack Development, Backend Development,
            Database Architecture, Design Sytem Engineering, Accessibility
            Implementations, Development Leadership, Project Management, Agile
            Development.
          </Paragraph>
        </Section>

        <Section heading="Techs">
          <Paragraph>
            React, Angular, JavaScript, TypeScript, Flow, CSS, Node.js, PHP,
            MongoDB, MS SQL Server, PostgreSQL, Kafka.
          </Paragraph>
        </Section>
      </Article>
    </View>
  );
}
