import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgBatteryIcon(props: ISvgProps) {
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
      <path
        opacity={0.35}
        d="M.5 9c0-1.197.97-2.167 2.167-2.167h16.37c1.196 0 2.166.97 2.166 2.167v5.847c0 1.197-.97 2.167-2.166 2.167H2.667A2.167 2.167 0 0 1 .5 14.847V9Z"
        fill="#EEEFEF"
        stroke="#3D3D3D"
      />
      <path
        d="M22.69 9.95v3.947a2.14 2.14 0 0 0 0-3.946ZM1.973 9.64c0-.737.597-1.334 1.333-1.334h15.091c.736 0 1.333.597 1.333 1.334v4.567c0 .737-.597 1.334-1.333 1.334H3.307a1.333 1.333 0 0 1-1.334-1.334V9.64Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgBatteryIcon;
