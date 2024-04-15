import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgInvisionIcon(props: ISvgProps) {
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
        d="M19.361 3.008H4.638c-.901 0-1.63.729-1.63 1.63v14.724c0 .9.729 1.631 1.63 1.631h14.724c.9 0 1.631-.73 1.631-1.631V4.638a1.63 1.63 0 0 0-1.632-1.63ZM9.018 6.505c.597 0 1.098.472 1.098 1.078 0 .616-.501 1.08-1.098 1.08v.022c-.604 0-1.09-.486-1.09-1.088 0-.605.486-1.092 1.09-1.092Zm7.354 10.352c-1.112 0-1.651-.662-1.651-1.566 0-.26.033-.533.114-.812l.528-1.906c.068-.208.086-.405.086-.581 0-.615-.375-.984-.971-.984-.761 0-1.26.543-1.52 1.598l-1.033 4.146h-1.811l.327-1.303c-.534.873-1.271 1.412-2.183 1.412-1.102 0-1.617-.632-1.617-1.584a4.02 4.02 0 0 1 .096-.811l.826-3.366H6.285l.388-1.43h3.075l-1.216 4.804c-.08.309-.11.559-.11.738 0 .307.148.396.385.452.146.03 1.295.011 1.918-1.376l.798-3.188h-1.294l.391-1.404h2.787l-.359 1.617c.484-.899 1.452-1.762 2.406-1.762 1.012 0 1.855.728 1.855 2.111 0 .4-.063.796-.18 1.18l-.52 1.858a2.286 2.286 0 0 0-.075.492c0 .326.136.484.368.484.238 0 .553-.181.899-1.172l.708.272c-.414 1.473-1.182 2.081-2.137 2.081Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgInvisionIcon;
