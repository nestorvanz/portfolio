import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  visible: boolean;
}

export function ViewContent({ children, visible }: Props) {
  const className = ["view-content", visible && "visible"]
    .filter(Boolean)
    .join(" ");

  return <div className={className}>{children}</div>;
}
