import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgKeyIcon(props: ISvgProps) {
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
      <path d="M16.219 8.719a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#A6AAAE" />
      <path
        d="M21.784 8.48c-.417-1.063-1.182-2.596-2.457-3.865-1.271-1.265-2.788-2.008-3.836-2.409a3.14 3.14 0 0 0-3.332.706L9.091 5.966a3.126 3.126 0 0 0-.652 3.466c.161.362.336.716.523 1.058L2.23 17.224a.781.781 0 0 0-.229.552v3.438c0 .431.35.78.781.78H6.22c.431 0 .781-.349.781-.78v-1.407h1.406c.432 0 .781-.35.781-.781V17.62h1.407a.781.781 0 1 0 0-1.563H8.406a.781.781 0 0 0-.781.782v1.406H6.219a.781.781 0 0 0-.782.781v1.406H3.562V18.1l6.928-6.928a.781.781 0 0 0 .116-.958c-.27-.446-.52-.923-.74-1.417a1.555 1.555 0 0 1 .328-1.724L13.26 4.02a1.576 1.576 0 0 1 1.672-.354c.907.346 2.215.985 3.291 2.056 1.084 1.079 1.743 2.405 2.106 3.328.226.576.089 1.23-.35 1.668l-3.105 3.09a1.573 1.573 0 0 1-1.72.335 10.147 10.147 0 0 1-1.406-.717.781.781 0 1 0-.817 1.332c.514.315 1.06.594 1.623.828 1.178.49 2.52.227 3.422-.67l3.105-3.09a3.113 3.113 0 0 0 .702-3.347Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgKeyIcon;
