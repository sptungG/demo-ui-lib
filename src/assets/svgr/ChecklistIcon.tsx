import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgChecklistIcon(props: ISvgProps) {
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
        d="M19.3 3.7c-.4-.3-.9-.5-1.4-.5H15c-.2-.7-.9-1.2-1.6-1.2h-2.9c-.7 0-1.4.5-1.6 1.2H6.1C4.9 3.2 4 4.2 4 5.3v14.6C4 21.1 5 22 6.1 22h11.8c1.2 0 2.1-1 2.1-2.1V5.3c.1-.7-.2-1.2-.7-1.6ZM9.8 17.8l-2 1.9c-.1.1-.3.2-.5.2s-.3-.1-.5-.2l-.9-.9c-.1-.1-.2-.3-.2-.4 0-.2.1-.3.2-.5.2-.2.6-.2.9 0l.5.5 1.6-1.5c.2-.2.6-.2.9 0 .1.1.1.3.1.5 0 .1 0 .3-.1.4Zm0-4.9-2 1.9c-.2.2-.3.2-.5.2s-.3-.1-.5-.2l-.9-.8c-.1-.1-.2-.3-.2-.4 0-.2.1-.3.2-.5.2-.2.6-.2.9 0l.5.5 1.6-1.5c.2-.2.6-.2.9 0 .1.1.2.3.2.5-.1.1-.1.2-.2.3Zm0-4.9-2 1.9c-.1.1-.3.2-.5.2s-.3-.1-.5-.2L5.9 9c-.1-.1-.2-.3-.2-.4 0-.2.1-.3.2-.5.2-.2.6-.2.9 0l.5.5 1.6-1.5c.2-.2.6-.2.9 0 .2.2.2.6 0 .9Zm.5-3.6v-.7c0-.1.1-.2.1-.2h2.9c.1 0 .1.1.1.2v.7c0 .1-.1.2-.1.2h-2.9s-.1-.1-.1-.2Zm6.8 14.5h-4.7c-.4 0-.7-.4-.7-.8s.3-.8.7-.8h4.7c.4 0 .7.4.7.8s-.3.8-.7.8Zm0-4.8h-4.7c-.4 0-.7-.4-.7-.8s.3-.8.7-.8h4.7c.4 0 .7.4.7.8s-.3.8-.7.8Zm0-4.2h-4.7c-.4 0-.7-.4-.7-.8 0-.5.3-.8.7-.8h4.7c.4 0 .7.4.7.8s-.3.8-.7.8Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgChecklistIcon;
