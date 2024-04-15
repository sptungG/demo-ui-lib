import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMergeIcon(props: ISvgProps) {
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
        d="M8.555 19.594H5.109a.704.704 0 0 1-.703-.703v-3.34a.703.703 0 1 0-1.406 0v3.34C3 20.054 3.946 21 5.11 21h3.445a.703.703 0 1 0 0-1.406ZM8.171 8.372a.703.703 0 0 0-.99.998l1.973 1.962h-5.45a.703.703 0 1 0 0 1.406H9.1l-1.922 1.93a.703.703 0 0 0 .996.992l2.154-2.162c.398-.398.617-.928.617-1.491 0-.563-.22-1.093-.619-1.493L8.171 8.372ZM3.703 9.188a.703.703 0 0 0 .703-.704V5.11c0-.387.316-.703.703-.703h3.446a.703.703 0 1 0 0-1.406H5.109C3.946 3 3 3.946 3 5.11v3.374c0 .389.315.704.703.704ZM20.297 11.332h-5.451L16.82 9.37a.703.703 0 0 0-.991-.998l-2.157 2.143a2.096 2.096 0 0 0-.617 1.492c0 .563.22 1.093.617 1.49l2.154 2.163a.7.7 0 0 0 .994.002.703.703 0 0 0 .002-.994l-1.922-1.93h5.397a.703.703 0 0 0 0-1.406ZM18.89 3h-3.445a.703.703 0 0 0 0 1.406h3.446c.387 0 .703.316.703.703v3.375a.703.703 0 1 0 1.406 0V5.11C21 3.946 20.054 3 18.89 3ZM20.297 14.848a.703.703 0 0 0-.703.703v3.34a.704.704 0 0 1-.703.703h-3.446a.703.703 0 1 0 0 1.406h3.446C20.054 21 21 20.054 21 18.89v-3.34a.703.703 0 0 0-.703-.702Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMergeIcon;
