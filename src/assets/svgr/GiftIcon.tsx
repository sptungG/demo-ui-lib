import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGiftIcon(props: ISvgProps) {
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
        d="M3.25 12.501v7.895c0 .726.561 1.316 1.25 1.316h6.25V12.5h-7.5ZM20.75 7.238h-3.955c.284-.204.527-.407.697-.588 1.01-1.067 1.01-2.804 0-3.871-.98-1.04-2.687-1.037-3.666 0-.542.572-1.98 2.902-1.781 4.459h-.09c.197-1.557-1.24-3.887-1.781-4.46-.98-1.036-2.688-1.036-3.666 0C5.5 3.847 5.5 5.584 6.506 6.65c.171.181.415.384.699.588H3.25c-.689 0-1.25.59-1.25 1.316v1.973c0 .364.28.658.625.658h8.125V8.554h2.5v2.631h8.125c.345 0 .625-.295.625-.658V8.554c0-.725-.56-1.316-1.25-1.316Zm-10.074-.044s-.052.044-.231.044c-.864 0-2.513-.945-3.051-1.516a1.49 1.49 0 0 1 0-2.016c.253-.268.59-.416.947-.416s.693.148.947.416c.842.892 1.68 3.171 1.388 3.488Zm2.878.044c-.178 0-.23-.042-.23-.044-.291-.317.546-2.596 1.389-3.488a1.315 1.315 0 0 1 1.893 0c.525.556.525 1.46 0 2.016-.539.571-2.187 1.516-3.052 1.516ZM13.25 12.501v9.21h6.25c.69 0 1.25-.589 1.25-1.315V12.5h-7.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgGiftIcon;
