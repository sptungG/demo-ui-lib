import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFileAttachIcon(props: ISvgProps) {
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
        d="m14.058 9.317-.106.106a.938.938 0 0 1 .267.701 1.146 1.146 0 0 1-.343.779l-6.174 6.174a.774.774 0 1 0 1.096 1.096l6.174-6.174a2.695 2.695 0 0 0 .796-1.829 2.474 2.474 0 0 0-.72-1.843c-.996-.995-2.643-.954-3.674.07l-6.507 6.47a3.904 3.904 0 0 0 0 5.515c.76.76 1.759 1.14 2.757 1.14.999 0 2-.38 2.761-1.142h.001l9.006-9.113A5.117 5.117 0 0 0 20.9 7.624c0-1.375-.536-2.67-1.508-3.641a5.115 5.115 0 0 0-3.642-1.509 5.114 5.114 0 0 0-3.64 1.507L3.33 12.7a.775.775 0 0 0 1.091 1.1l8.783-8.72a3.575 3.575 0 0 1 2.546-1.055c.962 0 1.865.374 2.546 1.055a3.574 3.574 0 0 1 1.054 2.545c0 .962-.374 1.865-1.057 2.548h-.001l-9.006 9.113a2.354 2.354 0 0 1-3.323 0 2.353 2.353 0 0 1-.001-3.322l6.505-6.468c.439-.436 1.105-.451 1.485-.073l.106-.106Zm0 0c-.447-.445-1.208-.413-1.697.073L10.28 20.274a3.745 3.745 0 0 1-2.655 1.098c-.96 0-1.92-.365-2.65-1.096a3.755 3.755 0 0 1 0-5.303l6.505-6.47c.977-.97 2.53-1.002 3.463-.07.456.456.695 1.07.676 1.733a2.545 2.545 0 0 1-.752 1.726l-6.174 6.175a.624.624 0 1 1-.884-.884l6.175-6.174c.239-.24.376-.552.386-.88a1.087 1.087 0 0 0-.31-.812Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.3}
      />
    </svg>
  );
}

export default SvgFileAttachIcon;
