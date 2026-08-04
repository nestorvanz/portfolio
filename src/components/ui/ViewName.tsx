import { type ReactNode } from "react";
import clsx from "clsx";
import { ArrowsDownIcon } from "../../icons/ArrowsDownIcon";
import { ArrowsUpIcon } from "../../icons/ArrowsUpIcon";

interface Props {
  children: string;
  visible: boolean;
  onClick?: () => void;
  icon?: ReactNode;
}

export function ViewName({ children, visible, onClick, icon }: Props) {
  const classNameTop = clsx("view-name-top", visible && "visible");
  const classNameBottom = clsx("view-name-bottom", visible && "visible");

  return (
    <>
      <button type="button" className={classNameTop} onClick={onClick}>
        {icon ?? <ArrowsDownIcon size={24} />}
        <span>{children}</span>
      </button>
      <button type="button" className={classNameBottom} onClick={onClick}>
        {icon ?? <ArrowsUpIcon size={24} />}
        <span>{children}</span>
      </button>
    </>
  );
}
