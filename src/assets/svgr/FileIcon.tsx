import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgFileIcon(props: ISvgProps) {
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
      <g clipPath="url(#file-icon_svg__a)" fill={colorCheck(props.color) || `currentColor`}>
        <path d="M20.02 7.443c.209 0 .398.045.588.1v-.136c0-.94-.768-1.708-1.708-1.708h-6.462l-1.455-1.446A.856.856 0 0 0 10.378 4H5.272c-.94 0-1.709.768-1.709 1.708v1.79c.136-.028.272-.046.407-.046h16.05v-.009Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.97 8.546h16.05c1.094.009 1.971.84 1.98 1.88v.027l-1.139 8.097c-.018 1.022-.904 1.853-1.988 1.853H5.136c-1.094 0-1.97-.822-1.988-1.853L2 10.453v-.027c0-1.04.886-1.871 1.97-1.88Zm7.393 3.19v1.057c2.088.118 3.588 1.944 3.597 4.429 0 .1-.082.19-.18.208h-.037a.203.203 0 0 1-.199-.145c-.47-1.4-1.51-2.115-3.172-2.169v1.04a.22.22 0 0 1-.081.162.213.213 0 0 1-.299-.027l-1.898-2.314a.206.206 0 0 1 .01-.27L11 11.6a.193.193 0 0 1 .154-.073c.118 0 .208.09.208.208Z"
        />
      </g>
      <defs>
        <clipPath id="file-icon_svg__a">
          <path fill="#fff" transform="translate(2 4)" d="M0 0h20v16.412H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgFileIcon;
