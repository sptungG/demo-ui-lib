import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos3Icon(props: ISvgProps) {
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
        d="M18.315 2H5.537C4.691 2 4 2.694 4 3.544v16.912C4 21.306 4.691 22 5.537 22h12.778c.846 0 1.537-.694 1.537-1.544V3.544c0-.85-.69-1.544-1.537-1.544Zm.691 18.456c0 .383-.31.694-.691.694H5.537a.694.694 0 0 1-.69-.694V3.544c0-.383.31-.694.69-.694h12.778c.38 0 .691.311.691.694v16.912Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M17.271 4.394H6.581a.416.416 0 0 0-.423.425v3.314c0 .24.183.425.423.425h10.69c.24 0 .423-.184.423-.425V4.82a.425.425 0 0 0-.423-.425Zm-.437 3.314h-9.83V5.244h9.83v2.464ZM8.4 11.292H6.99a.416.416 0 0 0-.423.425c0 .24.183.425.423.425H8.4c.24 0 .423-.184.423-.425a.425.425 0 0 0-.423-.425ZM8.4 14.663H6.99a.416.416 0 0 0-.423.425c0 .24.183.425.423.425H8.4c.24 0 .423-.184.423-.425a.416.416 0 0 0-.423-.425ZM8.4 18.02H6.99a.417.417 0 0 0-.423.425c0 .24.183.425.423.425H8.4c.24 0 .423-.184.423-.425a.417.417 0 0 0-.423-.425ZM12.631 11.292h-1.41a.416.416 0 0 0-.423.425c0 .24.183.425.423.425h1.41c.24 0 .423-.184.423-.425a.435.435 0 0 0-.423-.425ZM12.631 14.663h-1.41a.416.416 0 0 0-.423.425c0 .24.183.425.423.425h1.41c.24 0 .423-.184.423-.425a.425.425 0 0 0-.423-.425ZM12.631 18.02h-1.41a.416.416 0 0 0-.423.425c0 .24.183.425.423.425h1.41c.24 0 .423-.184.423-.425a.425.425 0 0 0-.423-.425ZM16.862 11.292h-1.41a.416.416 0 0 0-.423.425c0 .24.183.425.423.425h1.41c.24 0 .424-.184.424-.425a.435.435 0 0 0-.424-.425ZM16.862 14.663h-1.41a.416.416 0 0 0-.423.425c0 .24.183.425.423.425h1.41c.24 0 .424-.184.424-.425a.425.425 0 0 0-.424-.425ZM16.862 18.02h-1.41a.417.417 0 0 0-.423.425c0 .24.183.425.423.425h1.41c.24 0 .424-.184.424-.425a.425.425 0 0 0-.424-.425Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos3Icon;
