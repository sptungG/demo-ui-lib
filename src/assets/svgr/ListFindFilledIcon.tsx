import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgListFindFilledIcon(props: ISvgProps) {
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
      <g clipPath="url(#list-find-filled-icon_svg__a)" fill={colorCheck(props.color) || `currentColor`}>
        <path d="M6.619 11.472h3.145a5.778 5.778 0 0 1 1.311-2.01 5.667 5.667 0 0 1 5.123-1.576v-4.19H3.694v16.609h12.5v-1.23a5.62 5.62 0 0 1-2.806-.15 5.492 5.492 0 0 1-1.114-.493H6.618a.848.848 0 0 1 0-1.695h3.804a5.571 5.571 0 0 1-1.035-3.254c0-.105 0-.21.009-.316h-2.78a.847.847 0 1 1 0-1.695h.003Zm0-5.264h6.61a.85.85 0 0 1 .844.844.823.823 0 0 1-.844.844H6.62a.848.848 0 0 1 0-1.695v.007Z" />
        <path d="M17.89 7.188a.876.876 0 0 1-1.13.84 5.603 5.603 0 0 0-.451-.119l-.114-.023v-4.19h-12.5v16.609h12.5v-1.23a6.862 6.862 0 0 0 .604-.156.844.844 0 0 1 1.09.81v1.381c-.041.507-.421.89-.889.89H2.848A.849.849 0 0 1 2 21.152V2.849A.844.844 0 0 1 2.848 2H17c.466 0 .844.38.89.89v4.298Z" />
        <path d="M18.588 10.081a5.079 5.079 0 0 0-.802-.655 4.76 4.76 0 0 0-1.604-.675 4.859 4.859 0 0 0-4.49 1.332c-.446.444-.802.969-1.05 1.546a4.792 4.792 0 0 0-.394 1.903 4.794 4.794 0 0 0 1.108 3.079c.105.128.216.253.338.37.555.56 1.237.979 1.988 1.22a4.82 4.82 0 0 0 2.503.107 4.875 4.875 0 0 0 1.799-.808c.432-.311.812-.69 1.122-1.124a4.83 4.83 0 0 0-.516-6.29l-.002-.005Zm-1.123 5.774a3.304 3.304 0 0 1-2.326.963 3.206 3.206 0 0 1-2.325-.963 3.309 3.309 0 0 1-.963-2.325 3.214 3.214 0 0 1 .963-2.326 3.292 3.292 0 0 1 5.614 2.326 3.21 3.21 0 0 1-.963 2.325Z" />
        <path d="m21.434 18.703-2.405-2.406a.792.792 0 0 0-1.123 0 .792.792 0 0 0 0 1.123l2.406 2.405a.795.795 0 0 0 .561.241.791.791 0 0 0 .561-.24.776.776 0 0 0 0-1.123Z" />
      </g>
      <defs>
        <clipPath id="list-find-filled-icon_svg__a">
          <path fill="#fff" transform="translate(2 2)" d="M0 0h19.676v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgListFindFilledIcon;
