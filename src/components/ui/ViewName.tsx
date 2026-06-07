import { ArrowsDownIcon } from "../../icons/ArrowsDownIcon";
import { ArrowsUpIcon } from "../../icons/ArrowsUpIcon";

interface Props {
  children: string;
  visible: boolean;
}

export function ViewName({ children, visible }: Props) {
  const classNameTop = ["view-name-top", visible && "visible"]
    .filter(Boolean)
    .join(" ");
  const classNameBottom = ["view-name-bottom", visible && "visible"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={classNameTop}>
        <ArrowsDownIcon size={24} />
        <span>{children}</span>
      </div>
      <div className={classNameBottom}>
        <ArrowsUpIcon size={24} />
        <span>{children}</span>
      </div>
    </>
  );
}
