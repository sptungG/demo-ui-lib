import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgListFind2Icon(props: ISvgProps) {
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
      <g clipPath="url(#list-find-2-icon_svg__a)">
        <path
          d="M17 22H2.848a.85.85 0 0 1-.844-.845V2.848a.85.85 0 0 1 .844-.844l.844 1.652v16.648h12.502V17.34a.847.847 0 1 1 1.695 0v3.77c-.042.507-.422.89-.89.89Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
        <path
          d="M17 2c.465 0 .843.38.89.89v6.313a.847.847 0 1 1-1.696 0V3.695H3.695v16.652L2.851 22a.849.849 0 0 1-.844-.844V2.848a.85.85 0 0 1 .844-.845L16.999 2Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
        <path
          d="M13.229 8.61h-6.61a.847.847 0 1 1 0-1.695h6.61a.85.85 0 0 1 .844.844.823.823 0 0 1-.844.85ZM10.305 13.143H6.618a.848.848 0 0 1 0-1.695h3.687a.848.848 0 0 1 0 1.695ZM12.127 17.677H6.618a.848.848 0 0 1 0-1.695h5.51a.848.848 0 0 1 0 1.695Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
        <path
          d="M15.092 18.652a5.208 5.208 0 0 1-5.169-5.17 5.208 5.208 0 0 1 5.17-5.169 5.208 5.208 0 0 1 5.169 5.17 5.209 5.209 0 0 1-5.17 5.17Zm0-8.644a3.499 3.499 0 0 0-2.457 1.013 3.397 3.397 0 0 0-1.013 2.458 3.496 3.496 0 0 0 2.138 3.217c.422.175.876.262 1.332.258a3.497 3.497 0 0 0 3.216-2.143c.174-.422.26-.875.256-1.332a3.47 3.47 0 0 0-3.475-3.474l.003.003Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
        <path d="m18.61 17 2.541 2.542-2.541-2.543Z" fill="#fff" />
        <path
          d="M21.152 20.39a.836.836 0 0 1-.591-.254l-2.543-2.542a.84.84 0 0 1 1.186-1.187l2.543 2.542a.817.817 0 0 1 0 1.187.844.844 0 0 1-.591.253h-.004Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="list-find-2-icon_svg__a">
          <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgListFind2Icon;
