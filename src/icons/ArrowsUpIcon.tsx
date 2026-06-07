interface Props {
  size: number;
}

export function ArrowsUpIcon(props: Props) {
  return (
    <svg
      fill="currentColor"
      height={props.size}
      viewBox="0 0 32 32"
      width={props.size}
    >
      <g>
        <path d="M6.41 18.29 16 8.7l9.59 9.59a2 2 0 0 0 2.82 0 2 2 0 0 0 0-2.83l-11-11a2 2 0 0 0-2.82 0l-11 11a2 2 0 0 0 2.82 2.83z"></path>
        <path d="M3.59 27.54a2 2 0 0 0 2.82 0L16 18l9.59 9.59a2 2 0 0 0 2.82 0 2 2 0 0 0 0-2.83l-11-11a2 2 0 0 0-2.82 0l-11 11a2 2 0 0 0 0 2.78z"></path>
      </g>
    </svg>
  );
}
