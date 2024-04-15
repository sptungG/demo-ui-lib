import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageScratchIcon(props: ISvgProps) {
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
        d="M20.416 7.854v-.08l-.003-.024c0-.01-.003-.02-.004-.031l-.005-.026-.006-.028a.584.584 0 0 0-.008-.029l-.009-.024a.713.713 0 0 0-.012-.031l-.01-.022a.619.619 0 0 0-.016-.03l-.005-.01-.014-.025a.944.944 0 0 0-.071-.122l-2.782-4.81A1.128 1.128 0 0 0 16.497 2H6.92c-.401 0-.774.216-.975.563L3.118 7.47a.587.587 0 0 0-.056.137.99.99 0 0 0-.062.345v12.67c0 .298.095.573.255.798l.014.02.01.013.015.02.005.006c.253.318.643.522 1.08.522h14.66a1.38 1.38 0 0 0 1.378-1.378V7.905l-.001-.05Zm-8.101-4.682h4.154l2.19 3.784h-6.344V3.172Zm-5.367 0h4.194v3.784H4.767l2.181-3.784ZM4.172 19.986V8.129h14.356L4.172 19.986Zm15.073.636a.206.206 0 0 1-.206.206H4.994l14.25-11.77v11.564Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPackageScratchIcon;
