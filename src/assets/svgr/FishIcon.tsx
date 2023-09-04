import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFishIcon(props: ISvgProps) {
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
      <g clipPath="url(#fish-icon_svg__a)" fill={colorCheck(props.color) || `currentColor`}>
        <path d="M10.242 11.32c-4.436.188-6.442 1.34-7.04 1.77a.473.473 0 0 0-.202.4c.072 3.033 2.502 5.26 5.96 6.225a8.46 8.46 0 0 0 1.59-3.216c.44-1.746.261-4.214-.308-5.179Zm-3.558 3.857a.967.967 0 0 1-.965-.964c0-.53.434-.964.965-.964.53 0 .964.434.964.964 0 .535-.43.965-.964.965Z" />
        <path d="M20.941 12.7c-.38-2.21-1.827-3.656-6.244-4.707-2.27-.54-3.611-3.129-3.987-5.573a.484.484 0 0 0-.868-.222c-.425.564-.574 1.412-.497 2.734.111 1.875-.574 2.468-2.266 2.7a.487.487 0 0 0-.265.839c1.23 1.133 2.917 1.6 4.812 1.653h.386c.154 0 .303.005.458 0h2.54a.603.603 0 0 1 0 1.206h-3.49a9.7 9.7 0 0 1 .197 5.463 9.757 9.757 0 0 1-1.436 3.172c.245.024.491.039.742.039h2.088c.096.352.265.723.56 1.06.853.975 2.068.96 2.458.931a.191.191 0 0 0 .174-.135c.11-.304.313-1.142-.27-2.102 3.201-.781 5.54-3.428 4.908-7.059Z" />
      </g>
      <defs>
        <clipPath id="fish-icon_svg__a">
          <path fill="#fff" transform="translate(3 2)" d="M0 0h18.042v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFishIcon;
