import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWineJarIcon(props: ISvgProps) {
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
        d="M9.833 2a1 1 0 0 0-1 1v3.333a1 1 0 0 0 .835.987c-.062.296-.191.54-.416.7a1.55 1.55 0 0 1-.338.15c-.197.07-.442.14-.736.216-.144.038-.302.077-.468.119-.476.118-1.022.255-1.533.417-.69.22-1.452.524-2.054 1.005-.637.51-1.123 1.245-1.123 2.24 0 2.818 1.4 5.323 2.7 7.058a19.718 19.718 0 0 0 2.414 2.661c.074.067.133.119.175.155l.05.042.014.013.004.003.002.002.641-.768-.64.769a1 1 0 0 0 .64.231h6.667a1 1 0 0 0 .64-.231l-.64-.769.64.768h.001l.002-.002.004-.003.014-.013a6.995 6.995 0 0 0 .224-.197 19.712 19.712 0 0 0 2.414-2.661c1.302-1.735 2.7-4.24 2.7-7.058 0-.995-.485-1.73-1.122-2.24-.602-.48-1.363-.786-2.054-1.005a25.67 25.67 0 0 0-1.533-.417c-.166-.042-.324-.081-.469-.119a9.29 9.29 0 0 1-.735-.215 1.549 1.549 0 0 1-.338-.151c-.225-.16-.354-.404-.416-.7a1 1 0 0 0 .835-.987V3a1 1 0 0 0-1-1h-5Zm1.854 5.333h1.293l.006.057c.08.669.365 1.614 1.266 2.257.26.185.563.313.834.409.28.1.592.186.9.266.182.048.364.093.545.138.457.114.908.226 1.354.368.622.198 1.1.413 1.41.661.274.22.372.422.372.678 0 2.181-1.101 4.26-2.3 5.858a17.722 17.722 0 0 1-2.08 2.308H9.38a17.727 17.727 0 0 1-2.08-2.308C6.101 16.426 5 14.348 5 12.167c0-.256.097-.458.372-.678.31-.248.788-.463 1.41-.66a22.21 22.21 0 0 1 1.354-.37c.181-.044.363-.09.545-.137.308-.08.62-.167.9-.266.271-.096.575-.224.834-.409.9-.643 1.185-1.588 1.266-2.257l.006-.057Zm-.853-2V4h3v1.333h-3Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWineJarIcon;
