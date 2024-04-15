import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageReturnFilledIcon(props: ISvgProps) {
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
        d="m8.918 2.018-4.168.017c-.54 0-1.046.3-1.303.771L1.269 6.751l7.229-.017.42-4.716ZM17.886 6.717l-2.203-3.945A1.507 1.507 0 0 0 14.37 2l-4.168.017.438 4.717 7.245-.017ZM8.926 15.622c.002-.502.21-.99.568-1.34l3.958-3.82c.35-.339.814-.526 1.303-.526a1.874 1.874 0 0 1 1.874 1.88l-.001.61a8.06 8.06 0 0 1 1.516.476l.008-2.16.01.004-.005-1.318.005-1.39h-.01v-.043l-7.933.026H8.943L1.01 7.996v.042H1l.005 1.39L1 10.747a.046.046 0 0 1 .01-.003l.025 7.096c0 .746.609 1.355 1.346 1.355h.009l7.19-.02 2.178.006-2.267-2.212a1.89 1.89 0 0 1-.565-1.347Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m15.41 13.826.006-2.182a.387.387 0 0 0-.655-.279l-4.388 4.223a.385.385 0 0 0-.001.552l4.364 4.247a.39.39 0 0 0 .42.08c.143-.06.236-.2.236-.354l.007-2.182.73.002a6.571 6.571 0 0 1 5.733 3.389l.011.02a.386.386 0 0 0 .725-.183c.01-3.99-3.202-7.254-7.188-7.333Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackageReturnFilledIcon;
