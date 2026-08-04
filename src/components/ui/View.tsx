import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import { ViewName } from "./ViewName";
import { ViewContent } from "./ViewContent";

interface Props {
  children: ReactNode;
  name?: string;
  height?: "auto" | "full";
  icon?: ReactNode;
  hint?: string;
}

export function View({ children, height = "auto", name, icon, hint }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setHasBeenVisible(true);
    }
  }, [visible]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= 0.4) {
            requestAnimationFrame(() => setVisible(true));
          } else {
            setVisible(false);
          }
        }
      },
      { threshold: [0, 0.4, 1] },
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const className = clsx("view", height === "full" && "full-height");

  const scrollIntoView = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const showHint = hint && !hasBeenVisible;

  return (
    <div ref={ref} className={className}>
      {name && (
        <ViewName
          visible={!visible}
          onClick={scrollIntoView}
          icon={showHint ? icon : undefined}
        >
          {showHint ? hint : name}
        </ViewName>
      )}
      <ViewContent visible={visible}>{children}</ViewContent>
    </div>
  );
}
