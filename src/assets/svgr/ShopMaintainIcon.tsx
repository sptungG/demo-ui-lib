import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgShopMaintainIcon(props: ISvgProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.465 2.235a2.426 2.426 0 0 0-.325-.163l-.162-.755a.399.399 0 0 0-.39-.317h-1.454a.4.4 0 0 0-.39.317l-.162.755c-.105.049-.211.098-.309.154a2.38 2.38 0 0 0-.3.195l-.731-.235a.391.391 0 0 0-.463.178l-.723 1.26a.396.396 0 0 0 .073.495l.569.52c-.016.121-.016.235-.016.357 0 .114.008.235.016.357l-.569.52a.396.396 0 0 0-.073.496l.723 1.258a.395.395 0 0 0 .463.18l.73-.236c.098.073.204.138.31.203.097.056.203.105.308.154l.163.755a.4.4 0 0 0 .39.317h1.453c.187 0 .35-.13.39-.317l.163-.755c.113-.049.219-.106.324-.163a5.82 5.82 0 0 0 .293-.186l.73.235a.391.391 0 0 0 .464-.178l.723-1.26a.396.396 0 0 0-.073-.495l-.57-.52c.01-.138.01-.251.01-.373 0-.114-.01-.236-.017-.35l.568-.52a.396.396 0 0 0 .073-.495l-.722-1.259a.395.395 0 0 0-.463-.178l-.731.235a2.932 2.932 0 0 0-.293-.186Zm-1.608 4.353c.886 0 1.6-.715 1.6-1.6 0-.885-.715-1.6-1.6-1.6-.885 0-1.6.715-1.6 1.6.008.885.723 1.6 1.6 1.6Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.973 9.02a3.882 3.882 0 0 1-1.702 3.688v5.836h.863v1.727H3.864v-1.727h.863v-5.836A3.882 3.882 0 0 1 3 9.477c0-.715.193-1.403.547-1.99l2.342-4.055A.864.864 0 0 1 6.636 3h7.78a4.975 4.975 0 0 0-.409 1.727H7.136L5.035 8.365A2.159 2.159 0 0 0 8.89 10.28c.29-.723 1.313-.723 1.603 0a2.16 2.16 0 0 0 4.01 0c.29-.723 1.313-.723 1.603 0a2.158 2.158 0 0 0 4.125-.432 4.98 4.98 0 0 0 1.741-.826Zm-5.186 4.11a3.883 3.883 0 0 0 1.757.208v5.206H6.454v-5.205a3.883 3.883 0 0 0 3.239-1.173 3.883 3.883 0 0 0 5.613-.002c.413.432.92.762 1.481.966Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgShopMaintainIcon;
