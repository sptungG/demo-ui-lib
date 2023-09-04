import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgExtraPosIcon(props: ISvgProps) {
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
        d="M21.273 16.883h-.724l-.73-9.945a.737.737 0 0 0-.23-.484.722.722 0 0 0-.495-.196H16.49V5.109h1.45a.72.72 0 0 0 .67-.452.74.74 0 0 0 .056-.281v-2.64a.74.74 0 0 0-.448-.68.72.72 0 0 0-.279-.056h-4.35a.72.72 0 0 0-.672.454.737.737 0 0 0-.055.281v2.641a.738.738 0 0 0 .449.677.72.72 0 0 0 .278.056h1.447v1.149h-3.12V2.556a.74.74 0 0 0-.459-.678.722.722 0 0 0-.795.173l-1.35 1.437-1.35-1.437a.726.726 0 0 0-1.253.505v3.702H4.906c-.183 0-.36.07-.494.195a.736.736 0 0 0-.23.483l-.73 9.947h-.724a.72.72 0 0 0-.672.451.74.74 0 0 0-.056.281v4.652a.739.739 0 0 0 .45.68.72.72 0 0 0 .278.055h18.546a.72.72 0 0 0 .673-.454.739.739 0 0 0 .055-.281v-4.652a.74.74 0 0 0-.45-.677.72.72 0 0 0-.279-.055ZM14.315 2.467h2.898v1.176h-2.898V2.467Zm-5.53 2.591a.74.74 0 0 0 1.055 0l.623-.664v5.062H8.162V7.003l.002-.011-.002-.01V4.393l.623.664ZM5.581 7.725H6.71v1.731h-.085a.723.723 0 0 0-.504.22.737.737 0 0 0 0 1.027.723.723 0 0 0 .504.22H12a.723.723 0 0 0 .503-.22.737.737 0 0 0 0-1.026.723.723 0 0 0-.503-.22h-.085V7.724h6.504l.673 9.153H4.908l.673-9.153Zm14.966 13.808H3.453V18.35h17.094v3.184Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M16.063 9.456h-.597a.72.72 0 0 0-.686.45.74.74 0 0 0 .162.808.725.725 0 0 0 .524.21h.597a.723.723 0 0 0 .503-.221.737.737 0 0 0 0-1.026.723.723 0 0 0-.503-.22Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgExtraPosIcon;
