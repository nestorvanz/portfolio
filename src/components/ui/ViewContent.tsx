import { type ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  visible: boolean;
}

export function ViewContent({ children, visible }: Props) {
  const className = clsx("view-content", visible && "visible");

  return <div className={className}>{children}</div>;
}
