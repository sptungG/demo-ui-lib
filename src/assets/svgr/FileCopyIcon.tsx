import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFileCopyIcon(props: ISvgProps) {
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
      <g clipPath="url(#file-copy-icon_svg__a)" fill={colorCheck(props.color) || `currentColor`}>
        <path d="M4.348 22A2.338 2.338 0 0 1 2 19.652V4.348A2.338 2.338 0 0 1 4.348 2H17.1c.29 0 .551.116.754.319l3.855 3.826c.203.203.319.493.319.754v12.753A2.338 2.338 0 0 1 19.681 22H4.348Zm15.304-2.145a.198.198 0 0 0 .203-.203V7.333l-3.188-3.188h-.406v3.391c0 .957-.754 1.71-1.71 1.71H9.449c-.956 0-1.71-.753-1.71-1.71V4.145H4.348a.198.198 0 0 0-.203.203v15.304c0 .116.087.203.203.203h.84v-4.029a2.338 2.338 0 0 1 2.348-2.348h8.928a2.338 2.338 0 0 1 2.348 2.348v4.03h.84Zm-2.985 0v-4.029a.198.198 0 0 0-.203-.203H7.536a.198.198 0 0 0-.203.203v4.03h9.334ZM14.116 7.101V4.145H9.884V7.1h4.232Z" />
        <path d="m21.391 6.435-3.826-3.826a.658.658 0 0 0-.463-.174H4.348a1.93 1.93 0 0 0-1.913 1.913v15.304a1.93 1.93 0 0 0 1.913 1.913h15.304a1.93 1.93 0 0 0 1.913-1.913V6.9a.71.71 0 0 0-.174-.464Zm-6.84-2.725v3.826H9.449V3.71h5.102ZM6.899 20.29v-4.464c0-.348.29-.638.637-.638h8.928c.348 0 .638.29.638.638v4.464H6.899Zm13.39-.638c0 .348-.289.638-.637.638h-1.275v-4.464a1.93 1.93 0 0 0-1.913-1.913H7.536a1.93 1.93 0 0 0-1.913 1.913v4.464H4.348a.643.643 0 0 1-.638-.638V4.348c0-.348.29-.638.638-.638h3.826v3.826c0 .696.58 1.276 1.275 1.276h5.102c.695 0 1.275-.58 1.275-1.276V3.71h1.015l3.449 3.45v12.492Z" />
      </g>
      <defs>
        <clipPath id="file-copy-icon_svg__a">
          <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFileCopyIcon;
