import { type ReactNode, useEffect, useRef, useState } from "react";
import { Heading } from "./Heading";
import { View } from "./ui/View";

interface Props {
  children: ReactNode;
  heading: string;
  image?: string;
}

export function Article({ children, heading, image }: Props) {
  return (
    <article className="article">
      {image && <img src={image} alt="" />}
      <div className="content">
        <Heading level="2">{heading}</Heading>
        <div>{children}</div>
      </div>
    </article>
  );
}
