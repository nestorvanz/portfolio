import { ArrowsDownIcon } from "../../icons/ArrowsDownIcon";

interface Props {
  children: string;
}

export function Continue({ children }: Props) {
  return (
    <div className="continue">
      <ArrowsDownIcon size={24} />
      <span>{children}</span>
    </div>
  );
}
