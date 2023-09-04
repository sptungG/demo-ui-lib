import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageDeliveryIcon(props: ISvgProps) {
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
      <g clipPath="url(#package-delivery-icon_svg__a)">
        <path
          d="M23.354 17.299h-.825v-4.4c0-.707-.625-1.282-1.393-1.282h-8.65V7.301C12.485 6.584 11.85 6 11.07 6H8.377C6.749 6 5.343 7.067 5.033 8.537l-.578 3.08h-.012l-.147.076C2.88 12.423 2 13.804 2 15.298v1.908c0 .706.625 1.281 1.393 1.281h1.4c.286 1.006 1.282 1.75 2.464 1.75 1.181 0 2.178-.744 2.464-1.75h5.357c.286 1.006 1.283 1.75 2.464 1.75 1.182 0 2.178-.744 2.465-1.75h3.347c.357 0 .646-.266.646-.594 0-.328-.29-.594-.646-.594ZM6.302 8.758c.195-.91 1.067-1.57 2.075-1.57h2.694c.067 0 .122.051.122.113v4.316H5.766l.536-2.86Zm.955 10.29C6.564 19.048 6 18.53 6 17.894v-.002c0-.636.563-1.154 1.256-1.154.692 0 1.256.518 1.256 1.155s-.564 1.155-1.256 1.155Zm10.285 0c-.692 0-1.256-.518-1.256-1.155s.564-1.155 1.256-1.155c.693 0 1.256.518 1.256 1.155s-.563 1.155-1.256 1.155Zm3.695-1.75h-1.23c-.287-1.005-1.283-1.749-2.465-1.749s-2.178.744-2.464 1.75H9.72c-.287-1.006-1.283-1.75-2.464-1.75-1.182 0-2.178.744-2.465 1.75h-1.4c-.055 0-.1-.042-.1-.093v-1.908c0-1.015.57-1.956 1.497-2.492h16.347c.056 0 .101.041.101.093v4.4Z"
          fill={colorCheck(props.color) || `currentColor`}
          stroke={colorCheck(props.color) || `currentColor`}
          strokeWidth={0.5}
        />
      </g>
      <defs>
        <clipPath id="package-delivery-icon_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPackageDeliveryIcon;
