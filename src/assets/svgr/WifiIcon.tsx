import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgWifiIcon(props: ISvgProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.33 8.608a8.64 8.64 0 0 1 5.953 2.378c.12.118.314.117.433-.003l1.156-1.167a.322.322 0 0 0-.002-.456 10.897 10.897 0 0 0-15.08 0 .322.322 0 0 0-.003.456l1.156 1.167c.119.12.312.121.433.003a8.641 8.641 0 0 1 5.954-2.378Zm0 3.796c1.217 0 2.392.452 3.294 1.27a.31.31 0 0 0 .433-.006l1.155-1.167a.322.322 0 0 0-.005-.459 7.16 7.16 0 0 0-9.752 0 .322.322 0 0 0-.004.459l1.154 1.167a.31.31 0 0 0 .433.005 4.907 4.907 0 0 1 3.292-1.27Zm2.313 2.553a.314.314 0 0 1-.094.231l-1.997 2.016a.312.312 0 0 1-.444 0l-1.997-2.016a.314.314 0 0 1 .01-.457 3.422 3.422 0 0 1 4.419 0c.064.058.101.14.103.226Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgWifiIcon;
