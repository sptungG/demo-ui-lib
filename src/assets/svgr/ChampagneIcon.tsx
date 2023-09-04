import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgChampagneIcon(props: ISvgProps) {
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
        d="M7.644 2.658A1 1 0 0 1 8.584 2h6.833a1 1 0 0 1 .94.658C17.392 5.508 18 9.04 18 11.333c0 2.26-.612 3.998-1.75 5.175-.896.926-2.037 1.422-3.25 1.59v2.235h1.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2H11V18.1c-1.213-.17-2.355-.665-3.25-1.591C6.612 15.33 6 13.591 6 11.332c0-2.293.607-5.826 1.644-8.675Zm7.168 12.46c-.673.696-1.637 1.049-2.812 1.049-1.175 0-2.139-.353-2.812-1.05C8.513 14.42 8 13.242 8 11.334c0-1.075.156-2.502.444-4h7.112c.288 1.498.444 2.925.444 4 0 1.908-.513 3.086-1.188 3.784Zm.286-9.785H8.902c.12-.451.252-.898.394-1.333h5.408c.142.435.273.882.394 1.333Zm-1.848 5.334a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167Zm-1.417-.584a1.417 1.417 0 1 1 2.834 0 1.417 1.417 0 0 1-2.834 0Zm-.5 2.5a.583.583 0 1 1-1.166 0 .583.583 0 0 1 1.166 0Zm-.583-1.416a1.417 1.417 0 1 0 0 2.833 1.417 1.417 0 0 0 0-2.833Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgChampagneIcon;
