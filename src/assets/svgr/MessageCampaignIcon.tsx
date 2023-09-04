import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMessageCampaignIcon(props: ISvgProps) {
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
        d="M19 3H5c-1.103 0-2 .897-2 2v16l4.8-3.6A2 2 0 0 1 9 17h10c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2Zm-5.725 3.376.112.565h2.146a.47.47 0 0 1 .467.47v3.766a.47.47 0 0 1-.467.47h-2.417a.462.462 0 0 1-.457-.376l-.112-.565H9.933v2.823a.47.47 0 0 1-.466.471.47.47 0 0 1-.467-.47V6.47c0-.258.21-.47.467-.47h3.35c.224 0 .416.16.458.376Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMessageCampaignIcon;
