import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGrabIcon(props: ISvgProps) {
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
        d="M13.266 6.951c2.435 0 4.203.44 5.015 1.22l.047-.049V6.317c-1.194-.634-2.865-.926-5.062-.926-3.726 0-6.83 3.121-6.83 6.828v.44c0 3.706 3.009 6.828 6.543 6.828 3.01 0 4.25-1.073 4.346-1.17l.24-.244V13.73h-4.681v1.464h3.152v2.146c-.43.244-1.385.634-3.057.634-2.722 0-5.015-2.439-5.015-5.317v-.439c0-2.829 2.436-5.268 5.302-5.268Zm-.335 5.951h5.493v5.61c-.478.487-2.102 1.95-5.493 1.95-4.012 0-7.403-3.56-7.403-7.755v-.439c0-4.195 3.535-7.755 7.738-7.755 2.006 0 3.773.341 5.062.975V3.83C16.943 3.293 15.176 3 13.266 3 8.25 2.952 4 7.244 4 12.268v.44c0 5.023 4.107 9.267 8.98 9.267 4.87 0 6.781-2.634 6.877-2.732l.143-.195v-7.707h-7.069v1.561Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgGrabIcon;
