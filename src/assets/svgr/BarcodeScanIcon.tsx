import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBarcodeScanIcon(props: ISvgProps) {
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
      <g clipPath="url(#barcode-scan-icon_svg__a)" fill={colorCheck(props.color) || `currentColor`}>
        <path d="M7.643 2h-.938A.705.705 0 0 0 6 2.705v4.471c0 .39.316.705.705.705h.938c.39 0 .705-.316.705-.705V2.705A.705.705 0 0 0 7.643 2ZM11.094 2h-.8a.773.773 0 0 0-.774.774v3.157c0 .428.346.774.774.774h.8a.773.773 0 0 0 .774-.774V2.774A.773.773 0 0 0 11.094 2ZM14.8 2h-1.172a.589.589 0 0 0-.588.588v4.705c0 .324.264.588.588.588H14.8a.589.589 0 0 0 .588-.588V2.588A.589.589 0 0 0 14.8 2ZM18.299 2h-1.116a.614.614 0 0 0-.614.614v3.477c0 .341.277.614.614.614h1.116a.614.614 0 0 0 .614-.614V2.614A.616.616 0 0 0 18.299 2ZM17.892 9.062H7.02c-.563 0-1.021.376-1.021.843v.644c0 .748.506 1.427 1.315 1.76l1.072.446c1.038.423 1.695 1.301 1.69 2.266v2.858c-.004 1.05.485 2.063 1.359 2.824v1.016c0 .156.151.281.341.281h1.358c.19 0 .337-.125.337-.281v-1.016c.874-.761 1.363-1.773 1.358-2.824V15.02c-.004-.96.653-1.838 1.687-2.266l1.072-.442c.813-.332 1.323-1.016 1.32-1.764v-.644c.003-.467-.455-.843-1.017-.843Zm-.744 2.352H7.764a.589.589 0 0 1 0-1.176h9.388c.325 0 .588.264.588.588a.595.595 0 0 1-.592.588Z" />
      </g>
      <defs>
        <clipPath id="barcode-scan-icon_svg__a">
          <path fill="#fff" transform="translate(6 2)" d="M0 0h12.912v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgBarcodeScanIcon;
