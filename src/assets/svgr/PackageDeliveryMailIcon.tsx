import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageDeliveryMailIcon(props: ISvgProps) {
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
        d="M22 7.186a2.177 2.177 0 0 0-.635-1.539A2.179 2.179 0 0 0 19.815 5H4.184C2.98 5 2 5.98 2 7.186v9.167c0 .58.227 1.107.597 1.498l.003.004a2.178 2.178 0 0 0 1.586.683h15.628c.573 0 1.095-.222 1.485-.584a.58.58 0 0 0 .16-.164c.336-.384.541-.887.541-1.437V7.186ZM4.186 6.172h15.661l-7.484 5.633a.608.608 0 0 1-.723 0L4.156 6.173h.03Zm-1.014 10.18V7.187c0-.09.012-.178.034-.261L9.18 11.42l-5.984 5.15a1.014 1.014 0 0 1-.024-.217Zm16.642 1.014H4.186a1.01 1.01 0 0 1-.112-.006l6.065-5.218.8.601.003.003a1.78 1.78 0 0 0 2.12 0l.807-.607 6.067 5.22c-.04.004-.08.007-.122.007Zm1.014-1.013c0 .071-.008.141-.022.208l-5.979-5.144 5.967-4.49c.022.083.034.17.034.259v9.167Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPackageDeliveryMailIcon;
