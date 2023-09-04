import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgShopMaintainFillIcon(props: ISvgProps) {
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
        d="M16.965 13.431a5.001 5.001 0 0 0-2.57 6.519H6.47a1.51 1.51 0 0 1-1.51-1.51v-4a.64.64 0 0 1 .62-.65 4.619 4.619 0 0 0 1.47-.28 4.548 4.548 0 0 0 1.37-.78.63.63 0 0 1 .8 0c.335.279.71.508 1.11.68a4.76 4.76 0 0 0 3.63 0 4.623 4.623 0 0 0 1.07-.65.65.65 0 0 1 .84 0c.332.275.7.5 1.095.671Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M21.18 10.35a2.58 2.58 0 0 1-1.28 1.6 2.48 2.48 0 0 1-1 .26 2.539 2.539 0 0 1-1.92-.73 2.64 2.64 0 0 1-.59-.86 1 1 0 0 0-1.91 0 2.57 2.57 0 0 1-4.76 0 1 1 0 0 0-1.9 0 2.65 2.65 0 0 1-1.49 1.13 2.58 2.58 0 0 1-3.15-1.56 2.49 2.49 0 0 1 0-1.86l2-3.47A1.72 1.72 0 0 1 6.66 4h10.82a1.72 1.72 0 0 1 1.48.86l2 3.44a2.631 2.631 0 0 1 .22 2.05Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.65 15.276a2.493 2.493 0 0 0-.336-.168l-.168-.78a.413.413 0 0 0-.403-.328H18.24a.412.412 0 0 0-.403.327l-.168.781c-.109.05-.218.101-.319.16-.109.059-.21.126-.31.201l-.756-.243a.404.404 0 0 0-.479.184l-.747 1.302a.41.41 0 0 0 .076.512l.587.537c-.016.126-.016.244-.016.37 0 .117.008.243.016.37l-.587.537a.41.41 0 0 0-.076.512l.747 1.301c.101.168.294.244.479.185l.756-.244c.1.076.21.143.319.21.1.059.21.11.319.16l.168.78c.041.194.21.328.403.328h1.502a.413.413 0 0 0 .403-.327l.168-.781c.118-.05.227-.11.336-.168.101-.059.202-.126.302-.193l.756.243a.404.404 0 0 0 .479-.184l.747-1.302a.41.41 0 0 0-.076-.512l-.587-.537c.008-.143.008-.26.008-.387 0-.117-.008-.243-.017-.36l.588-.538a.41.41 0 0 0 .075-.512l-.747-1.301a.408.408 0 0 0-.478-.185l-.756.243c-.1-.075-.201-.134-.302-.193Zm-1.663 4.5c.916 0 1.654-.738 1.654-1.654 0-.915-.738-1.654-1.654-1.654-.915 0-1.654.74-1.654 1.654a1.663 1.663 0 0 0 1.654 1.654Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgShopMaintainFillIcon;
