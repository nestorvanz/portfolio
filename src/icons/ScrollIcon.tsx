interface Props {
  size: number;
}

export function ScrollIcon(props: Props) {
  return (
    <svg
      width={props.size}
      height={(props.size * 33) / 23}
      viewBox="0 0 23 33"
      fill="none"
    >
      <rect
        x="0.767442"
        y="0.767442"
        width="20.7209"
        height="31.4651"
        rx="10.3605"
        stroke="currentColor"
        strokeWidth="1.53488"
      ></rect>
      <rect x="9" y="8" width="4" height="8" rx="2" fill="white"></rect>
    </svg>
  );
}
