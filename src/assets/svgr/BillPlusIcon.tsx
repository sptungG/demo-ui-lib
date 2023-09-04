import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBillPlusIcon(props: ISvgProps) {
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
        d="M18.3 3.7c-.4-.3-.8-.5-1.4-.5H14c-.2-.7-.9-1.2-1.6-1.2H9.5c-.7 0-1.4.5-1.6 1.2H5.1C3.9 3.2 3 4.1 3 5.3v14.5c0 1.2.9 2.1 2.1 2.1h6.6c-1.1-1.1-1.8-2.7-1.8-4.4 0-3.4 2.8-6.2 6.2-6.2 1.1 0 2.1.3 2.9.7V5.2c0-.6-.3-1.2-.7-1.5ZM8.2 12.8l-.6.3v.5c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7v-.4c-.2 0-.4-.1-.6-.2-.1-.1-.6-.3-.6-.8 0-.2.1-.3.2-.5.2-.2.3-.2.5-.2s.2 0 .4.1c.1.1.2.1.2.2.1 0 .1.1.2.1.2.1.6.1.8 0 .1-.1.1-.1.1-.2s0-.1-.1-.2l-.2-.2c-.1-.1-.2-.1-.3-.2h-.1c-.1 0-.2-.1-.3-.1l-.2-.1c-.2-.1-.3-.2-.5-.3-.2-.1-.3-.3-.4-.5-.1-.2-.1-.4-.1-.7 0-.3.1-.5.2-.7.1-.2.3-.4.5-.5.2-.1.3-.1.4-.2v-.5c0-.4.3-.7.7-.7.4 0 .7.3.7.7V8c.1 0 .2 0 .3.1.2 0 .3.1.5.2s.2.3.2.5c0 .1 0 .3-.1.4-.1.2-.3.3-.5.3-.1 0-.1 0-.4-.1-.3-.1-.8-.1-1 0-.1 0-.1.1-.1.1s0 .1.1.1c.1.1.2.1.3.2.2.1.4.1.6.2l.6.3c.2.1.4.3.5.5.1.2.2.5.2.8-.1.5-.3.9-.7 1.2Zm1.3-8.3c-.1 0-.1-.1-.1-.2v-.7c0-.1.1-.2.1-.2h2.9c.1 0 .1.1.1.2v.7c0 .1-.1.2-.1.2H9.5ZM16 9h-5c-.4 0-.8-.4-.8-.8s.3-.8.8-.8h5c.4 0 .8.4.8.8s-.4.8-.8.8Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M15.6 12.8c-2.5 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.6 4.6 4.6 2.5 0 4.6-2.1 4.6-4.6 0-2.5-2.1-4.6-4.6-4.6Zm2.5 5.2h-1.9v1.9c0 .3-.3.6-.6.6s-.6-.3-.6-.6V18h-1.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6H15v-1.9c0-.3.3-.6.6-.6s.6.3.6.6v1.9h1.9c.3 0 .6.3.6.6s-.3.6-.6.6Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgBillPlusIcon;
