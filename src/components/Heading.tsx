import styles from "./Heading.module.scss";

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
      let h1ClassName = [...baseClassName].join(
        // let h1ClassName = [...baseClassName, "text-5xl", "mt-8", "mb-4"].join(
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
        // "border-stone-400",
        // "border-b",
        "pb-1",
        "border-solid",
      ].join(" ");
      element = <h2 className={h2ClassName}>{children}</h2>;
      break;

    case "3":
      let h3ClassName = [...baseClassName, "text-l", "text-stone-400"].join(
        " ",
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
