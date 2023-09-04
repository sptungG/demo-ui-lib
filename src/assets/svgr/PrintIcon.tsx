import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPrintIcon(props: ISvgProps) {
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
        d="M16.163 2H7.837a2.496 2.496 0 0 0-2.5 2.5v3.337c0 .458.368.837.837.837a.829.829 0 0 0 .837-.837V4.5c0-.458.368-.837.837-.837h8.415c.413 0 .748.335.748.748v3.415a.836.836 0 1 0 1.674 0V4.5A2.53 2.53 0 0 0 16.163 2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.163 22H7.837a2.496 2.496 0 0 1-2.5-2.5v-5.837c0-.458.368-.837.837-.837h11.663c.457 0 .837.368.837.837V19.5a2.52 2.52 0 0 1-2.511 2.5Zm-1.45-5H9.287a.624.624 0 1 1 0-1.25h5.413c.346 0 .625.279.625.625a.608.608 0 0 1-.614.625Zm-5.425 2.5h5.424a.608.608 0 0 0 .614-.625.624.624 0 0 0-.625-.625H9.288a.624.624 0 1 0 0 1.25Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.288 7h15.424A2.291 2.291 0 0 1 22 9.288v5.424c0 1.207-.94 2.199-2.125 2.282v-4.006a.986.986 0 0 0-.988-.988H5.124a.986.986 0 0 0-.987.988v3.996A2.283 2.283 0 0 1 2 14.7V9.288A2.291 2.291 0 0 1 4.288 7Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPrintIcon;
