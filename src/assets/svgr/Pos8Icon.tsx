import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos8Icon(props: ISvgProps) {
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
        d="M8.187 5.99H7.004V4.58a.5.5 0 0 0-.507-.509.5.5 0 0 0-.507.51V5.99H4.806a.5.5 0 0 0-.507.51.5.5 0 0 0 .507.508H5.99v1.41a.5.5 0 0 0 .507.509.5.5 0 0 0 .507-.51V7.009h1.183a.5.5 0 0 0 .507-.509.521.521 0 0 0-.507-.51Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M9.455 2H3.521C2.676 2 2 2.68 2 3.528v5.96c0 .848.676 1.527 1.521 1.527h5.934c.845 0 1.521-.679 1.521-1.528V3.528C10.976 2.679 10.3 2 9.457 2Zm.507 7.487a.5.5 0 0 1-.507.51H3.521a.51.51 0 0 1-.507-.51V3.528a.5.5 0 0 1 .507-.51h5.934a.51.51 0 0 1 .507.51v5.96ZM20.393 2h-5.934c-.845 0-1.521.68-1.521 1.528v5.96c0 .848.676 1.527 1.52 1.527h5.935c.845 0 1.521-.679 1.521-1.528V3.528c0-.849-.676-1.528-1.521-1.528Zm.507 7.487a.5.5 0 0 1-.507.51h-5.934a.51.51 0 0 1-.507-.51V3.528a.5.5 0 0 1 .507-.51h5.934a.51.51 0 0 1 .507.51v5.96ZM9.455 12.985H3.521c-.845 0-1.521.679-1.521 1.528v5.959C2 21.321 2.676 22 3.521 22h5.934c.845 0 1.521-.68 1.521-1.528v-5.96c0-.848-.676-1.527-1.52-1.527Zm.507 7.487a.5.5 0 0 1-.507.51H3.521a.51.51 0 0 1-.507-.51v-5.96a.5.5 0 0 1 .507-.509h5.934a.51.51 0 0 1 .507.51v5.959ZM20.393 12.985h-5.934c-.845 0-1.521.679-1.521 1.528v5.959c0 .849.676 1.528 1.52 1.528h5.935c.845 0 1.521-.68 1.521-1.528v-5.96c0-.848-.676-1.527-1.521-1.527Zm.507 7.487a.5.5 0 0 1-.507.51h-5.934a.51.51 0 0 1-.507-.51v-5.96a.5.5 0 0 1 .507-.509h5.934a.51.51 0 0 1 .507.51v5.959Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M8.39 16.974H4.57a.5.5 0 0 0-.508.51.5.5 0 0 0 .508.51h3.82a.5.5 0 0 0 .507-.51.5.5 0 0 0-.507-.51ZM19.378 4.547a.509.509 0 0 0-.727 0l-1.234 1.24-1.234-1.24a.509.509 0 0 0-.727 0 .514.514 0 0 0 0 .73l1.234 1.24-1.234 1.239a.514.514 0 0 0 0 .73.509.509 0 0 0 .727 0l1.234-1.24 1.234 1.24a.509.509 0 0 0 .727 0 .514.514 0 0 0 0-.73l-1.234-1.24 1.234-1.24a.547.547 0 0 0 0-.73ZM17.147 16.21h.558a.5.5 0 0 0 .507-.509.5.5 0 0 0-.507-.51h-.558a.5.5 0 0 0-.507.51c-.017.289.22.51.507.51ZM19.75 16.974h-4.649a.5.5 0 0 0-.507.51.5.5 0 0 0 .507.51h4.65a.5.5 0 0 0 .506-.51.51.51 0 0 0-.507-.51ZM17.705 18.774h-.558a.5.5 0 0 0-.507.51.5.5 0 0 0 .507.509h.558a.5.5 0 0 0 .507-.51.5.5 0 0 0-.507-.509Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos8Icon;
