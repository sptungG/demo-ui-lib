import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSettingsIcon(props: ISvgProps) {
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
        d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m2.43 8.576 1.82-3.152a1 1 0 0 1 1.17-.453l1.836.585a7.971 7.971 0 0 1 1.535-.886l.412-1.884A1 1 0 0 1 10.18 2h3.64a1 1 0 0 1 .977.786l.412 1.884a7.973 7.973 0 0 1 1.535.886l1.837-.585a1 1 0 0 1 1.17.453l1.82 3.152a1 1 0 0 1-.193 1.24l-1.425 1.298a7.981 7.981 0 0 1 0 1.772l1.425 1.299a1 1 0 0 1 .192 1.239l-1.82 3.152a1 1 0 0 1-1.17.453l-1.836-.585a7.967 7.967 0 0 1-1.535.886l-.412 1.884a1 1 0 0 1-.977.786h-3.64a1 1 0 0 1-.977-.786l-.412-1.884a7.967 7.967 0 0 1-1.535-.886l-1.837.585a1 1 0 0 1-1.17-.453l-1.82-3.152a1 1 0 0 1 .193-1.24l1.425-1.298a7.973 7.973 0 0 1 0-1.772L2.622 9.815a1 1 0 0 1-.192-1.239ZM13.015 4l.458 2.092.933.41c.211.092.416.196.614.312l.003.002c.184.107.363.224.536.351l.82.604 2.042-.65 1.015 1.758-1.583 1.443.112 1.012c.024.221.037.442.036.663v.004c0 .222-.012.443-.036.665l-.112 1.012 1.583 1.443-1.015 1.758-2.041-.65-.821.604a5.99 5.99 0 0 1-.543.355l-.003.002a5.97 5.97 0 0 1-.607.309l-.933.409L13.015 20h-2.03l-.458-2.092-.933-.41a5.991 5.991 0 0 1-.573-.288l-.003-.002a5.975 5.975 0 0 1-.577-.375l-.82-.604-2.042.65-1.015-1.758 1.583-1.443-.112-1.012a5.973 5.973 0 0 1-.036-.664v-.004c0-.221.011-.443.036-.664l.112-1.012-1.583-1.443L5.58 7.121l2.041.65.821-.604a5.97 5.97 0 0 1 .57-.371l.004-.002a5.97 5.97 0 0 1 .58-.293l.932-.409L10.985 4h2.03Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSettingsIcon;
