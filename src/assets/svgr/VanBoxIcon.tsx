import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgVanBoxIcon(props: ISvgProps) {
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
        d="M22 13.231v5.148c0 .325-.27.595-.594.595h-.46c.04-.19.063-.389.063-.595a2.971 2.971 0 0 0-5.94 0c0 .167.015.325.047.476a.57.57 0 0 1-.245-.476v-8.317c0-.324.27-.594.594-.594h2.772A3.766 3.766 0 0 1 22 13.231Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M18.04 20.558a2.18 2.18 0 0 1-2.179-2.178 2.18 2.18 0 0 1 2.178-2.178 2.18 2.18 0 0 1 2.178 2.178 2.18 2.18 0 0 1-2.178 2.178ZM6.752 20.558a2.18 2.18 0 0 1-2.178-2.178 2.18 2.18 0 0 1 4.356 0 2.18 2.18 0 0 1-2.178 2.178ZM2 12.642c0 .292.237.53.53.53h7.407a.53.53 0 0 0 .53-.53V8.94H2v3.703ZM4.428 8.233h1.451V4H3.764a.53.53 0 0 0-.493.338L2.035 7.512A.523.523 0 0 0 2 7.694v.539h2.428ZM10.43 7.512 9.195 4.338A.528.528 0 0 0 8.702 4H6.586v4.233h3.88v-.54a.509.509 0 0 0-.036-.18Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M13.485 7.092h-1.944c.071.185.11.38.113.58v4.971c0 .947-.77 1.717-1.718 1.717H2.99v4.02c0 .324.27.594.594.594h.26a2.924 2.924 0 0 1-.063-.594 2.971 2.971 0 0 1 5.94 0c0 .205-.023.404-.062.594h3.825c.325 0 .595-.27.595-.594V7.686a.597.597 0 0 0-.594-.594Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgVanBoxIcon;
