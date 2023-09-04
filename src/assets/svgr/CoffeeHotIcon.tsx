import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCoffeeHotIcon(props: ISvgProps) {
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
        d="M11.542 10.441c-.853 0-1.417.671-1.417 1.53 0 .857.575 1.528 1.417 1.528.841 0 1.417-.671 1.417-1.529 0-.863-.565-1.529-1.417-1.529Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M21.643 6.36c-.133-.085-3.277-2.008-3.74-2.264a.573.573 0 0 0-.586-.01c-.037 0-3.431 2.152-3.958 2.429-.416.229-.885.34-1.364.33-.421.005-.837-.08-1.215-.256-.543-.202-4.092-2.514-4.092-2.514A.625.625 0 0 0 6.401 4a.607.607 0 0 0-.304.085c-.405.224-2.94 1.769-3.697 2.243l-.059.032a.744.744 0 0 0-.336.592C2 6.983 2 7.01 2 7.042v6.814c0 .01.005.021.005.027 0 .01.006.026.006.037a.706.706 0 0 0 .4.527c.298.15 8.13 5.062 9.19 5.675a.794.794 0 0 0 .362.106h.042a.82.82 0 0 0 .405-.107c.144-.085.421-.25.783-.474 1.673-1.012 5.237-3.244 7.145-4.432.708-.437 1.188-.736 1.257-.768a.706.706 0 0 0 .405-.57V6.99a.73.73 0 0 0-.357-.629ZM8.739 14.352H5.671l-.006-6.5h1.13v5.429h1.944v1.07Zm5.195.01h-1.055v-.639a1.906 1.906 0 0 1-1.529.735c-1.31 0-2.307-1.119-2.307-2.488s.996-2.488 2.307-2.488a1.92 1.92 0 0 1 1.53.735v-.639h1.054v4.784Zm4.742 0h-3.922v-.83l2.51-2.995h-2.472v-.954h3.83v.842l-2.498 2.984h2.557v.953h-.006Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCoffeeHotIcon;
