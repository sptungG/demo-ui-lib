import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBeerIcon(props: ISvgProps) {
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
        d="M8.354 4.772C8.659 4.314 9.274 4 9.957 4c.626 0 1.292.361 1.634.817a1 1 0 0 0 1.569.04c.193-.232.569-.422 1.144-.422.926 0 1.609.683 1.609 1.608 0 .405-.13.764-.355 1.039a1.005 1.005 0 0 0-.336.304c-.256.17-.57.266-.918.266-.454 0-.842-.192-1.273-.55a1 1 0 0 0-1.44.168 2.043 2.043 0 0 1-3.27 0 1 1 0 0 0-1.567-.04c-.194.232-.57.422-1.145.422-.348 0-.662-.096-.918-.266a1.005 1.005 0 0 0-.336-.304A1.625 1.625 0 0 1 4 6.043c0-.926.683-1.608 1.609-1.608.454 0 .842.192 1.273.55a1 1 0 0 0 1.472-.213ZM2.87 8.422A3.61 3.61 0 0 1 2 6.044c0-2.03 1.578-3.608 3.609-3.608a3.59 3.59 0 0 1 1.768.468C8.106 2.302 9.049 2 9.957 2c.916 0 1.813.346 2.506.884.56-.313 1.206-.45 1.841-.45 2.03 0 3.609 1.579 3.609 3.61a3.61 3.61 0 0 1-.87 2.379v.534h2.479c1.509 0 2.739 1.23 2.739 2.739v4.348c0 1.508-1.23 2.739-2.74 2.739h-2.48a2.745 2.745 0 0 1-2.737 2.608H5.61a2.744 2.744 0 0 1-2.74-2.739V8.422Zm2 1.158v9.072c0 .404.334.74.739.74h8.695c.405 0 .74-.336.74-.74V9.58a3.789 3.789 0 0 1-.74.072 3.594 3.594 0 0 1-1.788-.48 4.023 4.023 0 0 1-2.56.915 4.022 4.022 0 0 1-2.515-.879c-.558.309-1.2.444-1.832.444-.255 0-.502-.025-.74-.072Zm14.652 7.203h-2.478v-5.827h2.478c.404 0 .739.335.739.74v4.348c0 .404-.335.739-.74.739Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgBeerIcon;
