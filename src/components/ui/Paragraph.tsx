import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Paragraph(props: Props) {
  return <p className="paragraph">{props.children}</p>;
}
