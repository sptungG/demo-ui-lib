import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSalesIcon(props: ISvgProps) {
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
        d="m20.913 13.785-.743-1.526a.588.588 0 0 1 0-.518l.743-1.526a1.74 1.74 0 0 0-.746-2.306l-1.492-.796a.588.588 0 0 1-.303-.419l-.292-1.673a1.728 1.728 0 0 0-1.951-1.425l-1.673.238a.58.58 0 0 1-.49-.16l-1.214-1.18a1.72 1.72 0 0 0-2.412 0l-1.214 1.18a.582.582 0 0 1-.49.16l-1.673-.238a1.728 1.728 0 0 0-1.951 1.425L4.72 6.694a.586.586 0 0 1-.303.42l-1.493.795a1.74 1.74 0 0 0-.746 2.306l.742 1.526c.08.164.08.354 0 .518l-.742 1.526a1.74 1.74 0 0 0 .746 2.305l1.492.797c.161.085.272.238.303.419l.292 1.673a1.729 1.729 0 0 0 1.951 1.425l1.673-.238a.58.58 0 0 1 .49.16l1.214 1.18a1.724 1.724 0 0 0 2.412 0l1.214-1.18a.582.582 0 0 1 .49-.16l1.673.238a1.728 1.728 0 0 0 1.951-1.425l.292-1.673a.585.585 0 0 1 .303-.42l1.493-.796a1.74 1.74 0 0 0 .746-2.305ZM9.25 6.809c1.16 0 2.104.95 2.104 2.115A2.112 2.112 0 0 1 9.25 11.04a2.112 2.112 0 0 1-2.104-2.115c0-1.166.944-2.115 2.104-2.115Zm-1.085 9.405a.57.57 0 0 1-.812 0 .579.579 0 0 1 0-.815l7.573-7.613a.571.571 0 0 1 .812 0 .578.578 0 0 1 0 .816l-7.573 7.612Zm5.675.977a2.112 2.112 0 0 1-2.104-2.115c0-1.166.944-2.115 2.104-2.115 1.16 0 2.104.949 2.104 2.115a2.112 2.112 0 0 1-2.104 2.115Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSalesIcon;
