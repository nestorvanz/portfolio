import { Article } from "./Article";
import { View } from "./ui/View";
import { Paragraph } from "./ui/Paragraph";

export function Education() {
  return (
    <View name="Education">
      <Article heading="Education">
        <Paragraph>
          Computer Science, Bachelor — University Autonomous of Sinaloa,
          Culiacán, Mexico (Aug 2006 – Jul 2011).
        </Paragraph>
      </Article>
    </View>
  );
}
