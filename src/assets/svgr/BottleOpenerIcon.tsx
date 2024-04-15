import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBottleOpenerIcon(props: ISvgProps) {
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
        d="M13.417 2c-1.399 0-2.792.827-3.359 2.414l-.007.022-3.01 9.108-4.248 4.249A2.645 2.645 0 0 0 2 19.667a2.672 2.672 0 0 0 2.667 2.666c.687 0 1.422-.226 1.916-.835l4.206-4.206 9.1-3.006c1.528-.476 2.445-1.885 2.445-3.37 0-.949-.369-1.782-1.043-2.456l-5.417-5.417C15.186 2.355 14.264 2 13.417 2Zm-4.55 12.397 3.078-9.32c.269-.74.873-1.077 1.472-1.077.318 0 .73.145 1.043.457l5.416 5.417c.325.325.457.659.457 1.043 0 .678-.412 1.266-1.044 1.46l-.02.007-9.333 3.083a1 1 0 0 0-.393.243l-4.417 4.416a1.01 1.01 0 0 0-.093.107c-.006.01-.078.1-.366.1A.672.672 0 0 1 4 19.667c0-.143.055-.308.207-.46l4.417-4.417a1 1 0 0 0 .242-.393Zm5.59-8.02a1 1 0 0 0-1.656.39l-1.166 3.5a1 1 0 0 0 .241 1.023l1.167 1.167a1 1 0 0 0 1.023.242l3.5-1.167a1 1 0 0 0 .391-1.656l-3.5-3.5Zm-.73 3.936.46-1.378 1.212 1.211-1.379.46-.292-.293Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgBottleOpenerIcon;
