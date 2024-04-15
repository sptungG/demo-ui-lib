import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBookMoneyIcon(props: ISvgProps) {
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
        d="M10 12.217c0 1.074.896 1.945 2 1.945a.66.66 0 0 1 .667.648.66.66 0 0 1-.667.649.673.673 0 0 1-.579-.326.678.678 0 0 0-.91-.237.64.64 0 0 0-.243.885c.24.405.624.706 1.065.86v.71c0 .358.3.649.667.649a.66.66 0 0 0 .667-.648v-.707c.776-.267 1.333-.988 1.333-1.835 0-1.073-.896-1.944-2-1.944a.66.66 0 0 1-.667-.649c0-.357.3-.648.667-.648.236 0 .459.123.579.326a.678.678 0 0 0 .91.237.64.64 0 0 0 .243-.885 2.007 2.007 0 0 0-1.065-.861v-.738A.66.66 0 0 0 12 9a.66.66 0 0 0-.667.648v.734c-.776.268-1.333.988-1.333 1.835Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M19.788 5.69V2.91a.91.91 0 0 0-.91-.91H6.732C5.226 2 3.5 3.223 3.5 4.727v14.546C3.5 20.777 5.226 22 6.733 22h12.752c.503 0 1.015-.407 1.015-.91V6.546c0-.395-.358-.73-.712-.856ZM6.733 4h11.233v1.5H6.733c-.503 0-.911-.271-.911-.773 0-.501.408-.727.91-.727ZM18.5 20H6.733a.911.911 0 0 1-.911-.91V7.345c.285.1.591.156.91.156H18.5V20Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgBookMoneyIcon;
