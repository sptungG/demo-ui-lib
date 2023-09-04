import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFnbAppleIcon(props: ISvgProps) {
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
        d="M16.272 7.709a4.503 4.503 0 0 0-2.059.164 6.38 6.38 0 0 1-3.814 0 4.503 4.503 0 0 0-2.058-.164c-3.026.473-5.09 4.103-4.083 7.981 1.072 4.123 3.853 6.73 6.884 6.256h.01a7.172 7.172 0 0 1 2.308 0h.01c3.031.479 5.813-2.133 6.885-6.256 1.006-3.878-1.052-7.508-4.083-7.981Zm-7.941 3.33c-.888.768-1.237 2.133-.888 3.48.16.613.39 1.166.678 1.65a.624.624 0 0 1-1.067.648 7.375 7.375 0 0 1-.817-1.985c-.469-1.804.035-3.664 1.281-4.735a.623.623 0 0 1 .813.942ZM12.932 6.617a.267.267 0 0 0 .22-.194c.134-.479.388-1.934-1.043-3.36C10.908 1.86 9.323 1.966 8.78 2.04a.265.265 0 0 0-.22.23c-.079.543-.179 2.128 1.023 3.33 1.216 1.22 2.836 1.096 3.35 1.016Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFnbAppleIcon;
