import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCakeIcon(props: ISvgProps) {
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
        d="M8.042 15.908a1.758 1.758 0 0 1-.886-1.525A4.888 4.888 0 0 1 12.04 9.5h2.012l.095-1.563H2.744l.82 13.513c.018.309.275.55.584.55h3.596a2.913 2.913 0 0 1-.588-1.758c0-.76.485-1.408 1.161-1.653a2.328 2.328 0 0 1 0-2.554c-.19-.043-.296-.085-.275-.127ZM8.445 6.766h5.86a.586.586 0 1 0 0-1.172H9.527l1.58-2.422h2.026a.586.586 0 1 0 0-1.172h-2.344c-.198 0-.383.1-.49.266l-2.17 3.328H2.585a.586.586 0 1 0 0 1.172h5.859Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M8.328 14.383c0 .324.262.586.586.586h12.5a.586.586 0 0 0 .586-.586 3.715 3.715 0 0 0-3.71-3.711h-6.25a3.715 3.715 0 0 0-3.712 3.71ZM10.281 16.14a1.172 1.172 0 1 0 0 2.344h9.766a1.172 1.172 0 1 0 0-2.343H10.28ZM21.414 19.656h-12.5a.586.586 0 0 0-.586.586c0 .97.789 1.758 1.758 1.758h10.156A1.76 1.76 0 0 0 22 20.242a.586.586 0 0 0-.586-.586Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCakeIcon;
