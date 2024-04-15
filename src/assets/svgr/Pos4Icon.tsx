import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos4Icon(props: ISvgProps) {
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
        d="M19.672 5.058h-.631V2.423A.414.414 0 0 0 18.62 2H9.442a.414.414 0 0 0-.421.423v2.65h-.983a2.57 2.57 0 0 0-2.47-1.86A2.575 2.575 0 0 0 3 5.79v13.63C3 20.844 4.15 22 5.568 22c1.165 0 2.161-.79 2.47-1.86h11.634c1.221 0 2.203-.987 2.203-2.213V7.27a2.212 2.212 0 0 0-2.203-2.213Zm-9.81-2.212h8.323v2.227H9.863V2.846ZM5.569 21.154a1.729 1.729 0 0 1-1.726-1.733V5.777c0-.958.772-1.733 1.726-1.733.983 0 1.726.831 1.726 1.733v13.63c0 .916-.73 1.747-1.726 1.747Zm15.465-3.241c0 .747-.603 1.367-1.36 1.367H8.135V5.918h11.536c.744 0 1.361.606 1.361 1.367v10.628Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M11.21 17.293H9.919a.414.414 0 0 0-.421.422c0 .24.182.423.42.423h1.292a.414.414 0 0 0 .42-.423.423.423 0 0 0-.42-.422ZM15.223 17.293h-1.277a.414.414 0 0 0-.42.422c0 .24.182.423.42.423h1.277a.414.414 0 0 0 .421-.423c.015-.24-.182-.422-.42-.422ZM19.251 17.293h-1.277a.414.414 0 0 0-.42.422c0 .24.181.423.42.423h1.277a.414.414 0 0 0 .421-.423.414.414 0 0 0-.42-.422ZM11.21 14.657H9.919a.414.414 0 0 0-.421.423c0 .24.182.422.42.422h1.292a.414.414 0 0 0 .42-.422.423.423 0 0 0-.42-.423ZM15.223 14.657h-1.277a.414.414 0 0 0-.42.423c0 .24.182.422.42.422h1.277a.414.414 0 0 0 .421-.422c.015-.24-.182-.423-.42-.423ZM19.251 14.657h-1.277a.414.414 0 0 0-.42.423c0 .24.181.422.42.422h1.277a.414.414 0 0 0 .421-.422.414.414 0 0 0-.42-.423ZM11.21 12.021H9.919a.414.414 0 0 0-.421.423c0 .24.182.423.42.423h1.292a.414.414 0 0 0 .42-.423.423.423 0 0 0-.42-.423ZM15.223 12.021h-1.277a.414.414 0 0 0-.42.423c0 .24.182.423.42.423h1.277a.414.414 0 0 0 .421-.423c.015-.24-.182-.423-.42-.423ZM19.251 12.021h-1.277a.414.414 0 0 0-.42.423c0 .24.181.423.42.423h1.277a.414.414 0 0 0 .421-.423.414.414 0 0 0-.42-.423ZM19.672 6.848H9.498a.414.414 0 0 0-.421.423v3.073c0 .24.182.423.42.423h10.175a.414.414 0 0 0 .421-.423V7.27a.423.423 0 0 0-.42-.423Zm-.42 3.073H9.918V7.694h9.332v2.227ZM5.568 6.961a.414.414 0 0 0-.42.423v10.43c0 .24.182.423.42.423a.414.414 0 0 0 .421-.423V7.384a.414.414 0 0 0-.42-.423Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos4Icon;
