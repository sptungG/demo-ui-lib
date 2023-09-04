import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgStoreCashierIcon(props: ISvgProps) {
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
      <g clipPath="url(#store-cashier-icon_svg__a)">
        <g clipPath="url(#store-cashier-icon_svg__b)" fill="#08F">
          <path d="M20.649 6.22V2.25h-9.265v3.97h3.97v1.324H5.227c-.975 0-1.799.698-1.958 1.659l-1.057 6.34c.186-.033.375-.058.57-.058h18.53c.195 0 .384.025.57.058l-1.057-6.34a1.978 1.978 0 0 0-1.958-1.659h-2.188V6.221h3.97ZM7.414 13.5H6.09v-1.324h1.324V13.5Zm0-2.647H6.09V9.529h1.324v1.324ZM10.06 13.5H8.737v-1.324h1.324V13.5Zm0-2.647H8.737V9.529h1.324v1.324ZM18 13.5h-6.617V9.53h6.618v3.97Z" />
          <path d="M12.707 10.853h3.97v1.323h-3.97v-1.323ZM21.353 16.809H2.735A1.985 1.985 0 0 0 .75 18.794v4.632h22.588v-4.632a1.985 1.985 0 0 0-1.985-1.985Zm-6 3.97H8.735v-1.985h1.324v.662h3.97v-.662h1.324v1.985Z" />
        </g>
      </g>
      <defs>
        <clipPath id="store-cashier-icon_svg__a">
          <path fill="#fff" transform="translate(.75 2.25)" d="M0 0h22.5v21H0z" />
        </clipPath>
        <clipPath id="store-cashier-icon_svg__b">
          <path fill="#fff" transform="translate(.75 1.544)" d="M0 0h22.588v22.588H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgStoreCashierIcon;
