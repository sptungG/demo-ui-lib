import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCartDownIcon(props: ISvgProps) {
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
        d="M19.73 10.913a.587.587 0 0 0-.586.587v2.045c0 .681-.554 1.236-1.236 1.236H8.773a1.237 1.237 0 0 1-1.236-1.236V4.547c0-.653-.41-1.247-1.02-1.478l-2.722-1.03a.587.587 0 0 0-.416 1.097l2.722 1.03c.157.06.263.213.263.381v12.396c0 1.248.996 2.268 2.235 2.308A1.963 1.963 0 0 0 10.393 22a1.963 1.963 0 0 0 1.796-2.748h3.503A1.963 1.963 0 0 0 17.487 22c1.081 0 1.96-.88 1.96-1.96 0-1.082-.879-1.961-1.96-1.961H8.674c-.627 0-1.137-.51-1.137-1.137v-1.33c.362.217.785.342 1.236.342h9.135a2.413 2.413 0 0 0 2.41-2.41V11.5a.587.587 0 0 0-.587-.587Zm-2.243 8.34a.788.788 0 0 1 0 1.573.788.788 0 0 1 0-1.573Zm-7.093 0a.788.788 0 0 1 0 1.573.788.788 0 0 1 0-1.573Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M15.655 9.4a.587.587 0 0 0-.824.097l-.566.719v-5.45a.587.587 0 0 0-1.174 0v5.414l-.52-.677a.587.587 0 0 0-.931.714l1.565 2.041c.108.141.267.218.431.228h.001l.034.002H13.684l.031-.002h.004a.584.584 0 0 0 .427-.222l1.607-2.04a.587.587 0 0 0-.098-.825Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgCartDownIcon;
