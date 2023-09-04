import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgIceCreamIcon(props: ISvgProps) {
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
        d="M9.224 5.729C9.448 4.774 10.37 4 11.5 4c1.09 0 1.985.742 2.29 1.782a1 1 0 0 0 .96.718h.084c.864 0 1.5.636 1.5 1.5 0 .257-.06.48-.158.667H6.825A1.41 1.41 0 0 1 6.667 8c0-.864.635-1.5 1.5-1.5h.083a1 1 0 0 0 .974-.771Zm-2.89 4.938H5.102c.56 3.428 3.24 5.5 6.398 5.5 3.158 0 5.838-2.072 6.399-5.5H6.334Zm11.937-2c.041-.216.063-.439.063-.667 0-1.756-1.218-3.163-2.877-3.447C14.765 3.085 13.312 2 11.5 2 9.731 2 8.183 3.05 7.516 4.557 5.871 4.852 4.666 6.254 4.666 8c0 .228.022.451.063.667H4a1 1 0 0 0-1 1.036c.173 4.742 3.422 7.956 7.5 8.409v2.221H9a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-1.5v-2.221c4.079-.453 7.327-3.667 7.5-8.409a1 1 0 0 0-1-1.036h-.73Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgIceCreamIcon;
