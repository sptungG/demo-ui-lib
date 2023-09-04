import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgInvoiceIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <g clipPath="url(#invoice-icon_svg__a)">
        <path
          d="M17.833 2.833H6.167a.833.833 0 0 0-.542.209 3.333 3.333 0 0 1 2.208 2.791c.013.111.013.223 0 .334v14.166a.833.833 0 0 0 1.375.634l2.375-2.034 2.375 2.034a.834.834 0 0 0 1.084 0l2.375-2.034 2.375 2.034a.834.834 0 0 0 1.375-.634V6.167a3.333 3.333 0 0 0-3.334-3.334ZM17 14.5h-5a.833.833 0 1 1 0-1.667h5a.833.833 0 0 1 0 1.667Zm0-3.333h-5A.833.833 0 1 1 12 9.5h5a.833.833 0 0 1 0 1.667Zm0-3.334h-5a.833.833 0 1 1 0-1.666h5a.833.833 0 0 1 0 1.666ZM6.167 6.167v6.666h-2.5A.834.834 0 0 1 2.833 12V5.833a1.675 1.675 0 0 1 3.334.334Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="invoice-icon_svg__a">
          <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgInvoiceIcon;
