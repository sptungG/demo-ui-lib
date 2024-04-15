import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos9Icon(props: ISvgProps) {
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
        d="M18.796 2H5.259C4.559 2 4 2.562 4 3.264v17.472C4 21.438 4.56 22 5.259 22h13.537c.699 0 1.258-.562 1.258-1.264V3.264c0-.702-.573-1.264-1.258-1.264Zm.42 18.736a.413.413 0 0 1-.42.421H5.259a.422.422 0 0 1-.42-.421V3.264c0-.239.182-.421.42-.421h13.537c.237 0 .42.196.42.421v17.472Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M11.048 15.23H6.21a.413.413 0 0 0-.42.422v4.143c0 .239.182.421.42.421h4.852c.238 0 .42-.182.42-.421v-4.143a.425.425 0 0 0-.434-.422Zm-.42 4.13H6.63v-3.287h4.014v3.287h-.014ZM11.048 9.149H6.21a.413.413 0 0 0-.42.421v4.143c0 .24.182.422.42.422h4.852c.238 0 .42-.183.42-.421V9.57a.434.434 0 0 0-.434-.421Zm-.42 4.143H6.63v-3.3h4.014v3.3h-.014Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M7.748 12.07h1.748c.238 0 .42-.182.42-.421a.413.413 0 0 0-.42-.421H7.748a.413.413 0 0 0-.42.42c0 .226.196.422.42.422ZM7.748 18.138h.461v.463c0 .239.182.422.42.422s.42-.183.42-.422v-.463h.461c.238 0 .42-.183.42-.422a.413.413 0 0 0-.42-.421h-.462v-.464a.413.413 0 0 0-.42-.42.413.413 0 0 0-.419.42v.464h-.461a.413.413 0 0 0-.42.421c0 .24.196.422.42.422ZM17.845 9.149h-4.601a.413.413 0 0 0-.42.421v10.21c0 .24.182.422.42.422h4.6c.238 0 .42-.182.42-.421V9.57a.422.422 0 0 0-.42-.422Zm-.42 10.21h-3.762V9.993h3.762v9.368ZM17.845 3.798H6.21a.413.413 0 0 0-.42.421v3.427c0 .239.182.421.42.421h11.635c.238 0 .42-.182.42-.42V4.218a.413.413 0 0 0-.42-.421Zm-.42 3.427H6.63V4.64h10.796v2.585Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M14.74 14.303h1.608c.238 0 .42-.182.42-.421a.413.413 0 0 0-.42-.421H14.74a.413.413 0 0 0-.42.421c0 .225.182.421.42.421ZM14.74 15.905h1.608c.238 0 .42-.183.42-.422a.413.413 0 0 0-.42-.421H14.74a.413.413 0 0 0-.42.421c0 .239.182.421.42.421Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos9Icon;
