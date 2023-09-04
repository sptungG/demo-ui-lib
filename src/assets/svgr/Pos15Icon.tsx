import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos15Icon(props: ISvgProps) {
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
        d="M20.687 3H3.313A1.31 1.31 0 0 0 2 4.319v14.46a1.31 1.31 0 0 0 1.313 1.318h17.374A1.31 1.31 0 0 0 22 18.78V4.319C22.014 3.6 21.416 3 20.687 3Zm.438 15.794a.43.43 0 0 1-.438.439H3.313a.43.43 0 0 1-.438-.44V4.334c0-.249.19-.44.438-.44h17.374a.43.43 0 0 1 .438.44v14.46Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M19.301 5.066H4.728a.43.43 0 0 0-.438.44v4.058c0 .249.19.439.438.439H19.3a.43.43 0 0 0 .438-.44V5.506a.45.45 0 0 0-.438-.44Zm-.452 4.073H5.15v-3.18h13.698v3.18ZM9.41 13.211H6.479a.43.43 0 0 0-.437.44v4.044c0 .249.19.44.437.44h2.933a.43.43 0 0 0 .437-.44V13.65a.44.44 0 0 0-.437-.44Zm-.437 4.044H6.916v-3.164h2.057v3.164Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M11.176 11.673H4.713a.43.43 0 0 0-.437.44v1.86c0 .25.19.44.437.44a.43.43 0 0 0 .438-.44v-1.42h5.572v1.42c0 .25.19.44.438.44a.43.43 0 0 0 .438-.44v-1.86a.419.419 0 0 0-.423-.44ZM19.301 17.255h-.54a.43.43 0 0 0-.437.44c0 .249.19.44.437.44h.54a.43.43 0 0 0 .438-.44.44.44 0 0 0-.438-.44ZM19.301 14.53h-.54a.43.43 0 0 0-.437.44c0 .249.19.44.437.44h.54a.43.43 0 0 0 .438-.44.44.44 0 0 0-.438-.44ZM19.301 11.805h-.54a.43.43 0 0 0-.437.44c0 .249.19.44.437.44h.54a.43.43 0 0 0 .438-.44.44.44 0 0 0-.438-.44ZM16.704 17.255h-.54a.43.43 0 0 0-.437.44c0 .249.19.44.438.44h.54a.43.43 0 0 0 .437-.44.44.44 0 0 0-.438-.44ZM16.704 14.53h-.54a.43.43 0 0 0-.437.44c0 .249.19.44.438.44h.54a.43.43 0 0 0 .437-.44.44.44 0 0 0-.438-.44ZM16.704 11.805h-.54a.43.43 0 0 0-.437.44c0 .249.19.44.438.44h.54a.43.43 0 0 0 .437-.44.44.44 0 0 0-.438-.44ZM14.108 17.255h-.54a.43.43 0 0 0-.438.44c0 .249.19.44.438.44h.54a.43.43 0 0 0 .438-.44.44.44 0 0 0-.438-.44ZM14.108 14.53h-.54a.43.43 0 0 0-.438.44c0 .249.19.44.438.44h.54a.43.43 0 0 0 .438-.44.44.44 0 0 0-.438-.44ZM14.108 11.805h-.54a.43.43 0 0 0-.438.44c0 .249.19.44.438.44h.54a.43.43 0 0 0 .438-.44.44.44 0 0 0-.438-.44Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos15Icon;
