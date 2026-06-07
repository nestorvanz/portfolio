import { type ReactNode, useEffect, useRef, useState } from "react";
import { Heading } from "./Heading";
import { View } from "./ui/View";

interface Props {
  children: ReactNode;
  heading: string;
  image?: string;
}

export function Article({ children, heading, image }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const imageElement = image && (
    <div className="article-image">
      <img src={image} alt="" />
    </div>
  );

  const contentElement = <div className="">{children}</div>;

  const articleClassName = ["reveal", visible && "visible"]
    .filter(Boolean)
    .join(" ");

  return (
    <article ref={ref} className={articleClassName}>
      {imageElement}
      <div className="article-content">
        <Heading level="2">{heading}</Heading>
        {contentElement}
      </div>
    </article>
  );
}
