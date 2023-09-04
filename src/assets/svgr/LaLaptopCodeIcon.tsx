import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLaLaptopCodeIcon(props: ISvgProps) {
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
        d="M3.443 3v11.044l-1.858 1.884A1.99 1.99 0 0 0 1 17.326a1.969 1.969 0 0 0 1.96 1.96h18.88a1.969 1.969 0 0 0 1.96-1.96 1.995 1.995 0 0 0-.585-1.4l-1.858-1.883V3H3.443ZM5.07 4.629H19.73v8.957H5.07V4.629Zm-.458 10.585h15.573l1.884 1.858a.378.378 0 0 1 .081.384.313.313 0 0 1-.31.201H2.959a.315.315 0 0 1-.33-.33c0-.09.038-.191.101-.255l1.884-1.858h-.001Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4 6.135c.472 0 .855.306.855.684v5.472c0 .378-.383.684-.855.684s-.855-.306-.855-.684V6.819c0-.378.383-.684.855-.684ZM15.82 6.135c.472 0 .855.306.855.684v5.472c0 .378-.383.684-.855.684s-.855-.306-.855-.684V6.819c0-.378.383-.684.855-.684ZM8.98 6.135c.472 0 .855.306.855.684v5.472c0 .378-.383.684-.855.684s-.855-.306-.855-.684V6.819c0-.378.383-.684.855-.684Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgLaLaptopCodeIcon;
