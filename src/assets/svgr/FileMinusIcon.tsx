import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFileMinusIcon(props: ISvgProps) {
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
        d="M20.53 8.348c-.011-.035-.021-.07-.036-.103a1.097 1.097 0 0 0-.215-.323l-6.6-6.6a1.097 1.097 0 0 0-.322-.215c-.034-.016-.069-.024-.104-.037a1.09 1.09 0 0 0-.285-.056C12.944 1.012 12.923 1 12.9 1H5.2C3.987 1 3 1.987 3 3.2v17.6c0 1.213.987 2.2 2.2 2.2h13.2c1.213 0 2.2-.987 2.2-2.2V8.7c0-.023-.012-.044-.014-.068a1.09 1.09 0 0 0-.055-.284ZM16.846 7.6H14V4.755L16.845 7.6ZM5.2 20.8V3.2h6.6v5.5c0 .608.492 1.1 1.1 1.1h5.5l.002 11H5.2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M8.5 14.2v2.2h6.6v-2.2H8.5Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgFileMinusIcon;
