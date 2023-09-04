import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgAdobeXdIcon(props: ISvgProps) {
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
        d="M10.427 7.448a145.43 145.43 0 0 0-1.363 2.959c-.448-.988-.92-1.99-1.383-2.966a.344.344 0 0 0-.136-.163.374.374 0 0 0-.196-.045H5.916a.273.273 0 0 0-.234.13.268.268 0 0 0 .011.288l2.157 4.313-2.229 4.263a.28.28 0 0 0-.042.244c.042.134.167.18.262.18h1.375a.354.354 0 0 0 .32-.187l.006-.01.004-.009c.475-.982.962-2.024 1.416-3.031.353.745.7 1.46 1.043 2.166l.414.857.001.002c.028.056.07.122.143.167.073.045.15.053.211.053h1.45c.11 0 .212-.062.253-.172a.304.304 0 0 0-.028-.26l-2.283-4.403 2.158-4.185a.286.286 0 0 0 .024-.263.265.265 0 0 0-.248-.152h-1.342a.328.328 0 0 0-.221.078.498.498 0 0 0-.095.119l-.004.006-.006.01-.005.01Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.541 7.233c-.14 0-.283.11-.283.283V9.52c-.071-.003-.142-.003-.232-.003h-.002c-1.077 0-1.967.402-2.586 1.07-.617.665-.955 1.583-.955 2.602 0 1.175.334 2.08.928 2.69.595.61 1.427.902 2.372.898.729 0 1.492-.157 2.22-.505l.003-.002a.339.339 0 0 0 .121-.093.284.284 0 0 0 .056-.177v-.014l-.002-.013a5.784 5.784 0 0 1-.04-.793v-7.68a.261.261 0 0 0-.081-.196.292.292 0 0 0-.202-.07H16.54Zm-1.7 4.433c.275-.324.664-.503 1.134-.503.11 0 .206.011.283.029v3.85a1.707 1.707 0 0 1-.375.037c-.426 0-.79-.138-1.049-.434-.263-.299-.443-.785-.443-1.524 0-.639.174-1.128.45-1.455Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgAdobeXdIcon;
