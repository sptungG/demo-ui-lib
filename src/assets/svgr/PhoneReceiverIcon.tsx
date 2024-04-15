import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgPhoneReceiverIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <g clipPath="url(#phone-receiver-icon_svg__a)">
        <path
          d="M17.232 13.92c-1.208-1.033-2.434-1.66-3.627-.627l-.713.623c-.521.453-1.49 2.568-5.239-1.744-3.747-4.305-1.517-4.976-.995-5.425l.717-.624c1.187-1.034.739-2.336-.117-3.676l-.517-.812C5.881.298 4.944-.58 3.754.453l-.643.562C2.585 1.398 1.115 2.644.758 5.01c-.43 2.84.925 6.09 4.027 9.659 3.099 3.569 6.133 5.361 9.006 5.33 2.389-.025 3.83-1.307 4.282-1.773l.645-.563c1.188-1.032.45-2.082-.759-3.118l-.727-.625Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="phone-receiver-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgPhoneReceiverIcon;
