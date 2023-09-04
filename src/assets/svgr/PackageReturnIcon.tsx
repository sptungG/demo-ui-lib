import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageReturnIcon(props: ISvgProps) {
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
        d="M21.837 17.041a.593.593 0 0 0-.834-.02l-.098.091a4.348 4.348 0 0 0-2.885-3.454V7.171c0-.18-.05-.35-.137-.496l-.001-.002-2.385-4.153A1.054 1.054 0 0 0 14.59 2H6.43c-.374 0-.722.2-.909.521L3.17 6.658c-.107.162-.17.356-.17.564v10.424c0 .798.654 1.448 1.459 1.448h7.99c.12.364.29.714.51 1.043a4.332 4.332 0 0 0 2.766 1.851.59.59 0 0 0 .696-.458.586.586 0 0 0-.46-.69 3.159 3.159 0 0 1-2.018-1.35 3.116 3.116 0 0 1-.464-2.37 3.133 3.133 0 0 1 1.36-2.003 3.177 3.177 0 0 1 2.387-.462 3.171 3.171 0 0 1 2.486 2.485l-.095-.09a.594.594 0 0 0-.834.021.583.583 0 0 0 .02.829l1.077 1.017.012.01a.594.594 0 0 0 .095.07l.024.013a.582.582 0 0 0 .086.037l.019.006a.6.6 0 0 0 .041.01l.012.004h.003l.045.007.013.002.045.002a.593.593 0 0 0 .129-.011.588.588 0 0 0 .307-.153l1.106-1.044a.583.583 0 0 0 .02-.829ZM11.117 3.172h3.395l1.734 3.02h-5.129v-3.02Zm-4.609 0h3.429v3.02H4.79l1.717-3.02Zm10.33 10.254a4.35 4.35 0 0 0-2.652.714 4.298 4.298 0 0 0-1.865 2.746c-.07.345-.098.692-.085 1.036H4.46a.277.277 0 0 1-.278-.276V7.363h12.658v6.063Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPackageReturnIcon;
