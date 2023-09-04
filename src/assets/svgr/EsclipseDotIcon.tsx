import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgEsclipseDotIcon(props: ISvgProps) {
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
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M2.515 32.931c-.005-.014-.005-.028-.01-.042 0-.014-.004-.028-.009-.046l-.018-.089a.98.98 0 0 0-1.143-.788.989.989 0 0 0-.78 1.156l.018.094c.004.014.004.032.009.046.005.014.005.033.01.047l.018.093a.986.986 0 0 0 1.156.779.99.99 0 0 0 .772-1.166l-.023-.084Z"
        fill="url(#esclipse-dot-icon_svg__a)"
      />
      <path
        d="M53.627 23.399c.005.014.005.028.01.042 0 .014.004.032.008.046l.02.089a.982.982 0 0 0 1.146.788.989.989 0 0 0 .781-1.156l-.018-.094c-.005-.014-.005-.032-.01-.046 0-.019-.004-.033-.009-.052l-.018-.093a.985.985 0 0 0-1.157-.778.991.991 0 0 0-.772 1.165l.019.089Z"
        fill="url(#esclipse-dot-icon_svg__b)"
      />
      <path
        d="M24.96.186C18.167.862 11.889 4.05 7.272 9.16A27.94 27.94 0 0 0 .077 27.928v.028c0 .546.44.989.98.989.542 0 .98-.443.98-.989v-.028c-.007-13.375 9.93-24.456 23.114-25.77a.985.985 0 0 0 .878-1.082.978.978 0 0 0-1.069-.89Z"
        fill="url(#esclipse-dot-icon_svg__c)"
      />
      <path
        d="M56.07 28.369a.986.986 0 0 0-.981-.988.988.988 0 0 0-.98.993v.056c.007 13.388-9.944 24.47-23.141 25.775a.987.987 0 0 0-.883 1.081.986.986 0 0 0 .976.895c.033 0 .065 0 .098-.004 6.797-.672 13.085-3.856 17.706-8.965a27.918 27.918 0 0 0 7.204-18.778v-.065Z"
        fill="url(#esclipse-dot-icon_svg__d)"
      />
      <defs>
        <linearGradient
          id="esclipse-dot-icon_svg__a"
          x1={1.21}
          y1={33.815}
          x2={2.954}
          y2={33.107}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08f" />
          <stop offset={1} stopColor="#33A0FF" />
        </linearGradient>
        <linearGradient
          id="esclipse-dot-icon_svg__b"
          x1={54.263}
          y1={23.996}
          x2={56.008}
          y2={23.29}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08f" />
          <stop offset={1} stopColor="#33A0FF" />
        </linearGradient>
        <linearGradient
          id="esclipse-dot-icon_svg__c"
          x1={8.732}
          y1={24.024}
          x2={31.111}
          y2={14.894}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08f" />
          <stop offset={1} stopColor="#33A0FF" />
        </linearGradient>
        <linearGradient
          id="esclipse-dot-icon_svg__d"
          x1={38.746}
          y1={51.255}
          x2={61.153}
          y2={42.114}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08f" />
          <stop offset={1} stopColor="#33A0ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgEsclipseDotIcon;
