function IconDown(props) {
  const angle =
    props.direction === "up"
      ? 180
      : props.direction === "right"
        ? 90
        : props.direction === "left"
          ? -90
          : 0;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{
        transform: `rotate(${angle}deg) translateY(4px) `,
        width: props.size,
        height: props.size,
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default IconDown;
