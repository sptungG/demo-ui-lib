import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgStoreEcommerceIcon(props: ISvgProps) {
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
      <g clipPath="url(#store-ecommerce-icon_svg__a)" fill="#08F">
        <path d="M24.25 16.794V7.956a1.982 1.982 0 0 0-1.977-1.981H3.727c-1.09 0-1.978.889-1.978 1.981v8.838h22.5Zm-12.26-4.032H5.684a.66.66 0 0 1 0-1.32h6.308a.66.66 0 0 1 0 1.32Zm0-2.107H5.684a.66.66 0 0 1 0-1.32h6.308a.66.66 0 0 1 0 1.32Zm0 4.214H5.684a.66.66 0 0 1 0-1.321h6.308a.66.66 0 0 1 0 1.321Zm4.133.696a.66.66 0 1 1 .002-1.32.66.66 0 0 1-.002 1.32Zm1.825 0a.66.66 0 1 1 0-1.32.66.66 0 0 1 0 1.32Zm2.942-4.622L19.4 13.57a.659.659 0 0 1-.573.334h-3.049a.659.659 0 0 1-.659-.66l.003-2.628v-.638h-.343a.66.66 0 0 1 0-1.321h1.002a.66.66 0 0 1 .66.66v.64h3.876a.658.658 0 0 1 .573.986ZM1.75 18.115v1.774c0 1.092.887 1.98 1.978 1.98h6.491v2.354H8.4a.66.66 0 0 0 0 1.32h9.203a.66.66 0 0 0 0-1.32H15.78V21.87h6.492c1.09 0 1.977-.889 1.977-1.982v-1.773H1.75Zm10.965.617h.57a.66.66 0 0 1 0 1.321h-.57a.66.66 0 0 1 0-1.321Z" />
      </g>
      <defs>
        <clipPath id="store-ecommerce-icon_svg__a">
          <path fill="#fff" transform="translate(1.75 4.5)" d="M0 0h22.5v22.5H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgStoreEcommerceIcon;
