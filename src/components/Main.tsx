import styles from "./Main.module.scss";
import { useEffect, useState, type ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
}

export function Main({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const className = clsx(
    // "box-border",
    // "duration-500",
    // "max-w-2xl",
    // "pt-10",
    // "pl-4",
    // "pr-4",
    // "mx-auto",
    // "transition-opacity",
    // "w-full",
    // visible ? "opacity-100" : "opacity-0",
  );

  return <main className={className}>{children}</main>;
}
