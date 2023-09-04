import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgCustomerIcon(props: ISvgProps) {
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
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <g clipPath="url(#customer-icon_svg__a)">
        <path
          d="M14.15 44.96 6.69 29.99a2.936 2.936 0 0 0-3.926-1.318l-1.953.966a1.475 1.475 0 0 0-.665 1.973l8.79 17.578a1.463 1.463 0 0 0 1.962.654l1.924-.957a2.912 2.912 0 0 0 1.328-3.925ZM48.799 24.19a2.92 2.92 0 0 0-3.867.38l-8.008 9.844c-.557.586-1.611.937-2.168.937H27.93a1.45 1.45 0 0 1-1.465-1.465c0-.82.644-1.464 1.465-1.464h5.86a2.938 2.938 0 0 0 2.929-2.93 2.938 2.938 0 0 0-2.93-2.93h-7.676c-.732 0-1.093-.459-1.67-.967-2.265-2.04-5.654-3.017-9.091-2.226-1.905.44-3.194 1.21-4.502 2.246l-.04-.04-2.119 1.866 8.33 16.7H33.79a8.825 8.825 0 0 0 7.031-3.516l8.594-12.305a2.952 2.952 0 0 0-.615-4.13ZM31 5c0-2.76-2.016-5-4.5-5S22 2.24 22 5s2.016 5 4.5 5S31 7.76 31 5ZM20 16.258V19h13v-2.742C33 12.808 30.084 10 26.5 10S20 12.807 20 16.258ZM41 18.12c0-2.274-2.076-4.12-4.634-4.12a5.03 5.03 0 0 0-1.366.203c.26.72.439 1.473.439 2.27V19H41v-.88ZM40 9.997A4.001 4.001 0 0 0 36 6c-2.207 0-4 1.792-4 3.997 0 .126.027.246.04.373a8.99 8.99 0 0 1 2.293 3.25c.507.234 1.074.38 1.674.38A4.01 4.01 0 0 0 40 9.997ZM20.96 10.373c.013-.126.04-.246.04-.373 0-2.207-1.793-4-4-4s-4 1.793-4 4 1.793 4 4 4c.6 0 1.16-.14 1.673-.38a8.933 8.933 0 0 1 2.287-3.247Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
        <path
          d="M12 18.12V19h5.561v-2.527c0-.797.18-1.55.439-2.27A5.067 5.067 0 0 0 16.634 14C14.076 14 12 15.846 12 18.12Z"
          fill="A3A8AF"
        />
      </g>
      <defs>
        <clipPath id="customer-icon_svg__a">
          <path fill={colorCheck(props.color) || `currentColor`} d="M0 0h50v50H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgCustomerIcon;
