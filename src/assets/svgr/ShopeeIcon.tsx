import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgShopeeIcon(props: ISvgProps) {
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
        d="M15.366 16.917c.193-1.56-.826-2.556-3.514-3.402-1.302-.439-1.916-1.013-1.901-1.804.054-.877.881-1.516 1.978-1.537.76.015 1.605.198 2.427.74.097.06.166.05.222-.033.076-.12.264-.41.328-.514.043-.068.051-.156-.058-.234a5.6 5.6 0 0 0-.827-.441 5.505 5.505 0 0 0-2.114-.428c-1.605.007-2.871 1.01-2.977 2.348-.069.965.416 1.75 1.456 2.347.22.127 1.413.595 1.888.741 1.492.459 2.267 1.28 2.085 2.24-.166.87-1.093 1.43-2.371 1.448-1.013-.038-1.925-.446-2.632-.989l-.12-.09c-.087-.068-.182-.063-.24.024-.043.065-.316.454-.385.556-.065.09-.03.14.037.195.295.243.687.509.955.644.734.37 1.531.572 2.38.603a4.175 4.175 0 0 0 1.746-.294c.922-.386 1.517-1.157 1.637-2.12ZM12.048 3.164c-1.74 0-3.158 1.618-3.225 3.644h6.45c-.066-2.026-1.485-3.644-3.225-3.644Zm6.606 18.764h-.066l-13.282-.002c-.903-.033-1.568-.755-1.658-1.653l-.01-.161-.593-12.893-.001-.03c0-.208.169-.377.379-.38h4.186C7.712 4.132 9.66 2 12.05 2c2.388 0 4.336 2.133 4.438 4.808h4.181a.383.383 0 0 1 .385.4l-.65 12.945-.006.11c-.08.908-.824 1.64-1.743 1.665Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgShopeeIcon;
