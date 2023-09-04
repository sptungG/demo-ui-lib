import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSapoIcon(props: ISvgProps) {
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
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <g clipPath="url(#sapo-icon_svg__a)">
        <path
          d="M22.827 14.156V5.331c0-2.407-1.998-4.341-4.484-4.341l-13.6 2.17C2.259 3.16.26 5.095.26 7.502V20.67c0 2.407 1.999 4.341 4.485 4.341h13.599c2.486 0 4.484-1.934 4.484-4.341v-5.804a1.733 1.733 0 0 1 0-.709Zm-5.264 7.976c-1.56 1.038-3.46 1.557-5.703 1.557-3.217 0-6.19-1.133-8.871-3.35l2.925-2.832c1.803 1.888 3.85 2.784 6.239 2.784.877 0 1.754-.189 2.486-.566.974-.425 1.413-1.085 1.413-1.84 0-1.133-.877-1.888-2.632-2.219l-2.437-.377c-2.145-.378-3.753-.897-4.777-1.51-1.56-.944-2.34-2.218-2.34-3.964 0-1.935.829-3.493 2.437-4.672 1.463-1.039 3.217-1.558 5.313-1.558 2.681 0 5.265.897 7.848 2.643l-2.437 2.879c-1.755-1.416-3.51-2.124-5.313-2.124-.878 0-1.657.189-2.388.566-.83.425-1.268 1.086-1.268 1.84 0 1.04.878 1.7 2.632 2.03l4.29.802c3.46.614 5.215 2.313 5.215 5.097 0 2.03-.877 3.634-2.632 4.814Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="sapo-icon_svg__a">
          <path
            fill={colorCheck(props.color) || `currentColor`}
            transform="translate(.26 .99)"
            d="M0 0h22.568v24.021H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgSapoIcon;
