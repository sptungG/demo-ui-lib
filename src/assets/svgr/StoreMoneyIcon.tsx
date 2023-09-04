import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgStoreMoneyIcon(props: ISvgProps) {
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
      <g clipPath="url(#store-money-icon_svg__a)" fill="#08F">
        <path d="M16.266 9.531c-4.265 0-7.735 3.47-7.735 7.735 0 4.264 3.47 7.734 7.735 7.734C20.53 25 24 21.53 24 17.266 24 13 20.53 9.53 16.266 9.53Zm0 7.031c1.163 0 2.109.947 2.109 2.11 0 .915-.59 1.688-1.406 1.98v1.535h-1.407v-1.535a2.106 2.106 0 0 1-1.406-1.98h1.406a.704.704 0 1 0 .704-.703 2.112 2.112 0 0 1-2.11-2.11c0-.915.59-1.688 1.406-1.98v-1.535h1.407v1.536a2.106 2.106 0 0 1 1.406 1.98h-1.406a.704.704 0 1 0-.703.703ZM7.828 9.531c4.337 0 7.734-1.853 7.734-4.219C15.563 2.947 12.165 1 7.829 1S0 2.947 0 5.313C0 7.678 3.491 9.53 7.828 9.53ZM0 16.823v1.146c0 2.365 3.491 4.218 7.828 4.218.246 0 .484-.022.727-.034a9.081 9.081 0 0 1-1.179-2.795C4.24 19.271 1.517 18.308 0 16.823ZM7.159 17.933c-.016-.221-.034-.442-.034-.667 0-.733.096-1.443.26-2.126-3.14-.085-5.867-1.05-7.385-2.536v1.146c0 2.24 3.153 4 7.159 4.183ZM7.828 13.75h.002a9.172 9.172 0 0 1 1.975-2.945c-.635.08-1.291.133-1.977.133-3.338 0-6.238-.996-7.828-2.552V9.53c0 2.366 3.491 4.219 7.828 4.219Z" />
      </g>
      <defs>
        <clipPath id="store-money-icon_svg__a">
          <path fill="#fff" transform="translate(0 1)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgStoreMoneyIcon;
