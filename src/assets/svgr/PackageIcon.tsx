import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageIcon(props: ISvgProps) {
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
        d="m20.616 7.52-.014-.026a.96.96 0 0 0-.068-.122l-2.666-4.81A1.074 1.074 0 0 0 16.933 2H7.758c-.385 0-.743.216-.934.563L4.114 7.47a.602.602 0 0 0-.055.137C4.021 7.714 4 7.83 4 7.951v12.67C4 21.382 4.593 22 5.32 22h14.05c.729 0 1.321-.618 1.321-1.378V7.905l-.001-.051a.605.605 0 0 0-.074-.334Zm-7.69-4.348h3.982l2.098 3.784h-6.08V3.172Zm-5.142 0h4.02v3.784h-6.11l2.09-3.784Zm-2.66 9.921h5.996l1.315 1.383-1.315 1.383H5.123v-2.766Zm14.444 7.529a.202.202 0 0 1-.198.206H5.32a.202.202 0 0 1-.197-.206V17.03h6.02c.283 0 .559-.12.757-.329l1.669-1.754a.693.693 0 0 0 0-.944L11.9 12.25a1.05 1.05 0 0 0-.756-.329h-6.02V8.13h14.444v3.792h-3.655c-.431 0-.818.269-.983.685-.166.415-.077.89.227 1.21l.627.66-.627.66c-.304.32-.393.795-.227 1.21.165.416.552.685.983.685h3.655v3.59Zm0-4.763h-3.516l.874-.919a.681.681 0 0 0 0-.928l-.874-.919h3.516v2.766Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPackageIcon;
