import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgTrolleyBagIcon(props: ISvgProps) {
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
        d="M21.186 10.913c-.353 0-.638.263-.638.587v2.045c0 .681-.603 1.236-1.344 1.236H9.275c-.74 0-1.343-.555-1.343-1.236V4.547c0-.653-.446-1.247-1.11-1.478l-2.958-1.03c-.33-.116-.698.037-.822.34-.125.303.04.642.37.757l2.959 1.03c.17.06.285.213.285.381v12.396c0 1.248 1.083 2.268 2.43 2.308-.116.241-.18.508-.18.788 0 1.081.955 1.961 2.13 1.961 1.176 0 2.132-.88 2.132-1.96 0-.28-.065-.546-.18-.787h3.808c-.116.24-.18.507-.18.786 0 1.081.956 1.961 2.131 1.961 1.175 0 2.131-.88 2.131-1.96 0-1.082-.956-1.961-2.131-1.961h-9.58c-.681 0-1.235-.51-1.235-1.137v-1.33c.393.217.853.342 1.343.342h9.93c1.444 0 2.619-1.08 2.619-2.41V11.5c0-.324-.286-.587-.638-.587Zm-2.439 8.34c.471 0 .855.353.855.786 0 .434-.384.787-.855.787s-.855-.353-.855-.787c0-.433.383-.786.855-.786Zm-7.71 0c.471 0 .855.353.855.786 0 .434-.384.787-.855.787-.472 0-.856-.353-.856-.787 0-.433.384-.786.856-.786Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="m18.627 11.506-.454-5.257c-.042-.5-.502-.893-1.048-.893h-.7V5.35c0-1.095-.969-1.986-2.159-1.986s-2.159.891-2.159 1.986v.006h-.7c-.546 0-1.006.392-1.048.892l-.454 5.26c-.042.507.15 1.013.526 1.386.376.374.91.588 1.463.588h4.745c.553 0 1.086-.214 1.462-.588.377-.373.568-.879.526-1.388ZM13.384 5.35c0-.447.396-.812.882-.812.487 0 .883.365.883.812v.006h-1.765V5.35Zm3.782 6.747a.74.74 0 0 1-.527.211h-4.745a.74.74 0 0 1-.527-.211.622.622 0 0 1-.19-.498l.438-5.07h.493v.753c0 .324.285.587.637.587.353 0 .639-.263.639-.587V6.53h1.765v.752c0 .324.286.587.638.587.352 0 .638-.263.638-.587V6.53h.493l.437 5.067a.623.623 0 0 1-.19.5Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgTrolleyBagIcon;
