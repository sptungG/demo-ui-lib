import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgDocument1Icon(props: ISvgProps) {
  const sizeCheck = (value: any) => {
    if (props.size === "small") {
      return 20;
    } else if (props.size === "regular") {
      return 24;
    } else if (props.size === "large") {
      return 36;
    } else {
      return value;
    }
  };

  const colorCheck = (value: any) => {
    if (value === "primary") {
      return "#0088FF";
    } else if (value === "success") {
      return "#0FD186";
    } else if (value === "error") {
      return "#FF4D4D";
    } else if (value === "warning") {
      return "#FFAE06";
    } else {
      return value;
    }
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="m18.648 6.06-3.766-3.563a2.265 2.265 0 0 0-1.563-.622H6.15a2.276 2.276 0 0 0-2.274 2.273v15.704a2.276 2.276 0 0 0 2.273 2.273h10.938a2.276 2.276 0 0 0 2.273-2.273V7.712c0-.622-.259-1.224-.71-1.652Zm-4.21-2.026 2.672 2.529h-2.602a.07.07 0 0 1-.07-.07v-2.46Zm2.648 16.67H6.148a.853.853 0 0 1-.851-.852V4.148c0-.469.382-.851.851-.851h6.868v3.195c0 .823.669 1.492 1.492 1.492h3.43v11.868c0 .469-.383.851-.852.851Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M15.797 9.688H7.203a.71.71 0 0 0 0 1.421h8.594a.71.71 0 0 0 0-1.421ZM15.797 12.813H7.203a.71.71 0 0 0 0 1.421h8.594a.71.71 0 0 0 0-1.421ZM10.044 15.938h-2.84a.71.71 0 0 0 0 1.421h2.84a.711.711 0 1 0 0-1.422Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
    </svg>
  );
}

export default SvgDocument1Icon;
