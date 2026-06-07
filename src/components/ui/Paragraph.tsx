import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  align?: "start" | "center" | "end";
}

export function Paragraph({ align = "start", children }: Props) {
  const className = ["paragraph", `text-align-${align}`]
    .filter(Boolean)
    .join(" ");

  return <p className={className}>{children}</p>;
}
