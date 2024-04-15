import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBillIcon(props: ISvgProps) {
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
        d="M9.38 11.715a1.258 1.258 0 0 0-.424-.454 4.807 4.807 0 0 0-.549-.291 6.72 6.72 0 0 0-.548-.223 1.37 1.37 0 0 1-.424-.228.417.417 0 0 1 .04-.7c.14-.09.338-.134.594-.134.233 0 .444.042.634.124.19.083.306.125.349.125a.307.307 0 0 0 .27-.156.56.56 0 0 0 .1-.301c0-.103-.048-.193-.146-.269A.959.959 0 0 0 8.9 9.04a3.918 3.918 0 0 0-.535-.087V8.26c0-.235-.207-.426-.463-.426s-.463.19-.463.426v.753c-.19.047-.37.119-.537.216-.17.1-.307.24-.409.418a1.23 1.23 0 0 0-.153.62c0 .21.041.396.124.56.083.163.193.294.328.392.135.098.285.187.449.265.163.079.326.15.487.213.162.063.31.128.445.196a.977.977 0 0 1 .328.255.54.54 0 0 1 .125.35.47.47 0 0 1-.228.425 1.048 1.048 0 0 1-.57.143 1.231 1.231 0 0 1-.773-.261 2.402 2.402 0 0 0-.227-.18.383.383 0 0 0-.21-.082c-.105 0-.199.052-.282.154a.485.485 0 0 0-.124.304c0 .2.16.386.484.556.218.115.466.19.743.228v.655c0 .235.207.425.463.425s.463-.19.463-.425v-.675c.28-.056.52-.162.72-.318.31-.242.466-.587.466-1.034 0-.266-.057-.498-.17-.697Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M18.134 3.19h-3.126A1.538 1.538 0 0 0 13.51 2h-2.99c-.728 0-1.34.509-1.496 1.19H5.977C4.887 3.19 4 4.073 4 5.161v14.865C4 21.115 4.887 22 5.977 22h12.157c1.09 0 1.976-.885 1.976-1.973V5.162a1.977 1.977 0 0 0-1.976-1.973Zm-7.976.343c0-.2.163-.362.363-.362h2.99c.2 0 .363.162.363.362v.717c0 .2-.163.363-.363.363h-2.99a.363.363 0 0 1-.363-.363v-.717Zm7.976 17.296H5.977a.804.804 0 0 1-.804-.802V5.162c0-.442.36-.802.804-.802H8.99a1.537 1.537 0 0 0 1.531 1.423h2.99c.81 0 1.475-.629 1.532-1.423h3.09c.444 0 .805.36.805.802v14.865c0 .442-.361.802-.804.802Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M17.14 8.436h-5.715a.586.586 0 1 0 0 1.173h5.715a.586.586 0 0 0 0-1.173ZM17.14 12.513h-5.715a.587.587 0 0 0 0 1.173h5.715a.586.586 0 0 0 0-1.173ZM17.14 16.571h-5.715a.587.587 0 0 0 0 1.173h5.715a.586.586 0 0 0 0-1.173ZM9.157 16.498H6.769a.586.586 0 0 0 0 1.173h2.388a.586.586 0 1 0 0-1.172Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgBillIcon;
