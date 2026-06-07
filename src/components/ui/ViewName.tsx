import { ArrowsDownIcon } from "../../icons/ArrowsDownIcon";

interface Props {
  children: string;
  visible: boolean;
}

export function ViewName({ children, visible }: Props) {
  const className = ["view-name", visible && "visible"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <ArrowsDownIcon size={24} />
      <span>{children}</span>
    </div>
  );
}
