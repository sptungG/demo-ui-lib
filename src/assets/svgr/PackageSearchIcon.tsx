import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageSearchIcon(props: ISvgProps) {
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
        d="m20.529 21-1.306-1.361a4.365 4.365 0 0 0 .965-2.752c0-1.912-1.21-3.535-2.875-4.081V7.17c0-.18-.048-.35-.13-.496l-.001-.002-2.273-4.153a.996.996 0 0 0-.866-.52H6.27c-.357 0-.689.2-.867.521L3.162 6.658A1.055 1.055 0 0 0 3 7.222v10.346c0 .798.624 1.448 1.39 1.448h8.046a.55.55 0 0 0 .082-.007c.708 1.287 2.04 2.155 3.564 2.155a3.97 3.97 0 0 0 2.304-.739l1.347 1.403a.55.55 0 0 0 .796 0c.22-.229.22-.6 0-.828ZM10.735 3.172h3.236l1.652 3.02h-4.888v-3.02Zm-4.392 0H9.61v3.02H4.707l1.636-3.02Zm5.633 13.715c0 .328.035.649.103.956H4.39a.27.27 0 0 1-.264-.275V7.363h12.063v5.247a3.718 3.718 0 0 0-.106 0c-2.264 0-4.107 1.918-4.107 4.277Zm4.106 3.105c-1.644 0-2.981-1.393-2.981-3.105 0-1.713 1.337-3.106 2.98-3.106 1.645 0 2.982 1.393 2.982 3.106 0 1.712-1.337 3.105-2.981 3.105Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPackageSearchIcon;
