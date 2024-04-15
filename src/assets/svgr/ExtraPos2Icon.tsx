import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgExtraPos2Icon(props: ISvgProps) {
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
        d="M3.146 5.563V15.79a.692.692 0 0 0 .686.69h16.335a.685.685 0 0 0 .687-.688V5.565a.692.692 0 0 0-.687-.69H3.832a.685.685 0 0 0-.686.688Zm16.336.69V15.1H4.518l.001-8.845h14.963Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M1.562 22.125h20.876c.193 0 .37-.097.495-.255a.936.936 0 0 0 .192-.578v-5.584a.936.936 0 0 0-.192-.578.635.635 0 0 0-.495-.255H1.562a.635.635 0 0 0-.495.255.936.936 0 0 0-.192.578v5.584c0 .213.067.42.192.578a.635.635 0 0 0 .495.255Zm20.189-5.584v3.918H2.248V16.54h19.503ZM6.496 13.125h4.008a.68.68 0 0 0 .43-.148.5.5 0 0 0 .191-.385V8.408a.5.5 0 0 0-.19-.385.68.68 0 0 0-.43-.148h-4.01a.68.68 0 0 0-.43.148.5.5 0 0 0-.19.385v4.184a.5.5 0 0 0 .19.385.679.679 0 0 0 .43.148Zm3.388-4.184v3.118H7.116V8.941h2.768ZM13.66 10.452a.787.787 0 0 0 .784-.788.787.787 0 0 0-.785-.789.787.787 0 0 0-.784.789c0 .434.35.788.784.788ZM16.473 10.383a.787.787 0 0 0 .784-.788.787.787 0 0 0-.784-.79.786.786 0 0 0-.784.79c0 .434.35.788.784.788ZM13.66 12.723a.787.787 0 0 0 .784-.789.786.786 0 0 0-.785-.788.786.786 0 0 0-.784.788c0 .435.35.79.784.79ZM16.473 12.654a.787.787 0 0 0 .784-.789.786.786 0 0 0-.784-.788.786.786 0 0 0-.784.788c0 .435.35.789.784.789Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M9.562 19.256h4.542a.685.685 0 0 0 .686-.69.692.692 0 0 0-.686-.691H9.562a.685.685 0 0 0-.687.69.692.692 0 0 0 .687.69Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
      <path
        d="M15.323 6h-2.646a.72.72 0 0 1-.479-.177.573.573 0 0 1-.198-.427V2.604c0-.16.071-.314.198-.427A.72.72 0 0 1 12.677 2h2.646a.72.72 0 0 1 .479.177.573.573 0 0 1 .198.427v2.792c0 .16-.071.314-.198.427a.72.72 0 0 1-.479.177Zm-1.97-1.207h1.294V3.207h-1.294v1.586Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M15.323 6h-2.646a.72.72 0 0 1-.479-.177.573.573 0 0 1-.198-.427V2.604c0-.16.071-.314.198-.427A.72.72 0 0 1 12.677 2h2.646a.72.72 0 0 1 .479.177.573.573 0 0 1 .198.427v2.792c0 .16-.071.314-.198.427a.72.72 0 0 1-.479.177Zm-1.97-1.207h1.294V3.207h-1.294v1.586Z"
        stroke={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgExtraPos2Icon;
