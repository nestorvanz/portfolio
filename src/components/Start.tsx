import { View } from "./ui/View";
import { Heading } from "./Heading";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GitHubIcon } from "../icons/GitHubIcon";
import { Paragraph } from "./ui/Paragraph";
import { Continue } from "./ui/Continue";

export function Start() {
  return (
    <View height="full">
      <Heading level="1">Néstor Vanz</Heading>
      <Paragraph align="center">
        <span className="profesional-title">
          <i>Software Engineer</i>
        </span>
      </Paragraph>
      <div className="start-links">
        <LinkedInIcon size={32} />
        <GitHubIcon size={32} />
      </div>
    </View>
  );
}
