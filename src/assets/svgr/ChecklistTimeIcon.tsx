import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgChecklistTimeIcon(props: ISvgProps) {
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
        d="M16.09 11.283a6.15 6.15 0 0 1 2.949.745V5.273c0-.657-.3-1.232-.77-1.62v-.017h-.032a2.107 2.107 0 0 0-1.32-.478h-2.884A1.701 1.701 0 0 0 12.429 2h-2.9c-.737 0-1.377.47-1.604 1.158H5.122A2.117 2.117 0 0 0 3 5.273v14.45c0 1.167.948 2.123 2.122 2.123h6.586a6.164 6.164 0 0 1-1.806-4.374 6.188 6.188 0 0 1 6.188-6.189Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M16.025 7.646h-4.966c-.283 0-.51.251-.51.567 0 .316.227.567.51.567h4.966c.283 0 .51-.251.51-.567 0-.316-.227-.567-.51-.567Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
      <path
        d="M9.544 3.54c-.08 0-.146.064-.146.153v.697c0 .08.065.154.146.154h2.9c.081 0 .146-.065.146-.154v-.697c0-.081-.065-.154-.146-.154h-2.9Z"
        fill="#fff"
      />
      <path
        d="M8.72 7.24a.391.391 0 0 0-.544 0L6.451 8.894l-.656-.631a.391.391 0 0 0-.543 0 .349.349 0 0 0 0 .518l.932.891c.073.073.17.105.275.105a.406.406 0 0 0 .276-.105L8.727 7.76a.37.37 0 0 0-.008-.518ZM8.72 11.996a.391.391 0 0 0-.544 0L6.46 13.64l-.664-.632a.391.391 0 0 0-.543 0 .349.349 0 0 0 0 .519l.932.891c.073.073.17.105.275.105a.406.406 0 0 0 .276-.105l1.992-1.912c.138-.13.138-.364-.008-.51Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
      <path
        d="M16.171 12.798a4.598 4.598 0 0 0-4.6 4.6A4.598 4.598 0 0 0 16.17 22a4.598 4.598 0 0 0 4.601-4.601 4.603 4.603 0 0 0-4.6-4.601Zm2.277 6.278h-2.471c-.438 0-.786-.365-.786-.818V15.52c0-.454.357-.819.786-.819.43 0 .786.365.786.819v1.911h1.685c.437 0 .785.365.785.819 0 .453-.356.826-.785.826Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgChecklistTimeIcon;
