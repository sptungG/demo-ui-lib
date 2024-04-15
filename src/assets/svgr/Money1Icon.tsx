import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgMoney1Icon(props: ISvgProps) {
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
        d="M16.166 2a5.84 5.84 0 0 0-5.833 5.834 5.84 5.84 0 0 0 5.833 5.833A5.84 5.84 0 0 0 22 7.834 5.84 5.84 0 0 0 16.166 2Zm-.316 5.209h.634a1.769 1.769 0 0 1 .307 3.51v.656a.625.625 0 1 1-1.25 0v-.625h-.833a.625.625 0 1 1 0-1.25h1.775a.52.52 0 0 0 0-1.041h-.633a1.769 1.769 0 0 1-.308-3.51V4.29a.625.625 0 1 1 1.25 0v.625h.833a.625.625 0 1 1 0 1.25H15.85a.517.517 0 0 0-.516.516.52.52 0 0 0 .516.527ZM2.41 12.002a.418.418 0 0 0-.41.417v7.498c0 .23.186.417.416.417h1.77c.185 0 .35-.124.4-.303l1.844-6.498a.833.833 0 0 0-.516-1.01c-.755-.277-1.914-.548-3.504-.521ZM20.334 16.584c-1.667 0-5 2.11-6.667 2.11-1.666 0-3.542-1.278-3.542-1.278s2.245.417 3.541.417c1.296 0 1.667-.442 1.667-1.042 0-1.458-2.478-1.685-3.73-1.875-1.23-.685-1.869-1.226-3.906-1.398a2.172 2.172 0 0 1-.064.355l-1.674 5.9C7.856 20.633 11.12 22 12.834 22c2.5 0 9.167-3.334 9.167-4.166-.001-.834-.835-1.25-1.667-1.25Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgMoney1Icon;
