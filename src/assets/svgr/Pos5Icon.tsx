import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos5Icon(props: ISvgProps) {
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
        d="M17.826 5.478H16.04v-.924c0-.964.771-1.739 1.732-1.739a.4.4 0 0 0 .406-.407.4.4 0 0 0-.406-.408h-7.711a2.546 2.546 0 0 0-2.544 2.554v.924h-2.3C4.542 5.478 4 6.022 4 6.701V9.61a1.23 1.23 0 0 0 1.15 1.223v10.76a.4.4 0 0 0 .406.408h11.932a.4.4 0 0 0 .406-.408v-10.76a1.23 1.23 0 0 0 1.15-1.223V6.7c0-.68-.541-1.223-1.218-1.223ZM8.33 4.554c0-.964.771-1.739 1.732-1.739h5.844a2.584 2.584 0 0 0-.676 1.74v3.043h-6.9V4.554Zm8.753 16.63H5.962V10.832h11.12v10.354Zm1.15-11.575a.4.4 0 0 1-.406.407H5.218a.408.408 0 0 1-.406-.407V6.7a.4.4 0 0 1 .406-.408h2.3v1.291h-.731a.4.4 0 0 0-.406.408.4.4 0 0 0 .406.407h9.97a.4.4 0 0 0 .406-.407.4.4 0 0 0-.406-.408h-.73v-1.29h1.786c.23 0 .405.19.405.407V9.61h.014Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M9.006 18.916H7.95a.4.4 0 0 0-.405.407.4.4 0 0 0 .405.408h1.056a.4.4 0 0 0 .405-.408.408.408 0 0 0-.405-.407ZM12.05 18.916h-1.056a.4.4 0 0 0-.405.407.4.4 0 0 0 .405.408h1.056a.4.4 0 0 0 .405-.408.408.408 0 0 0-.405-.407ZM15.093 18.916h-1.055a.4.4 0 0 0-.406.407.4.4 0 0 0 .406.408h1.055a.4.4 0 0 0 .406-.408.408.408 0 0 0-.406-.407ZM9.006 15.6H7.95a.4.4 0 0 0-.405.408.4.4 0 0 0 .405.408h1.056a.4.4 0 0 0 .405-.408.417.417 0 0 0-.405-.407ZM12.05 15.6h-1.056a.4.4 0 0 0-.405.408.4.4 0 0 0 .405.408h1.056a.4.4 0 0 0 .405-.408.417.417 0 0 0-.405-.407ZM15.093 15.6h-1.055a.4.4 0 0 0-.406.408.4.4 0 0 0 .406.408h1.055a.4.4 0 0 0 .406-.408.417.417 0 0 0-.406-.407ZM9.006 12.299H7.95a.4.4 0 0 0-.405.408.4.4 0 0 0 .405.407h1.056a.4.4 0 0 0 .405-.408.417.417 0 0 0-.405-.407ZM12.05 12.299h-1.056a.4.4 0 0 0-.405.408.4.4 0 0 0 .405.407h1.056a.4.4 0 0 0 .405-.408.417.417 0 0 0-.405-.407ZM15.093 12.299h-1.055a.4.4 0 0 0-.406.408.4.4 0 0 0 .406.407h1.055a.4.4 0 0 0 .406-.408.417.417 0 0 0-.406-.407ZM9.966 4.717h3.545a.4.4 0 0 0 .405-.407.4.4 0 0 0-.405-.408H9.966a.4.4 0 0 0-.406.408c0 .23.19.407.406.407ZM9.966 6.606h3.545a.4.4 0 0 0 .405-.408.4.4 0 0 0-.405-.407H9.966a.4.4 0 0 0-.406.407c0 .231.19.408.406.408Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos5Icon;
