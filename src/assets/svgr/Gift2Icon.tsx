import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGift2Icon(props: ISvgProps) {
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
        d="M19.338 10.76h-.125v9.805H4.787V10.76H3.098v10.617c0 .454.383.813.844.813h16.115c.461 0 .845-.359.845-.813V10.76h-1.564Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M20.436 10.072H3.564v-2.75h16.872v2.75Zm.845-4.375H2.719c-.46 0-.844.358-.844.812v4.376c0 .454.383.812.844.812h18.562c.46 0 .844-.358.844-.812V6.509c0-.454-.384-.812-.844-.812Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M8.284 1.94h-.001c-1.495 0-2.715 1.194-2.715 2.668A2.717 2.717 0 0 0 8.283 7.32h.125V5.697h-.125c-.549 0-1.026-.494-1.026-1.09 0-.577.462-1.042 1.02-1.043 1.013.009 1.735.755 2.213 1.541a6.718 6.718 0 0 1 .68 1.54l.01.037.03.119.12-.028 1.397-.33.124-.03-.032-.123a8.081 8.081 0 0 0-1.009-2.22c-.699-1.056-1.824-2.116-3.526-2.13Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M15.71 1.94c-1.699.014-2.823 1.074-3.521 2.13a8.103 8.103 0 0 0-1.009 2.22l-.032.124.125.03 1.396.329.12.028.03-.118.01-.038a5.301 5.301 0 0 1 .16-.462c.116-.296.29-.688.528-1.078.481-.787 1.202-1.532 2.2-1.54.564 0 1.026.466 1.026 1.043 0 .595-.477 1.089-1.026 1.089h-.125V7.32h.125a2.717 2.717 0 0 0 2.715-2.713c0-1.474-1.22-2.668-2.721-2.668Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M14.283 6.51v-.126h-1.689v15.119h1.689V6.509ZM11.405 6.51v-.126H9.717v15.119h1.688V6.509Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
    </svg>
  );
}

export default SvgGift2Icon;
