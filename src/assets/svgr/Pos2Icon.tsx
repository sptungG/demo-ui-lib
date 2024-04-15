import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos2Icon(props: ISvgProps) {
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
        d="M17.097 6.567h-1.292V2.382a.374.374 0 0 0-.38-.382H8.812a.374.374 0 0 0-.38.382v4.185H7.14c-.633 0-1.14.51-1.14 1.145v13.143C6 21.491 6.507 22 7.14 22h9.957c.633 0 1.14-.509 1.14-1.145V7.712c0-.623-.506-1.145-1.14-1.145ZM9.192 2.763h5.84V8.4h-5.84V2.763Zm8.285 18.092a.374.374 0 0 1-.38.382H7.14a.382.382 0 0 1-.38-.382V7.712c0-.216.165-.381.38-.381h1.292v1.068h-.291a.374.374 0 0 0-.38.382c0 .216.165.382.38.382h7.955c.216 0 .38-.166.38-.382a.374.374 0 0 0-.38-.382h-.291V7.331h1.292c.215 0 .38.178.38.381v13.143Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M16.096 10.308H8.141a.374.374 0 0 0-.38.382v2.124c0 .216.165.382.38.382h7.955c.216 0 .38-.165.38-.382V10.69a.39.39 0 0 0-.38-.382Zm-.38 2.125H8.521v-1.349h7.195v1.349ZM9.104 14.48h-.976a.374.374 0 0 0-.38.383c0 .216.165.381.38.381h.976c.215 0 .38-.165.38-.381a.374.374 0 0 0-.38-.382ZM9.104 16.784h-.976a.374.374 0 0 0-.38.381c0 .217.165.382.38.382h.976c.215 0 .38-.165.38-.382a.374.374 0 0 0-.38-.381ZM9.104 19.1h-.976a.374.374 0 0 0-.38.38c0 .217.165.383.38.383h.976c.215 0 .38-.166.38-.382a.374.374 0 0 0-.38-.382ZM12.6 14.48h-.976a.374.374 0 0 0-.38.383c0 .216.165.381.38.381h.976c.215 0 .38-.165.38-.381a.374.374 0 0 0-.38-.382ZM12.6 16.784h-.976a.374.374 0 0 0-.38.381c0 .217.165.382.38.382h.976c.215 0 .38-.165.38-.382a.374.374 0 0 0-.38-.381ZM12.6 19.1h-.976a.374.374 0 0 0-.38.38c0 .217.165.383.38.383h.976c.215 0 .38-.166.38-.382a.374.374 0 0 0-.38-.382ZM16.096 14.48h-.975a.374.374 0 0 0-.38.383c0 .216.165.381.38.381h.975c.216 0 .38-.165.38-.381a.382.382 0 0 0-.38-.382ZM16.096 16.784h-.975a.374.374 0 0 0-.38.381c0 .217.165.382.38.382h.975c.216 0 .38-.165.38-.382a.382.382 0 0 0-.38-.381ZM16.096 19.1h-.975a.374.374 0 0 0-.38.38c0 .217.165.383.38.383h.975c.216 0 .38-.166.38-.382a.382.382 0 0 0-.38-.382ZM10.485 4.875h3.268c.215 0 .38-.165.38-.381a.374.374 0 0 0-.38-.382h-3.268a.374.374 0 0 0-.38.382c0 .203.164.381.38.381ZM10.485 7.064h3.268c.215 0 .38-.166.38-.382a.374.374 0 0 0-.38-.382h-3.268a.374.374 0 0 0-.38.382c0 .203.164.382.38.382Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos2Icon;
