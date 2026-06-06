import { type ReactNode } from "react";
import { Heading } from "./Heading";

interface Props {
  children: ReactNode;
  heading: string;
  image?: string;
}

export function Article({ children, heading, image }: Props) {
  const imageElement = image && (
    <div className="article-image">
      <img src={image} alt="" />
    </div>
  );

  const contentElement = <div className="article-content">{children}</div>;

  return (
    <article className="mb-20">
      <Heading level="2">{heading}</Heading>
      {imageElement}
      {contentElement}
    </article>
  );
}
