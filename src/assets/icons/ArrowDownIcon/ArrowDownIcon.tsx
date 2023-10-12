import { CSSProperties } from "react";

interface ArrowDownIconProps {
  style: CSSProperties;
}

export const ArrowDownIcon = ({ style }: ArrowDownIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g clipPath="url(#clip0_702_698)">
        <path
          d="M8.00001 8.78141L4.70001 5.48142L3.75734 6.42408L8.00001 10.6667L12.2427 6.42408L11.3 5.48142L8.00001 8.78141Z"
          fill="#88819F"
        />
      </g>
      <defs>
        <clipPath id="clip0_702_698">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
