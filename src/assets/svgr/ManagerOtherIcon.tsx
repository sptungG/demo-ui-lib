import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgManagerOtherIcon(props: ISvgProps) {
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
      <g clipPath="url(#manager-other-icon_svg__a)">
        <g clipPath="url(#manager-other-icon_svg__b)" fill="#08F">
          <path d="M21.346 10.643c-.239-1.037-.698-2.068-1.265-2.992a.125.125 0 0 1-.005-.122l1.13-2.377a.129.129 0 0 0-.024-.145L19.63 3.455a.129.129 0 0 0-.145-.023l-2.377 1.13a.14.14 0 0 1-.122-.005c-.924-.567-1.842-.914-2.874-1.149a.13.13 0 0 1-.094-.084L13.231.839a.131.131 0 0 0-.122-.089H10.89a.127.127 0 0 0-.122.084l-.905 2.49a.125.125 0 0 1-.093.08c-1.032.239-1.955.698-2.874 1.266a.126.126 0 0 1-.122.004L4.398 3.55a.121.121 0 0 0-.14.023L2.71 5.007a.128.128 0 0 0-.028.15l1.13 2.372a.14.14 0 0 1-.005.122c-.567.92-.914 1.843-1.149 2.874a.135.135 0 0 1-.08.094l-2.494.9a.127.127 0 0 0-.084.122v2.223c0 .056.033.103.084.121l2.49.905c.042.014.07.052.08.094.239 1.031.694 2.063 1.153 2.874a.13.13 0 0 1 .005.117l-1.135 2.377a.129.129 0 0 0 .024.146l1.551 1.551a.129.129 0 0 0 .146.024l2.377-1.13a.14.14 0 0 1 .122.005c.919.572 1.842 1.026 2.874 1.266.042.009.075.037.089.08l.905 2.372a.127.127 0 0 0 .121.084h2.223a.127.127 0 0 0 .122-.084l.91-2.5a.134.134 0 0 1 .079-.079c.286-.094.633-.183.938-.277a.129.129 0 0 0 .051-.215l-1.72-1.716a.139.139 0 0 0-.113-.038c-4.28.75-8.12-2.19-8.538-6.339-.445-4.411 3.193-8.214 7.62-7.942 4.19.258 7.285 4.051 6.633 8.083-.005.042.005.084.038.113l1.847 1.847a.128.128 0 0 0 .211-.047c.084-.234.155-.431.169-.68a.137.137 0 0 1 .089-.117c.398-.127 2.058-.656 2.466-.783a.131.131 0 0 0 .089-.122v-2.213a.131.131 0 0 0-.09-.122l-2.475-.783a.137.137 0 0 1-.089-.093Z" />
          <path d="m23.519 21.628-7.078-7.078c1.678-3.722-1.8-7.678-5.64-6.6l2.162 2.16c.96.962.96 2.523 0 3.362-.84.96-2.522.96-3.361 0l-2.161-2.04c-1.078 3.362 2.4 7.2 6.36 5.64l7.079 7.078c.722.722 1.8.722 2.522 0 .717-.6.717-1.8.117-2.522Z" />
        </g>
      </g>
      <defs>
        <clipPath id="manager-other-icon_svg__a">
          <path fill="#fff" transform="translate(0 .75)" d="M0 0h24v24H0z" />
        </clipPath>
        <clipPath id="manager-other-icon_svg__b">
          <path fill="#fff" transform="translate(0 .75)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgManagerOtherIcon;
