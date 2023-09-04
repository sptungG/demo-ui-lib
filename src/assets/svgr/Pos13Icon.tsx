import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos13Icon(props: ISvgProps) {
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
        d="M18.82 2H5.094C3.394 2 2 3.4 2 5.108v13.784C2 20.601 3.393 22 5.094 22H18.82c1.7 0 3.094-1.4 3.094-3.108V5.108C21.914 3.399 20.521 2 18.82 2Zm2.214 16.892c0 1.223-.982 2.21-2.2 2.21H5.094c-1.217 0-2.2-.987-2.2-2.21V5.108c0-1.223.983-2.21 2.2-2.21H18.82c1.217 0 2.2.987 2.2 2.21v13.784h.014Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M7.602 15.594H5.124a.916.916 0 0 0-.91.913v2.356c0 .5.41.913.91.913h2.478c.498 0 .909-.412.909-.913v-2.356a.897.897 0 0 0-.91-.914Zm0 3.298-2.508-.029.03-2.386h2.478l.03.03-.03 2.385ZM13.189 15.594h-2.478a.916.916 0 0 0-.91.913v2.356c0 .5.411.913.91.913h2.478c.498 0 .91-.412.91-.913v-2.356c.014-.516-.397-.914-.91-.914Zm0 3.298-2.508-.029.03-2.386h2.478l.03.03-.03 2.385ZM7.602 10.07H5.124a.916.916 0 0 0-.91.914v2.356c0 .501.41.913.91.913h2.478c.498 0 .909-.412.909-.913v-2.356c0-.5-.396-.913-.91-.913Zm0 3.3-2.508-.03.03-2.386h2.478l.03.03-.03 2.386ZM13.189 10.07h-2.478a.916.916 0 0 0-.91.914v2.356c0 .501.411.913.91.913h2.478c.498 0 .91-.412.91-.913v-2.356a.897.897 0 0 0-.91-.913Zm0 3.3-2.508-.03.03-2.386h2.478l.03.03-.03 2.386ZM18.776 10.07h-2.478a.916.916 0 0 0-.91.914v7.864c0 .501.411.914.91.914h2.478c.498 0 .909-.413.909-.914v-7.864a.897.897 0 0 0-.91-.913Zm0 8.822-2.508-.029.03-7.894h2.478l.03.03-.03 7.893ZM18.776 4.224H5.124a.916.916 0 0 0-.91.913v3.004c0 .501.41.914.91.914h13.652c.498 0 .91-.413.91-.914v-2.99a.9.9 0 0 0-.91-.927Zm.03 3.917-.03.03-13.682-.03.03-3.019 13.681.03v2.99Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos13Icon;
