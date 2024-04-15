import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGearConfigIcon(props: ISvgProps) {
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
        d="M19.785 10.242c-.2-.863-.582-1.722-1.055-2.492a.104.104 0 0 1-.003-.102l.941-1.98a.107.107 0 0 0-.02-.121l-1.293-1.293a.107.107 0 0 0-.12-.02l-1.981.942a.116.116 0 0 1-.102-.004 7.674 7.674 0 0 0-2.394-.957.109.109 0 0 1-.078-.07l-.657-2.07A.11.11 0 0 0 12.922 2h-1.848a.106.106 0 0 0-.101.07l-.754 2.075a.104.104 0 0 1-.078.066c-.86.2-1.63.582-2.395 1.055a.105.105 0 0 1-.101.004l-1.98-.938a.101.101 0 0 0-.118.02l-1.29 1.195a.107.107 0 0 0-.023.125l.942 1.976a.116.116 0 0 1-.004.102c-.473.766-.762 1.535-.957 2.395a.112.112 0 0 1-.067.078l-2.078.75a.106.106 0 0 0-.07.101v1.852c0 .047.027.086.07.101l2.075.754a.104.104 0 0 1 .066.078c.2.86.578 1.72.96 2.395.016.031.02.066.005.098l-.946 1.98c-.02.04-.011.09.02.121l1.293 1.293c.031.031.082.04.121.02l1.98-.942a.116.116 0 0 1 .102.004c.766.477 1.535.856 2.395 1.055a.099.099 0 0 1 .074.066l.754 1.977c.015.043.054.07.101.07h1.852a.106.106 0 0 0 .101-.07l.758-2.082a.112.112 0 0 1 .067-.067c.238-.078.527-.152.78-.23a.107.107 0 0 0 .044-.18l-1.434-1.43a.116.116 0 0 0-.093-.03c-3.567.624-6.766-1.825-7.114-5.282-.37-3.676 2.66-6.844 6.348-6.617 3.492.215 6.07 3.375 5.527 6.734-.004.035.004.07.032.094l1.539 1.539a.107.107 0 0 0 .175-.04c.07-.194.13-.358.141-.566a.114.114 0 0 1 .074-.097c.332-.106 1.715-.547 2.055-.652a.11.11 0 0 0 .074-.102v-1.844a.11.11 0 0 0-.074-.101l-2.063-.653a.114.114 0 0 1-.074-.078Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M21.602 19.398 15.703 13.5c1.399-3.102-1.5-6.399-4.7-5.5l1.802 1.8c.8.801.8 2.102 0 2.801-.7.801-2.102.801-2.801 0l-1.8-1.699c-.9 2.801 2 6 5.3 4.7l5.898 5.898c.602.602 1.5.602 2.102 0 .598-.5.598-1.5.098-2.102Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgGearConfigIcon;
