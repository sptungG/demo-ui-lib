import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCampaignFillIcon(props: ISvgProps) {
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
      <g clipPath="url(#campaign-fill-icon_svg__a)" fill={colorCheck(props.color) || `currentColor`}>
        <path d="m4.87 13.065-2.3 2.293a1.949 1.949 0 0 0 0 2.755l1.838 1.838a1.95 1.95 0 0 0 2.755 0l2.3-2.293-4.593-4.593ZM9.916 19.035 8.09 20.876l1.827 1.827a1.299 1.299 0 0 0 1.827-1.827l-1.827-1.841ZM5.624 11.98l4.918 4.918 8.108-3.838-9.187-9.189-3.84 8.108ZM13.38 5.957l3.184 3.183a2.599 2.599 0 0 0-3.183-3.183ZM17.727 5.444c.357 0 .37-.104 1.839-1.573a.65.65 0 1 0-.914-.922l-1.378 1.377a.65.65 0 0 0 .455 1.118h-.002ZM15.642 3.598V1.65a.65.65 0 0 0-1.3 0V3.6a.65.65 0 1 0 1.3 0ZM20.839 6.847h-1.95a.65.65 0 0 0 0 1.3h1.95a.65.65 0 1 0 0-1.3Z" />
      </g>
      <defs>
        <clipPath id="campaign-fill-icon_svg__a">
          <path fill="#fff" transform="translate(2 1)" d="M0 0h19.489v22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCampaignFillIcon;
