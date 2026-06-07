import { useEffect, useRef, useState, type ReactNode } from "react";
import { ViewName } from "./ViewName";
import { ViewContent } from "./ViewContent";

interface Props {
  children: ReactNode;
  name?: string;
  height?: "auto" | "full";
}

export function View({ children, height = "auto", name }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= 0.5) {
            requestAnimationFrame(() => setVisible(true));
          } else {
            setVisible(false);
          }
        }
      },
      { threshold: [0, 0.5, 1] },
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const className = ["view", height === "full" && "full-height"]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={className}>
      {name && <ViewName visible={!visible}>{name}</ViewName>}
      <ViewContent visible={visible}>{children}</ViewContent>
    </div>
  );
}
