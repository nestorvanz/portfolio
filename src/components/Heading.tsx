import styles from "./Heading.module.scss";

interface Props {
  children: string;
  level: "1" | "2";
}

export function Heading({ children, level }: Props) {
  const baseClassName = ["font-semibold"];
  let element;
  switch (level) {
    case "1":
      let h1ClassName = [...baseClassName, "text-5xl", "mt-8", "mb-4"].join(
        " ",
      );
      element = <h1 className={h1ClassName}>{children}</h1>;
      break;

    case "2":
      let h2ClassName = [
        ...baseClassName,
        "text-2xl",
        "mt-4",
        "mb-4",
        // "text-stone-400",
        "border-stone-400",
        "border-b",
        "pb-1",
        "border-solid",
      ].join(" ");
      element = <h1 className={h2ClassName}>{children}</h1>;
      break;
    default:
      break;
  }

  return element;
}
