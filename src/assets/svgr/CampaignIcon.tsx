import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCampaignIcon(props: ISvgProps) {
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
        d="M17.29 9.858a3.122 3.122 0 0 0-.408-3.99 3.27 3.27 0 0 0-4.062-.4c-2.45-2.406-2.45-2.533-2.896-2.457-.445.076-.16-.291-4.513 8.76C2.832 14.304 2 14.785 2 16.204c0 1.42.922 1.96 2.58 3.585a2.62 2.62 0 0 0 3.13.386C10.006 22.417 10.369 23 11.407 23a1.96 1.96 0 0 0 1.074-.32c.318-.21.565-.506.712-.853a1.869 1.869 0 0 0-.419-2.07l-2.285-2.242.38-.367c9.237-4.3 8.843-3.99 8.92-4.434.078-.443.013-.38-2.502-2.856h.002Zm-.949-.925L13.762 6.4a1.967 1.967 0 0 1 2.201.371 1.87 1.87 0 0 1 .378 2.162Zm-10.87 9.925c-3.056-3.002-3.044-2.375.459-5.819l3.653 3.583L7.3 18.858c-.242.237-.57.37-.912.37-.342 0-.67-.133-.912-.37h-.004Zm4.112-.444 2.277 2.236a.627.627 0 0 1-.019.873.651.651 0 0 1-.888.026L8.67 19.307l.913-.893Zm1.045-2.533-3.915-3.87 3.514-7.296 7.83 7.69-7.429 3.476ZM18.246 5.313c.355 0 .368-.101 1.825-1.533a.635.635 0 0 0 .215-.453.625.625 0 0 0-.187-.465.645.645 0 0 0-.471-.187.655.655 0 0 0-.463.206l-1.368 1.343a.63.63 0 0 0-.15.695.636.636 0 0 0 .24.288c.106.07.232.107.361.106h-.002ZM16.176 3.514v-1.9a.628.628 0 0 0-.196-.435.651.651 0 0 0-.898 0 .629.629 0 0 0-.196.435v1.9a.624.624 0 0 0 .182.46.645.645 0 0 0 .463.193.655.655 0 0 0 .463-.192.633.633 0 0 0 .182-.46ZM19.4 7.948h1.935a.656.656 0 0 0 .469-.179.634.634 0 0 0 .196-.454.623.623 0 0 0-.196-.455.647.647 0 0 0-.469-.179H19.4a.65.65 0 0 0-.443.193.628.628 0 0 0 0 .882.65.65 0 0 0 .443.192Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M17.29 9.858a3.122 3.122 0 0 0-.408-3.99 3.27 3.27 0 0 0-4.062-.4c-2.45-2.406-2.45-2.533-2.896-2.457-.445.076-.16-.291-4.513 8.76C2.832 14.304 2 14.785 2 16.204c0 1.42.922 1.96 2.58 3.585a2.62 2.62 0 0 0 3.13.386C10.006 22.417 10.369 23 11.407 23a1.96 1.96 0 0 0 1.074-.32c.318-.21.565-.506.712-.853a1.869 1.869 0 0 0-.419-2.07l-2.285-2.242.38-.367c9.237-4.3 8.843-3.99 8.92-4.434.078-.443.013-.38-2.502-2.856h.002Zm-.949-.925L13.762 6.4a1.967 1.967 0 0 1 2.201.371 1.87 1.87 0 0 1 .378 2.162Zm-10.87 9.925c-3.056-3.002-3.044-2.375.459-5.819l3.653 3.583L7.3 18.858c-.242.237-.57.37-.912.37-.342 0-.67-.133-.912-.37h-.004Zm4.112-.444 2.277 2.236a.627.627 0 0 1-.019.873.651.651 0 0 1-.888.026L8.67 19.307l.913-.893Zm1.045-2.533-3.915-3.87 3.514-7.296 7.83 7.69-7.429 3.476ZM18.246 5.313c.355 0 .368-.101 1.825-1.533a.635.635 0 0 0 .215-.453.625.625 0 0 0-.187-.465.645.645 0 0 0-.471-.187.655.655 0 0 0-.463.206l-1.368 1.343a.63.63 0 0 0-.15.695.636.636 0 0 0 .24.288c.106.07.232.107.361.106h-.002ZM16.176 3.514v-1.9a.628.628 0 0 0-.196-.435.651.651 0 0 0-.898 0 .629.629 0 0 0-.196.435v1.9a.624.624 0 0 0 .182.46.645.645 0 0 0 .463.193.655.655 0 0 0 .463-.192.633.633 0 0 0 .182-.46ZM19.4 7.948h1.935a.656.656 0 0 0 .469-.179.634.634 0 0 0 .196-.454.623.623 0 0 0-.196-.455.647.647 0 0 0-.469-.179H19.4a.65.65 0 0 0-.443.193.628.628 0 0 0 0 .882.65.65 0 0 0 .443.192Z"
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgCampaignIcon;
