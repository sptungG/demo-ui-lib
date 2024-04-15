import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGift1Icon(props: ISvgProps) {
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
        d="m15.75 2.655 1.934 3.349a.77.77 0 0 1-.282 1.05l-7.23 4.176h8.273a.77.77 0 0 1 .77.77v10.355a.77.77 0 0 1-.77.77H5.555a.77.77 0 0 1-.77-.77v-8.016l-.78.45a.77.77 0 0 1-1.047-.275l-1.976-3.35a.77.77 0 0 1 .279-1.057L3.08 9.06a2.691 2.691 0 0 1-.793-.865 2.686 2.686 0 0 1-.27-2.051 2.686 2.686 0 0 1 1.26-1.642M15.75 2.655 3.34 4.61M15.75 2.655a.77.77 0 0 0-1.05-.283l-1.792 1.032m2.842-.75-2.842.75M3.276 4.502l.063.109m-.063-.109.063.109m-.063-.109a2.7 2.7 0 0 1 2.783.047l.012.009-.006-.005.013.008.054.034.194.12.587.367.587.366.069.042m-4.23-.88a2.575 2.575 0 0 1 2.654.045l1.58.986-.004-.15m0 0 .125.078.002.001-.063-1.904M7.569 5.49l-.061-1.82m0 0 .125-.004m-.125.004a2.7 2.7 0 0 1 1.35-2.433 2.706 2.706 0 0 1 4.05 2.167m-5.4.266.125-.004m0 0 5.275-.262M3.504 6.542c-.081.3-.04.614.116.883.155.27.406.462.707.543.238.064.485.05.711-.035l1.84-1.06L5.25 5.86l-.005-.003-1.74.686Zm0 0c.08-.3.272-.551.542-.707l-.542.707Zm10.08 12.614a.77.77 0 0 1-.839-.167L12 18.244l-.745.745a.77.77 0 0 1-.839.166l.048-.115a.645.645 0 0 1-.398-.595l3.518.71Zm0 0a.77.77 0 0 0 .475-.711v-5.676h3.617v8.816H6.324v-8.134l1.181-.682h2.436l3.643 6.386Zm-2.696-14.59L9.112 5.588l-.066-1.97a1.163 1.163 0 0 1 2.172-.622c.306.53.15 1.223-.33 1.57Zm.592 8.203h1.04v3.819a.77.77 0 0 0-1.04 0v-3.82Zm-7.584.306-1.193-2.022L14.802 4.09l1.164 2.017-12.07 6.968ZM22.355 8.651h-.52v-.52a.77.77 0 1 0-1.538 0v.52h-.52a.77.77 0 0 0 0 1.54h.52v.519a.77.77 0 1 0 1.539 0v-.52h.52a.77.77 0 0 0 0-1.539ZM19.734 6.323a.77.77 0 1 0 0-1.539.77.77 0 0 0 0 1.54Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M17.156 10.19a.77.77 0 1 0 0-1.539.77.77 0 0 0 0 1.54Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
    </svg>
  );
}

export default SvgGift1Icon;
