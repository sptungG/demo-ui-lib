import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos6Icon(props: ISvgProps) {
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
        d="M17.703 15.42h-4.005a.406.406 0 0 0-.413.416v4.022c0 .235.179.414.413.414h4.005c.233 0 .412-.18.412-.414v-4.022a.424.424 0 0 0-.412-.415Zm-.413 4.023h-3.18V16.25h3.18v3.193ZM11.138 15.42H7.133a.406.406 0 0 0-.413.416v4.022c0 .235.18.414.413.414h4.005c.234 0 .413-.18.413-.414v-4.022a.424.424 0 0 0-.413-.415Zm-.413 4.023H7.546V16.25h3.179v3.193ZM17.703 9.574h-4.005a.406.406 0 0 0-.413.415v4.022c0 .235.179.415.413.415h4.005c.233 0 .412-.18.412-.415V9.99a.424.424 0 0 0-.412-.415Zm-.413 4.022h-3.18v-3.192h3.18v3.192ZM11.138 9.574H7.133a.406.406 0 0 0-.413.415v4.022c0 .235.18.415.413.415h4.005c.234 0 .413-.18.413-.415V9.99a.424.424 0 0 0-.413-.415Zm-.413 4.022H7.546v-3.192h3.179v3.192ZM17.703 3.728H7.133a.406.406 0 0 0-.413.414v3.705c0 .235.18.414.413.414h10.57c.233 0 .412-.18.412-.414v-3.69a.427.427 0 0 0-.412-.43Zm-.413 3.718H7.546V4.57h9.744v2.875Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M14.909 12.325h.468v.47a.32.32 0 0 0 .316.318.312.312 0 0 0 .317-.318v-.47h.468a.32.32 0 0 0 .316-.318.32.32 0 0 0-.316-.318h-.468v-.47a.32.32 0 0 0-.317-.318.312.312 0 0 0-.316.318v.47h-.468a.32.32 0 0 0-.317.318c.014.166.152.318.317.318ZM8.358 18.628a.306.306 0 0 0 .44 0l.33-.332.33.332a.306.306 0 0 0 .441 0 .31.31 0 0 0 0-.443l-.33-.331.33-.332a.31.31 0 0 0 0-.442.306.306 0 0 0-.44 0l-.33.331-.33-.332a.306.306 0 0 0-.441 0 .31.31 0 0 0 0 .443l.33.332-.33.331a.31.31 0 0 0 0 .443ZM8.358 12.325h1.569a.32.32 0 0 0 .316-.318.32.32 0 0 0-.316-.318H8.358a.32.32 0 0 0-.317.318.32.32 0 0 0 .317.318ZM14.909 18.793h1.569a.32.32 0 0 0 .316-.317.312.312 0 0 0-.316-.318h-1.57a.32.32 0 0 0-.316.317c0 .18.152.318.317.318ZM14.909 17.536h1.569a.32.32 0 0 0 .316-.318.32.32 0 0 0-.316-.318h-1.57a.32.32 0 0 0-.316.318c.014.18.152.318.317.318Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos6Icon;
