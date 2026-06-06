import { type ReactNode } from "react";
import { Heading } from "./Heading";

interface Props {
  children: ReactNode;
  heading: string;
}

export function Section({ children, heading }: Props) {
  return (
    <section className="mt-5 mb-5">
      <Heading level="3">{heading}</Heading>
      {children}
    </section>
  );
}
