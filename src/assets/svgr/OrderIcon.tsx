import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgOrderIcon(props: ISvgProps) {
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
        d="m20.79 19.306-.938-11.817a1.627 1.627 0 0 0-1.615-1.496h-1.703a4.214 4.214 0 0 0-4.209-4.143 4.214 4.214 0 0 0-4.208 4.143H6.414c-.842 0-1.551.656-1.616 1.494l-.938 11.82a3.58 3.58 0 0 0 .94 2.7 3.58 3.58 0 0 0 2.62 1.143h9.811a3.58 3.58 0 0 0 2.62-1.144l-.11-.102.11.102a3.58 3.58 0 0 0 .94-2.7ZM6.414 7.523h1.702v1.365a.765.765 0 0 0 1.53 0V7.523h5.359v1.365a.765.765 0 1 0 1.53 0V7.523h1.702c.046 0 .086.036.09.084l.938 11.818a2.016 2.016 0 0 1-.537 1.541c-.391.422-.922.654-1.497.654H7.42a2.017 2.017 0 0 1-1.496-.654 2.016 2.016 0 0 1-.537-1.54l.938-11.82a.091.091 0 0 1 .09-.083Zm3.233-1.53a2.683 2.683 0 0 1 2.678-2.613 2.683 2.683 0 0 1 2.679 2.613H9.647Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.3}
      />
      <path
        d="M15.167 12.359a.715.715 0 0 0-1.011 0l-2.676 2.675-.985-.985a.715.715 0 0 0-1.011 1.011l1.49 1.491a.713.713 0 0 0 1.012 0l3.18-3.18a.715.715 0 0 0 0-1.012Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.2}
      />
    </svg>
  );
}

export default SvgOrderIcon;
