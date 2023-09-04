import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgStoreIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M22.139 12.406V23.7a.596.596 0 0 1-.596.594H10.807v-8.916a.596.596 0 0 0-.596-.595H5.439a.596.596 0 0 0-.596.595v8.916H2.457a.596.596 0 0 1-.596-.594V12.406h.203c.87 0 1.67-.425 2.165-1.1.012.012.02.03.03.045a2.675 2.675 0 0 0 2.138 1.055h.751c.904 0 1.706-.446 2.195-1.136.039.048.077.098.12.146.563.63 1.374.99 2.22.99h.633c.847 0 1.658-.36 2.222-.99.041-.048.08-.098.119-.146a2.685 2.685 0 0 0 2.195 1.136h.751c.847 0 1.625-.387 2.138-1.056.01-.014.018-.032.03-.044a2.692 2.692 0 0 0 2.165 1.1h.203Zm-2.982 7.727v-4.755a.596.596 0 0 0-.596-.595h-4.175a.596.596 0 0 0-.597.595v4.755c0 .328.267.595.597.595h4.175c.329 0 .596-.267.596-.595ZM4.217 1.706c-.472 0-.9.277-1.09.706L.13 9.127a1.457 1.457 0 0 0 .143 1.456c.29.41.778.634 1.28.634h.51c.668 0 1.258-.449 1.437-1.088l1.38-4.96.967-3.463H4.216Zm2.869 0L4.958 9.332a1.48 1.48 0 0 0 .25 1.3 1.48 1.48 0 0 0 1.188.585h.751c.764 0 1.399-.568 1.482-1.323l.916-8.188h-2.46Zm6.17 0h-2.511l-.841 7.531a1.787 1.787 0 0 0 .447 1.385c.343.384.817.595 1.333.595h.632c.516 0 .99-.211 1.333-.595.34-.377.501-.882.447-1.385l-.84-7.531Zm3.658 0h-2.46l.916 8.188a1.485 1.485 0 0 0 1.482 1.323h.751a1.48 1.48 0 0 0 1.187-.586 1.48 1.48 0 0 0 .25-1.299l-2.126-7.626Zm3.96.706a1.193 1.193 0 0 0-1.09-.706h-1.632l.966 3.462 1.38 4.961c.18.639.77 1.088 1.438 1.088h.509c.503 0 .992-.224 1.28-.634.308-.436.36-.97.144-1.456l-2.996-6.715Z"
        fill="#08F"
      />
    </svg>
  );
}
export default SvgStoreIcon;
