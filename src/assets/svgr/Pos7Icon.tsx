import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos7Icon(props: ISvgProps) {
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
        d="M19.125 2H4.789A2.805 2.805 0 0 0 2 4.801v14.397A2.805 2.805 0 0 0 4.79 22h14.335a2.805 2.805 0 0 0 2.789-2.802V4.801A2.805 2.805 0 0 0 19.124 2Zm1.68 2.801v6.642h-8.294v-8.33h6.614c.923 0 1.68.76 1.68 1.688Zm-17.697 0A1.69 1.69 0 0 1 4.79 3.113h6.614v8.33H3.108V4.801Zm0 14.397v-6.641h8.295v8.33H4.789c-.942 0-1.68-.76-1.68-1.689Zm17.698 0a1.69 1.69 0 0 1-1.681 1.689H12.51v-8.33h8.295v6.641Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M9.112 6.712H7.82V5.414a.545.545 0 0 0-.554-.557.545.545 0 0 0-.554.557v1.298H5.418a.545.545 0 0 0-.555.557c0 .315.24.557.555.557H6.71v1.298c0 .316.24.557.554.557a.545.545 0 0 0 .554-.557V7.826h1.293a.545.545 0 0 0 .554-.557.57.57 0 0 0-.554-.557ZM9.112 16.174H5.399a.545.545 0 0 0-.554.557c0 .315.24.556.554.556h3.713a.545.545 0 0 0 .554-.556.557.557 0 0 0-.554-.557ZM14.71 9.236a.556.556 0 0 0 .794 0l1.145-1.15 1.145 1.15a.556.556 0 0 0 .795 0 .562.562 0 0 0 0-.798l-1.146-1.15 1.146-1.15a.562.562 0 0 0 0-.798.556.556 0 0 0-.795 0L16.65 6.49l-1.145-1.15a.556.556 0 0 0-.795 0 .562.562 0 0 0 0 .797l1.146 1.15-1.146 1.15a.598.598 0 0 0 0 .799ZM16.372 15.32h.554a.545.545 0 0 0 .554-.556.545.545 0 0 0-.554-.556h-.554a.545.545 0 0 0-.554.556c0 .316.258.557.554.557ZM14.396 17.288h4.525a.545.545 0 0 0 .555-.557.545.545 0 0 0-.555-.557h-4.525a.545.545 0 0 0-.555.557c0 .297.24.556.555.556ZM16.926 18.122h-.554a.546.546 0 0 0-.554.557c0 .315.24.557.554.557h.554a.545.545 0 0 0 .554-.557.545.545 0 0 0-.554-.557Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos7Icon;
