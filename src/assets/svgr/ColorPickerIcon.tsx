import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgColorPickerIcon(props: ISvgProps) {
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
        d="m11.953 16.472.43 1.829-.43 1.66c-1 0-2.212.233-3.083-.124-.924-.378-1.498-1.366-2.193-2.061l.86-1.719 1.607-.748a3.958 3.958 0 0 0 2.809 1.163Z"
        fill="#EE61EB"
      />
      <path
        d="m9.145 15.308-2.468 2.468c-.675-.675-1.651-1.436-2.029-2.329-.377-.892-.156-1.917-.156-2.947l1.85-.43 1.64.43a3.96 3.96 0 0 0 1.163 2.808Z"
        fill="#0065A3"
      />
      <path
        d="M9.145 9.692A3.96 3.96 0 0 0 7.98 12.5h-3.49c0-.929-.302-2.119.008-2.939.378-1 1.437-1.595 2.178-2.337l1.828.97.64 1.498Z"
        fill="#9EF"
      />
      <path
        d="m11.953 5.039.43 1.746-.43 1.743c-1.097 0-2.09.445-2.809 1.164L6.677 7.224c.675-.675 1.05-1.651 1.942-2.029.893-.377 2.304-.156 3.334-.156Z"
        fill="#93E300"
      />
      <path
        d="m17.229 7.224-.864 1.723-1.603.744a3.96 3.96 0 0 0-2.81-1.163v-3.49c.995 0 2.373-.235 3.24.118.93.379 1.338 1.37 2.037 2.068Z"
        fill="#FFF375"
      />
      <path
        d="m19.415 12.5-1.757.43-1.733-.43a3.96 3.96 0 0 0-1.163-2.809l2.467-2.467c.7.7 1.69 1.106 2.069 2.037.352.867.117 2.245.117 3.239Z"
        fill="#FFC34D"
      />
      <path
        d="M19.415 12.5c0 .994.536 2.243.184 3.11-.38.93-1.67 1.467-2.37 2.166l-1.629-.77-.838-1.697a3.96 3.96 0 0 0 1.163-2.809h3.49Z"
        fill="#F37"
      />
      <path
        d="M17.229 17.776c-.675.675-1.35 1.651-2.243 2.029-.893.377-2.003.156-3.033.156v-3.489a3.96 3.96 0 0 0 2.809-1.163l2.467 2.467Z"
        fill="#FF5CA8"
      />
      <path
        d="m11.953 19.961.43 1.835-.43 1.704a10.96 10.96 0 0 1-7.754-3.246L5 18.592l1.676-.816a7.438 7.438 0 0 0 5.276 2.185Z"
        fill="#C331C8"
      />
      <path
        d="M19.754 20.301A10.965 10.965 0 0 1 12 23.5h-.047V19.96a7.44 7.44 0 0 0 5.276-2.185l1.823.964.702 1.561Z"
        fill="#F37"
      />
      <path
        d="M23 12.5c0 3.05-1.241 5.81-3.246 7.801l-2.525-2.525a7.435 7.435 0 0 0 2.186-5.276l1.823-.43L23 12.5Z"
        fill="#E50048"
      />
      <path
        d="M23 12.5h-3.585c0-2.06-.836-3.926-2.186-5.276l.85-1.708 1.675-.817A10.964 10.964 0 0 1 23 12.5Z"
        fill="#F93"
      />
      <path
        d="M19.754 4.699 17.23 7.224a7.44 7.44 0 0 0-5.276-2.185l-.43-1.605.43-1.934H12c3.026 0 5.765 1.222 7.754 3.199Z"
        fill="#FFDE46"
      />
      <path
        d="M11.953 1.5V5.04c-2.06 0-3.926.835-5.276 2.185L5.03 6.436l-.831-1.69A10.96 10.96 0 0 1 11.953 1.5Z"
        fill="#00DA26"
      />
      <path
        d="M6.677 7.224A7.438 7.438 0 0 0 4.492 12.5l-1.873.43L1 12.5c0-3.026 1.222-5.766 3.199-7.754l2.478 2.478Z"
        fill="#3DF"
      />
      <path
        d="M6.677 17.776 4.2 20.254A10.964 10.964 0 0 1 1 12.5h3.492c0 2.06.835 3.926 2.185 5.276Z"
        fill="#194D80"
      />
    </svg>
  );
}

export default SvgColorPickerIcon;
