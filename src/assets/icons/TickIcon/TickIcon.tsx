import { CSSProperties } from "react";

interface TickIconProps {
  style: CSSProperties | undefined;
}

export const TickIcon = ({ style }: TickIconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M7.16668 10.1148L13.2947 3.98608L14.238 4.92875L7.16668 12.0001L2.92401 7.75742L3.86668 6.81475L7.16668 10.1148Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
