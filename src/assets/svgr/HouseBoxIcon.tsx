import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgHouseBoxIcon(props: ISvgProps) {
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
        d="m8.03 5.756 5.927 5.928a.645.645 0 0 1-.912.913l-.447-.447v5.463c0 .797-.649 1.445-1.446 1.445H3.994a1.447 1.447 0 0 1-1.445-1.445V12.15l-.447.447a.643.643 0 0 1-.913 0 .645.645 0 0 1 0-.913l2.849-2.848v-4.19a.645.645 0 0 1 1.29 0v2.899l1.789-1.789a.645.645 0 0 1 .912 0Zm3.122 12.011c.086 0 .155-.07.155-.154v-6.754L7.573 7.125 3.84 10.86v6.754c0 .085.07.154.155.154h7.158Zm5.436-6.603h4.93c.817 0 1.482.665 1.482 1.482v4.93c0 .817-.665 1.482-1.483 1.482h-4.929a1.484 1.484 0 0 1-1.482-1.483v-4.929c0-.817.665-1.482 1.482-1.482Zm4.93 6.603a.192.192 0 0 0 .191-.192v-4.929a.192.192 0 0 0-.192-.192h-1.819v2.167a.645.645 0 0 1-1.29 0v-2.167h-1.82a.192.192 0 0 0-.192.192v4.93c0 .105.087.191.192.191h4.93Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m13.957 11.684-.177.177.177-.177ZM8.03 5.756l-.176.177.176-.177Zm5.928 6.84-.177-.176.177.177Zm-.912 0 .176-.176-.176.177Zm-.447-.446.176-.177-.426-.427v.604h.25Zm-10.05 0h.25v-.604l-.426.427.177.177Zm-.446.447.176.177-.176-.177Zm-.913 0-.177.177.177-.177Zm0-.913.177.177-.177-.177Zm2.849-2.848.176.176.074-.073v-.103h-.25Zm1.29-1.291h-.25v.603l.427-.426-.177-.177Zm1.789-1.789L6.94 5.58l.177.176Zm4.19 11.857v-.25h-.25v.25h.25Zm0 0v.25h.25v-.25h-.25Zm0-6.754h.25v-.103l-.073-.074-.177.177ZM7.573 7.125l.177-.176-.177-.177-.177.177.177.176ZM3.84 10.86l-.177-.177-.073.074v.103h.25ZM23 12.646h-.25.25Zm-1.29 4.93v-.25h-.25v.25h.25Zm0 0v.25h.25v-.25h-.25Zm-2.012-5.122v-.25h-.25v.25h.25Zm-1.29 0h.25v-.25h-.25v.25Zm-4.274-.947L8.206 5.58l-.353.353 5.927 5.928.354-.354Zm0 1.267a.895.895 0 0 0 0-1.267l-.354.354a.395.395 0 0 1 0 .559l.354.354Zm-.633.262a.893.893 0 0 0 .633-.262l-.354-.354a.394.394 0 0 1-.28.116v.5Zm-.633-.262a.893.893 0 0 0 .633.262v-.5a.393.393 0 0 1-.28-.116l-.353.354Zm-.447-.447.447.447.353-.354-.447-.447-.353.354Zm.427 5.286V12.15h-.5v5.463h.5Zm-1.696 1.695c.935 0 1.696-.76 1.696-1.695h-.5c0 .659-.537 1.195-1.196 1.195v.5Zm-7.158 0h7.158v-.5H3.994v.5Zm-1.695-1.695c0 .935.76 1.695 1.695 1.695v-.5a1.197 1.197 0 0 1-1.195-1.195h-.5Zm0-5.463v5.463h.5V12.15h-.5Zm-.02.624.446-.447-.353-.354-.447.447.353.354Zm-.634.262a.893.893 0 0 0 .633-.262l-.353-.354a.394.394 0 0 1-.28.116v.5Zm-.633-.262a.893.893 0 0 0 .633.262v-.5a.393.393 0 0 1-.28-.116l-.353.354Zm0-1.267a.895.895 0 0 0 0 1.267l.354-.354a.395.395 0 0 1 0-.559l-.354-.354ZM3.861 8.66l-2.849 2.848.354.354 2.848-2.849-.353-.353Zm-.073-4.014v4.19h.5v-4.19h-.5Zm.895-.895c-.494 0-.895.4-.895.895h.5c0-.218.177-.395.395-.395v-.5Zm.895.895c0-.494-.4-.895-.895-.895v.5c.218 0 .395.177.395.395h.5Zm0 2.9v-2.9h-.5v2.9h.5ZM6.94 5.58 5.152 7.368l.353.354 1.789-1.789-.354-.353Zm1.266 0a.895.895 0 0 0-1.266 0l.354.353a.395.395 0 0 1 .559 0l.353-.353Zm2.85 12.033c0-.053.043-.096.096-.096v.5a.405.405 0 0 0 .405-.404h-.5Zm.25-.25v.5-.5Zm-.25-6.504v6.754h.5v-6.754h-.5Zm-3.66-3.557 3.734 3.734.354-.354L7.75 6.95l-.354.353Zm-3.38 3.734L7.75 7.302l-.354-.353-3.734 3.733.354.354Zm.073 6.577v-6.754h-.5v6.754h.5Zm-.095-.096c.053 0 .095.043.095.096h-.5c0 .223.182.404.405.404v-.5Zm7.158 0H3.994v.5h7.158v-.5Zm10.365-6.603h-4.929v.5h4.93v-.5Zm1.733 1.732c0-.955-.777-1.732-1.733-1.732v.5c.68 0 1.233.553 1.233 1.232h.5Zm0 4.93v-4.93h-.5v4.93h.5Zm-1.733 1.732c.956 0 1.733-.777 1.733-1.733h-.5c0 .68-.553 1.233-1.233 1.233v.5Zm-4.929 0h4.93v-.5h-4.93v.5Zm-1.732-1.733c0 .956.777 1.733 1.732 1.733v-.5c-.679 0-1.232-.553-1.232-1.233h-.5Zm0-4.929v4.93h.5v-4.93h-.5Zm1.732-1.732c-.955 0-1.732.777-1.732 1.732h.5c0-.679.553-1.232 1.232-1.232v-.5Zm4.871 6.661c0-.032.026-.058.058-.058v.5a.442.442 0 0 0 .442-.442h-.5Zm.25-.25v.5-.5Zm-.25-4.679v4.93h.5v-4.93h-.5Zm.058.058a.058.058 0 0 1-.058-.058h.5a.442.442 0 0 0-.442-.442v.5Zm-1.819 0h1.82v-.5h-1.82v.5Zm.25 1.917v-2.167h-.5v2.167h.5Zm-.895.895c.494 0 .895-.4.895-.895h-.5a.395.395 0 0 1-.395.395v.5Zm-.895-.895c0 .495.4.895.895.895v-.5a.395.395 0 0 1-.395-.395h-.5Zm0-2.167v2.167h.5v-2.167h-.5Zm-1.57.25h1.82v-.5h-1.82v.5Zm.058-.058a.058.058 0 0 1-.058.058v-.5a.442.442 0 0 0-.442.442h.5Zm0 4.93v-4.93h-.5v4.93h.5Zm-.058-.059c.033 0 .058.026.058.058h-.5c0 .244.198.442.442.442v-.5Zm4.93 0h-4.93v.5h4.93v-.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgHouseBoxIcon;