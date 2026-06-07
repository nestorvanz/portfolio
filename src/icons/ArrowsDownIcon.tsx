interface Props {
  size: number;
}

export function ArrowsDownIcon(props: Props) {
  return (
    <svg
      fill="currentColor"
      height={props.size}
      viewBox="0 0 32 32"
      width={props.size}
    >
      <g>
        <path d="m3.59 16.54 11 11a2 2 0 0 0 2.82 0l11-11a2 2 0 0 0-2.82-2.83L16 23.3l-9.59-9.59a2 2 0 1 0-2.82 2.83z"></path>
        <path d="M14.59 18.29a2 2 0 0 0 2.82 0l11-11a2 2 0 0 0-2.82-2.83L16 14.05 6.41 4.46a2 2 0 0 0-2.82 2.83z"></path>
      </g>
    </svg>
  );
}
