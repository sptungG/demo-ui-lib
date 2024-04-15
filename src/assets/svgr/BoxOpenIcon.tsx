import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBoxOpenIcon(props: ISvgProps) {
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
        d="M21.902 12.64 19.734 9.45l2.168-3.192a.588.588 0 0 0-.3-.882l-7.07-2.344a.58.58 0 0 0-.673.23L12 6.051l-1.855-2.786a.579.579 0 0 0-.672-.23l-7.07 2.344a.589.589 0 0 0-.3.883l2.163 3.187-2.168 3.191a.589.589 0 0 0 .3.883l7.07 2.344a.582.582 0 0 0 .673-.23l1.855-2.786 1.855 2.785a.586.586 0 0 0 .672.23l7.07-2.343a.582.582 0 0 0 .368-.367.562.562 0 0 0-.059-.516ZM12 11.175 6.82 9.45 12 7.722l5.18 1.727L12 11.175Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M14.898 16.976a1.759 1.759 0 0 1-2.02-.691L12 14.96l-.883 1.325a1.755 1.755 0 0 1-2.023.69l-4.711-1.57v3.418c0 .254.16.477.402.555l7.027 2.344c.02.008.043.011.063.02a.669.669 0 0 0 .258-.005c.02-.003.039-.007.058-.015l7.027-2.344a.588.588 0 0 0 .403-.555v-3.421l-4.723 1.574Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgBoxOpenIcon;
