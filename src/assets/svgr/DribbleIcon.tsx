import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgDribbleIcon(props: ISvgProps) {
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
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm1.249 6.523a45.641 45.641 0 0 0-2.88-4.53A8.44 8.44 0 0 1 12 3.838c2.012 0 3.858.73 5.284 1.938-.363.454-1.585 1.792-4.035 2.747Zm-2.003.62c-3.34.855-6.301.94-7.2.948a8.22 8.22 0 0 1 4.33-5.414c.392.54 1.652 2.336 2.87 4.465Zm2.828.97c2.563-1.086 3.94-2.536 4.4-3.084a8.137 8.137 0 0 1 1.692 4.659c-.767-.14-3.11-.515-5.503-.24a8.371 8.371 0 0 1-.04-.103c-.025-.06-.05-.125-.082-.198a24.207 24.207 0 0 0-.467-1.034ZM3.817 12.011v-.056c.93.006 4.552-.057 8.307-1.156.179.35.347.706.509 1.065-.039.01-.078.022-.115.033l-.004.002c-3.907 1.26-6.18 4.458-6.771 5.376a8.155 8.155 0 0 1-1.926-5.264Zm12.99 6.596a37.13 37.13 0 0 0-1.5-5.47c2.202-.295 4.13.17 4.723.34a8.103 8.103 0 0 1-3.223 5.13Zm-9.693-.049c.378-.692 2.109-3.454 6.26-4.946a34.636 34.636 0 0 1 1.68 5.977 8.05 8.05 0 0 1-3.054.594 8.12 8.12 0 0 1-4.886-1.625Zm6.406-4.999.003-.001h-.002v.001Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgDribbleIcon;
