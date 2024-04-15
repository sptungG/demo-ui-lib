import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgStore1Icon(props: ISvgProps) {
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
        d="M21.094 5.733c.627.783.968 1.755.968 2.758v2.93a.764.764 0 0 1-.764.764h-.639v7.657a2.168 2.168 0 0 1-2.168 2.168H5.86a2.168 2.168 0 0 1-2.168-2.168v-7.657h-.99a.764.764 0 0 1-.764-.764V8.614H2l19.094-2.881Zm0 0-1.69-2.105 1.69 2.105ZM6.33 2.938h11.656V3L6.33 2.937Zm0 0c-.255 0-.507.053-.74.157m.74-.158-.74.158m.523 1.484L4.208 6.684a2.885 2.885 0 0 0-.742 1.93v2.043h4.436V8.168c.003-.76.21-1.504.602-2.155L6.114 4.58Zm0 0a.288.288 0 0 1 .216-.095h3.094l-.919 1.53-2.39-1.435ZM18.2 4.576a.288.288 0 0 0-.225-.11h-3.047l.918 1.53c.395.656.603 1.407.602 2.172M18.2 4.576l-1.814 3.592M18.2 4.576l1.692 2.105c.414.513.64 1.151.642 1.81M18.2 4.576l1.74 2.066c.424.524.655 1.176.656 1.85m-4.148-.324h-.062m.063 0h-.063m.063 0v2.489m-.063-2.489v2.489h.063m0 0v.062h4.085v-.062m-4.085 0h4.085m0 0h.063V8.49m-.063 2.166V8.49m0 0h.063m-.063 0h.063M5.59 3.095a1.817 1.817 0 0 0-.612.446m.612-.446-.612.446m0 0Zm4.837 3.256L11.2 4.48h1.944l1.392 2.303c.248.415.38.888.384 1.372v2.502H9.43V8.169c.004-.484.137-.957.385-1.372Zm-.033 13.684v-3.095a1.341 1.341 0 0 1 1.34-1.341h2.106a1.341 1.341 0 0 1 1.341 1.34v3.096H9.782Zm9.349-.639a.64.64 0 0 1-.64.64h-2.393v-3.096a2.87 2.87 0 0 0-2.87-2.87h-2.105a2.87 2.87 0 0 0-2.87 2.87v3.095H5.86a.64.64 0 0 1-.64-.639v-7.657h13.91v7.657Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.125}
      />
    </svg>
  );
}

export default SvgStore1Icon;
