import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos12Icon(props: ISvgProps) {
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
        d="M18.583 2H6.24C5.55 2 5 2.553 5 3.244v17.512C5 21.447 5.55 22 6.239 22h12.344c.689 0 1.239-.553 1.239-1.244V3.258c0-.691-.55-1.258-1.239-1.258Zm.413 18.756a.406.406 0 0 1-.413.415H6.24a.415.415 0 0 1-.413-.415V3.258c0-.235.179-.415.413-.415h12.344c.234 0 .413.194.413.415v17.498Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M17.703 3.728H7.133a.406.406 0 0 0-.413.414v4.133c0 .235.18.415.413.415h10.57c.234 0 .413-.18.413-.415V4.156a.427.427 0 0 0-.413-.428ZM17.29 7.86H7.546V4.57h9.744v3.29ZM9.197 10.639a.406.406 0 0 0-.412.414v1.037h-.867a.406.406 0 0 0-.413.415c0 .234.179.414.413.414h.867v1.037c0 .235.178.414.412.414.234 0 .413-.18.413-.414v-1.037h.867c.234 0 .413-.18.413-.415a.406.406 0 0 0-.413-.414H9.61v-1.037a.415.415 0 0 0-.413-.415ZM17.07 18.31h-2.877a.406.406 0 0 0-.413.414c0 .235.18.415.413.415h2.876c.234 0 .413-.18.413-.415a.415.415 0 0 0-.413-.414ZM17.07 16.347h-2.877a.406.406 0 0 0-.413.415c0 .235.18.414.413.414h2.876c.234 0 .413-.18.413-.414a.406.406 0 0 0-.413-.415ZM13.822 13.997a.414.414 0 0 0 .591 0l.909-.912.908.912a.414.414 0 0 0 .592 0 .419.419 0 0 0 0-.594l-.909-.912.909-.912a.419.419 0 0 0 0-.595.414.414 0 0 0-.592 0l-.908.912-.909-.912a.414.414 0 0 0-.591 0 .418.418 0 0 0 0 .595l.908.912-.909.912c-.15.18-.15.442 0 .594ZM9.72 18.683h-.426a.406.406 0 0 0-.413.414c0 .235.179.415.413.415h.426c.234 0 .413-.18.413-.415a.406.406 0 0 0-.413-.414ZM11.262 17.328h-3.51a.406.406 0 0 0-.412.415c0 .235.179.415.412.415h3.51c.234 0 .413-.18.413-.415a.415.415 0 0 0-.413-.415ZM9.294 15.974a.406.406 0 0 0-.413.414c0 .235.179.415.413.415h.426c.234 0 .413-.18.413-.415a.406.406 0 0 0-.413-.414h-.426Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos12Icon;
