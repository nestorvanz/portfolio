import styles from "./Heading.module.scss";
import clsx from "clsx";

interface Props {
  children: string;
  level: "1" | "2" | "3";
}

export function Heading({ children, level }: Props) {
  const baseClassName: string[] = [];
  // const baseClassName = ["font-semibold"];
  let element;
  switch (level) {
    case "1":
      // let h1ClassName = clsx(baseClassName, "text-5xl", "mt-8", "mb-4");
      let h1ClassName = clsx(baseClassName);
      element = <h1 className={h1ClassName}>{children}</h1>;
      break;

    case "2":
      let h2ClassName = clsx(baseClassName, "text-2xl", "mt-4", "mb-4");
      element = <h2 className={h2ClassName}>{children}</h2>;
      break;

    case "3":
      let h3ClassName = clsx(
        baseClassName,
        "text-l",
        "text-stone-400",
        "mt-4",
        "mb-4",
        "border-stone-400",
        "border-b",
        "pb-1",
        "border-solid",
      );
      element = (
        <h3 className={h3ClassName}>
          <i>{children}</i>
        </h3>
      );
      break;

    default:
      break;
  }

  return element;
}
