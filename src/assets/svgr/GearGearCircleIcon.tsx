import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGearGearCircleIcon(props: ISvgProps) {
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
        d="M11.132 16.625c0-.326.03-.643.077-.95a3.827 3.827 0 0 1-3.741-3.827 3.836 3.836 0 0 1 3.837-3.837c1.765 0 3.242 1.199 3.684 2.83a6.268 6.268 0 0 1 4.316-.183l.988-.901a.95.95 0 0 0 .183-1.19L18.73 5.545a.943.943 0 0 0-1.123-.431l-1.765.556a6.563 6.563 0 0 0-.69-.45c-.25-.145-.518-.279-.787-.404l-.374-1.803a.964.964 0 0 0-.94-.758H9.559a.954.954 0 0 0-.93.758l-.394 1.803c-.259.115-.508.24-.748.374-.25.144-.499.307-.729.48l-1.765-.566a.976.976 0 0 0-1.122.432L2.125 8.567a.967.967 0 0 0 .192 1.19l1.362 1.247a8.303 8.303 0 0 0-.048.844c0 .278.019.566.048.853L2.317 13.95a.95.95 0 0 0-.183 1.19l1.746 3.02c.22.394.69.576 1.123.432l1.765-.556c.24.173.489.336.738.48.24.134.48.259.73.374l.393 1.803c.096.432.48.748.93.748h3.492a.89.89 0 0 0 .278-.048 6.263 6.263 0 0 1-2.197-4.767Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.314 13.306a2.861 2.861 0 0 0-.383-.192l-.192-.892a.471.471 0 0 0-.46-.374H16.56a.471.471 0 0 0-.46.374l-.192.892a4.3 4.3 0 0 0-.365.182c-.124.068-.24.144-.354.23l-.864-.277a.462.462 0 0 0-.546.21l-.854 1.488a.468.468 0 0 0 .086.585l.671.613c-.019.144-.019.279-.019.423 0 .134.01.278.02.422l-.672.614a.468.468 0 0 0-.086.585l.854 1.487a.466.466 0 0 0 .546.21l.864-.277c.115.086.24.163.364.24.115.066.24.124.365.182l.191.892c.049.22.24.374.46.374h1.718c.22 0 .413-.154.46-.374l.192-.892c.135-.058.26-.125.384-.192.115-.067.23-.144.345-.22l.864.277a.462.462 0 0 0 .546-.21l.854-1.488a.468.468 0 0 0-.086-.585L21.175 17c.01-.163.01-.297.01-.441 0-.134-.01-.278-.02-.413l.672-.613a.468.468 0 0 0 .087-.585l-.854-1.487a.466.466 0 0 0-.547-.211l-.863.278c-.115-.087-.23-.154-.346-.22Zm-1.899 5.142c1.046 0 1.89-.844 1.89-1.89 0-1.046-.844-1.89-1.89-1.89-1.046 0-1.89.844-1.89 1.89a1.9 1.9 0 0 0 1.89 1.89Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgGearGearCircleIcon;
