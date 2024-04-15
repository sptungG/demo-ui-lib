import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgHeartOutlineIcon(props: ISvgProps) {
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
        d="M12 5a5.606 5.606 0 0 0-1.172-1.018A6.117 6.117 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 1.074.256 2.093.694 3.063 1.359 3.01 4.472 5.551 7.151 7.738.772.63 1.508 1.23 2.155 1.804.647-.574 1.383-1.174 2.155-1.804 2.68-2.187 5.792-4.727 7.151-7.738.438-.97.694-1.99.694-3.063C22 5.374 19.58 3 16.5 3a6.117 6.117 0 0 0-3.328.982A5.606 5.606 0 0 0 12 5Zm0 13.37c.323-.268.653-.537.982-.807.28-.228.558-.456.832-.682 1.095-.904 2.167-1.823 3.117-2.786 1.175-1.192 2.048-2.339 2.557-3.47.335-.748.512-1.489.512-2.23C20 6.515 18.512 5 16.5 5c-1.188 0-2.297.514-2.99 1.311L12 8.051l-1.51-1.74C9.797 5.514 8.688 5 7.5 5 5.488 5 4 6.515 4 8.395c0 .741.177 1.482.512 2.23.509 1.131 1.382 2.278 2.557 3.47.95.963 2.022 1.882 3.117 2.786.274.226.553.454.832.682.33.27.66.54.982.807Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgHeartOutlineIcon;
