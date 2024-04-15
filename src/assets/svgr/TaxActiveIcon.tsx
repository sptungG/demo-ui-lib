import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgTaxActiveIcon(props: ISvgProps) {
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
      <g clipPath="url(#tax-active-icon_svg__a)" fill="#08F">
        <path d="M19.713 5.143h3.78L18.856.506v3.78a.857.857 0 0 0 .857.857Z" />
        <path d="M19.716 6.857a2.571 2.571 0 0 1-2.572-2.571V0H7.716a2.571 2.571 0 0 0-2.571 2.571v6.172A8.571 8.571 0 0 1 12.002 24h9.428a2.571 2.571 0 0 0 2.572-2.571V6.857h-4.286Zm-5.143 0H9.43a.857.857 0 1 1 0-1.714h5.143a.857.857 0 0 1 0 1.714Zm5.143 12.857h-1.714a.857.857 0 1 1 0-1.714h1.714a.857.857 0 1 1 0 1.714Zm0-4.285h-1.714a.857.857 0 1 1 0-1.715h1.714a.857.857 0 1 1 0 1.715Zm0-4.286h-3.429a.857.857 0 0 1 0-1.714h3.429a.857.857 0 1 1 0 1.714Z" />
        <path d="M6.857 10.286a6.858 6.858 0 1 0 0 13.715 6.858 6.858 0 0 0 0-13.715ZM5.143 14.57a.857.857 0 1 1 0 1.714.857.857 0 0 1 0-1.714Zm3.428 5.143a.857.857 0 1 1 0-1.714.857.857 0 0 1 0 1.714Zm.609-3.677-3.429 3.429a.857.857 0 0 1-1.404-.28.857.857 0 0 1 .187-.937l3.429-3.429a.86.86 0 1 1 1.217 1.217Z" />
      </g>
      <defs>
        <clipPath id="tax-active-icon_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgTaxActiveIcon;
