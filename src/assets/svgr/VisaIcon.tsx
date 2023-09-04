import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgVisaIcon(props: ISvgProps) {
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
      <g clipPath="url(#visa-icon_svg__a)">
        <path
          d="M17.447 8.301a4.985 4.985 0 0 0-1.741-.3c-1.92 0-3.276.966-3.285 2.354-.012 1.02.963 1.595 1.7 1.936.758.35 1.011.57 1.009.884-.005.476-.605.692-1.163.692-.767 0-1.185-.107-1.83-.374l-.238-.112-.273 1.598c.467.195 1.308.362 2.177.376 2.04 0 3.375-.961 3.39-2.438.017-.815-.51-1.43-1.622-1.939-.675-.33-1.094-.55-1.094-.885 0-.297.359-.614 1.109-.614a3.54 3.54 0 0 1 1.455.275l.18.08.272-1.544-.046.011Zm4.981-.171h-1.5c-.466 0-.818.128-1.022.591l-2.884 6.534h2.04l.409-1.071 2.49.002c.06.251.24 1.07.24 1.07H24L22.428 8.13ZM9.66 8.07h1.945l-1.217 7.129H8.446L9.66 8.067v.003ZM4.722 12l.202.989 1.9-4.86h2.06l-3.06 7.117H3.769L2.089 9.22a.407.407 0 0 0-.179-.238A8.337 8.337 0 0 0 0 8.275l.026-.15h3.13c.425.017.767.15.881.603l.684 3.275v-.004h.001Zm15.307.726.775-1.994c-.01.022.16-.411.258-.679l.133.615.45 2.057h-1.618v.001h.002Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="visa-icon_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgVisaIcon;
