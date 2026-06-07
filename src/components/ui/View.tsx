import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function View(props: Props) {
  return <div className="view">{props.children}</div>;
}
