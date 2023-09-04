import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSettingsFilledIcon(props: ISvgProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.028 5.087a7.973 7.973 0 0 0-.819-.417l-.412-1.884A1 1 0 0 0 13.82 2h-3.64a1 1 0 0 0-.977.786L8.791 4.67a7.972 7.972 0 0 0-1.535.886L5.42 4.97a1 1 0 0 0-1.17.453L2.43 8.576a1 1 0 0 0 .193 1.24l1.425 1.298a7.97 7.97 0 0 0 0 1.772l-1.425 1.299a1 1 0 0 0-.192 1.239l1.82 3.152a1 1 0 0 0 1.17.453l1.836-.585a7.986 7.986 0 0 0 1.535.886l.412 1.884a1 1 0 0 0 .977.786h3.64a1 1 0 0 0 .977-.786l.412-1.884a7.986 7.986 0 0 0 1.535-.886l1.837.585a1 1 0 0 0 1.17-.453l1.82-3.152a1 1 0 0 0-.193-1.24l-1.425-1.298a7.977 7.977 0 0 0 0-1.772l1.425-1.299a1 1 0 0 0 .192-1.239l-1.82-3.152a1 1 0 0 0-1.17-.453l-1.836.585a7.97 7.97 0 0 0-.716-.47ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSettingsFilledIcon;
