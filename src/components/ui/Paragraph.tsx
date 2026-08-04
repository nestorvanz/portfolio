import { type ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  align?: "start" | "center" | "end";
}

export function Paragraph({ align = "start", children }: Props) {
  const className = clsx("paragraph", `text-align-${align}`);

  return <p className={className}>{children}</p>;
}
