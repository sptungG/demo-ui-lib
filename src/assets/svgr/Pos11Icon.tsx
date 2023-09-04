import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos11Icon(props: ISvgProps) {
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
        d="M20.687 3H3.313A1.31 1.31 0 0 0 2 4.319v14.46a1.31 1.31 0 0 0 1.313 1.318h17.374A1.31 1.31 0 0 0 22 18.78V4.319C22.014 3.6 21.416 3 20.687 3Zm.438 15.793c0 .25-.19.44-.438.44H3.313a.44.44 0 0 1-.438-.44V4.333c0-.249.19-.44.438-.44h17.374a.44.44 0 0 1 .438.44v14.46Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M7.952 14.618H4.713a.43.43 0 0 0-.437.44v2.549c0 .249.19.44.437.44h3.239a.43.43 0 0 0 .437-.44v-2.55a.44.44 0 0 0-.437-.439Zm-.438 2.55H5.165v-1.67h2.35v1.67ZM7.952 10.164H4.713a.43.43 0 0 0-.437.44v2.549c0 .249.19.44.437.44h3.239a.43.43 0 0 0 .437-.44v-2.55a.44.44 0 0 0-.437-.439Zm-.438 2.55H5.165v-1.67h2.35v1.67ZM13.626 14.618h-3.238a.43.43 0 0 0-.438.44v2.549c0 .249.19.44.438.44h3.238a.43.43 0 0 0 .438-.44v-2.55a.44.44 0 0 0-.438-.439Zm-.452 2.55h-2.348v-1.67h2.348v1.67ZM13.626 10.164h-3.238a.43.43 0 0 0-.438.44v2.549c0 .249.19.44.438.44h3.238a.43.43 0 0 0 .438-.44v-2.55a.44.44 0 0 0-.438-.439Zm-.452 2.55h-2.348v-1.67h2.348v1.67ZM19.301 10.164h-3.238a.43.43 0 0 0-.438.44v7.003c0 .249.19.44.438.44H19.3a.43.43 0 0 0 .438-.44v-7.003a.44.44 0 0 0-.438-.44Zm-.452 7.003H16.5v-6.124h2.349v6.124ZM19.301 5.066H4.728a.43.43 0 0 0-.438.44v3.178c0 .25.19.44.438.44H19.3a.43.43 0 0 0 .438-.44V5.505a.45.45 0 0 0-.438-.44Zm-.452 3.194H5.15v-2.3h13.698v2.3Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos11Icon;
