import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgSaleSourceIcon(props: ISvgProps) {
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
        d="M17.02 7.737a.7.7 0 0 0-.995 0l-1.059 1.06V1.455a.703.703 0 1 0-1.406 0v7.34l-1.059-1.059a.701.701 0 0 0-.994 0 .703.703 0 0 0 0 .994l2.26 2.26a.7.7 0 0 0 .993 0l2.26-2.26a.703.703 0 0 0 0-.994Z"
        fill="#08F"
      />
      <path
        d="M5.975 14.963h16.569a.703.703 0 0 0 .701-.654l.753-10.543a.703.703 0 0 0-.701-.753h-6.928V6.13a2.096 2.096 0 0 1 1.642.613c.398.398.617.928.617 1.491 0 .564-.22 1.094-.618 1.492l-2.26 2.26a2.096 2.096 0 0 1-1.49.617c-.564 0-1.094-.22-1.492-.618l-2.26-2.26a2.096 2.096 0 0 1-.617-1.49c0-.564.22-1.094.617-1.492a2.096 2.096 0 0 1 1.642-.613V3.013H5.743L5.546.645a.703.703 0 0 0-.7-.645H.702a.703.703 0 0 0 0 1.406h3.495l.206 2.47.815 9.778a2.967 2.967 0 0 0-2.206 2.865 2.966 2.966 0 0 0 2.962 2.962h.117c-.28.453-.443.986-.443 1.556A2.966 2.966 0 0 0 8.61 24a2.966 2.966 0 0 0 2.962-2.962c0-.571-.162-1.104-.443-1.557h6.635c-.28.453-.443.986-.443 1.556A2.966 2.966 0 0 0 20.284 24a2.966 2.966 0 0 0 2.963-2.962c0-.588-.173-1.136-.47-1.597a.703.703 0 0 0-.233-1.366H5.975a1.558 1.558 0 0 1-1.556-1.556c0-.858.698-1.556 1.556-1.556Zm14.31 4.518c.857 0 1.556.698 1.556 1.556 0 .859-.699 1.557-1.557 1.557a1.558 1.558 0 0 1-1.556-1.556c0-.859.698-1.557 1.556-1.557Zm-11.674 0c.858 0 1.556.698 1.556 1.556 0 .859-.698 1.557-1.556 1.557a1.558 1.558 0 0 1-1.556-1.556c0-.859.698-1.557 1.556-1.557Z"
        fill="#08F"
      />
    </svg>
  );
}
export default SvgSaleSourceIcon;
