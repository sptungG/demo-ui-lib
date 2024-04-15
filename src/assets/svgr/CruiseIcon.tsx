import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCruiseIcon(props: ISvgProps) {
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
        d="M21.817 18.898a2.502 2.502 0 0 0-1.656-.645 2.506 2.506 0 0 0-1.672.604c-.16.138-.35.231-.55.278l1.197-8.167c.088-.598-.303-1.172-.91-1.334l-1.101-.294V6.042c0-.667-.566-1.21-1.26-1.21h-.977v-.766c0-.588-.498-1.066-1.11-1.066h-3.465c-.612 0-1.11.478-1.11 1.066v.766H8.197c-.694 0-1.26.543-1.26 1.21V9.34l-1.1.294c-.608.162-.999.737-.91 1.337l1.222 8.164a1.303 1.303 0 0 1-.654-.297l-.01-.009a2.522 2.522 0 0 0-3.298.032.547.547 0 0 0-.032.795c.22.228.59.242.828.03a1.317 1.317 0 0 1 1.722-.016l.01.009a2.529 2.529 0 0 0 3.158.084l.399-.304a1.329 1.329 0 0 1 1.553-.03l.706.494c.429.3.937.449 1.446.449.53 0 1.06-.163 1.498-.487l.592-.438a1.33 1.33 0 0 1 1.553-.01l.538.388a2.54 2.54 0 0 0 3.113-.132 1.33 1.33 0 0 1 1.74.022.603.603 0 0 0 .828-.022.547.547 0 0 0-.023-.795ZM10.374 4.125h3.342v.707h-3.342v-.707Zm1.072 15.012a1.274 1.274 0 0 1-.223-.123l-.706-.495a2.543 2.543 0 0 0-2.973.06l-.264.2L6.09 10.81a.085.085 0 0 1 .063-.093l5.294-1.413v9.832Zm.248-11.066-3.584.957V6.04c0-.046.04-.084.088-.084h1.004v.823c0 .311.263.563.586.563a.575.575 0 0 0 .586-.563v-.823h1.071v.823c0 .311.263.563.586.563a.575.575 0 0 0 .586-.563v-.823h1.1v.823c0 .311.261.563.585.563a.575.575 0 0 0 .586-.563v-.823h.977c.048 0 .088.038.088.084v2.987l-3.584-.957a1.311 1.311 0 0 0-.675 0Zm5.1 10.805-.47-.338a2.544 2.544 0 0 0-2.971.018l-.592.438a1.277 1.277 0 0 1-.143.09V9.306l5.294 1.413c.043.011.07.052.064.093l-1.182 8.065Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgCruiseIcon;
