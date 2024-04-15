import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgPackReturnDisableIcon(props: ISvgProps) {
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
        d="m8.796 1.02-4.631.018c-.6 0-1.162.334-1.448.858L.297 6.279l8.032-.018.466-5.241ZM18.764 6.24l-2.449-4.382A1.674 1.674 0 0 0 14.857 1l-4.63.019.486 5.24 8.05-.018ZM8.807 16.136c.002-.558.232-1.1.631-1.49l4.398-4.244c.39-.376.904-.584 1.448-.584a2.082 2.082 0 0 1 2.082 2.09l-.002.677c.58.12 1.144.298 1.685.529l.009-2.4.01.004-.005-1.464.006-1.546h-.012v-.047l-8.814.029H8.826L.012 7.662v.047H0l.005 1.545L0 10.719l.01-.004.028 7.885c0 .83.678 1.505 1.497 1.505h.01l7.989-.021 2.419.006-2.518-2.457a2.1 2.1 0 0 1-.628-1.497Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m16.012 14.14.007-2.425a.43.43 0 0 0-.727-.31l-4.876 4.693a.427.427 0 0 0 0 .614l4.848 4.718a.427.427 0 0 0 .729-.305L16 18.703l.812.002a7.301 7.301 0 0 1 6.37 3.765l.012.022a.429.429 0 0 0 .805-.203c.012-4.434-3.557-8.06-7.987-8.148Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgPackReturnDisableIcon;
