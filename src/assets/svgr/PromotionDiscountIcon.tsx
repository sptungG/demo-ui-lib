import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgPromotionDiscountIcon(props: ISvgProps) {
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
        d="m28.369 17.677-1.113-2.289a.884.884 0 0 1 0-.777l1.113-2.289a2.61 2.61 0 0 0-1.118-3.458L25.012 7.67a.881.881 0 0 1-.455-.629l-.437-2.51a2.592 2.592 0 0 0-2.927-2.137l-2.51.357a.87.87 0 0 1-.734-.24L16.127.74a2.58 2.58 0 0 0-3.617 0L10.688 2.51a.873.873 0 0 1-.735.24l-2.509-.357a2.592 2.592 0 0 0-2.927 2.138l-.437 2.51a.88.88 0 0 1-.454.628l-2.24 1.194a2.61 2.61 0 0 0-1.118 3.459L1.38 14.61c.12.247.12.53 0 .777l-1.112 2.29a2.61 2.61 0 0 0 1.118 3.458l2.238 1.194a.88.88 0 0 1 .455.628l.438 2.51a2.593 2.593 0 0 0 2.926 2.137l2.51-.357c.27-.038.538.05.735.24l1.821 1.772c.507.493 1.158.74 1.809.74.65 0 1.302-.247 1.809-.74l1.821-1.771a.873.873 0 0 1 .735-.24l2.51.356a2.592 2.592 0 0 0 2.926-2.137l.438-2.51c.047-.27.213-.5.455-.628l2.238-1.194a2.61 2.61 0 0 0 1.119-3.459ZM10.875 7.214a3.168 3.168 0 0 1 3.156 3.172 3.168 3.168 0 0 1-3.156 3.173 3.168 3.168 0 0 1-3.155-3.173 3.168 3.168 0 0 1 3.155-3.172ZM9.247 21.321a.856.856 0 0 1-1.217 0 .868.868 0 0 1 0-1.223L19.39 8.679a.857.857 0 0 1 1.217 0 .868.868 0 0 1 0 1.223l-11.36 11.42Zm8.513 1.465a3.168 3.168 0 0 1-3.155-3.172 3.168 3.168 0 0 1 3.155-3.172 3.168 3.168 0 0 1 3.156 3.172 3.168 3.168 0 0 1-3.156 3.172Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgPromotionDiscountIcon;
