import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgConnectionsIcon(props: ISvgProps) {
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
        d="m19.531 17.062.005-.124c3.434.141 3.435 5.045 0 5.187h-.004c-1.97.02-3.229-2.176-2.268-3.855l-1.298-1.299c-2.209 1.835-5.723 1.835-7.931 0l-1.3 1.299c.962 1.679-.297 3.874-2.267 3.855V22A2.472 2.472 0 0 1 2 19.53l17.531-2.469Zm0 0v-.125c-.457 0-.887.12-1.26.328l-1.3-1.3c1.835-2.208 1.835-5.722 0-7.93l1.299-1.3m1.261 10.327L18.27 6.736m3.855-2.268a2.596 2.596 0 0 0-2.593-2.593c-1.97-.019-3.229 2.176-2.268 3.855L22 4.47m.125 0H22m.125 0v-.001H22m.125 0c.019 1.97-2.176 3.229-3.855 2.268M22 4.469c.019 1.905-2.144 3.112-3.75 2.11l.089.088-.07.069M12 8.15c-2.243-.005-3.396 2.68-1.953 4.3A3.857 3.857 0 0 0 8.2 15.152C5.567 12.04 7.8 7.05 12 7.062c4.2-.013 6.433 4.98 3.8 8.09a3.858 3.858 0 0 0-1.847-2.7c1.443-1.622.29-4.306-1.953-4.3Zm0 0v.125-.125Zm7.531-4.854c.645 0 1.17.524 1.172 1.17-.067 1.556-2.277 1.556-2.344 0a1.173 1.173 0 0 1 1.172-1.17ZM4.47 5.641c-.645 0-1.17-.525-1.172-1.17.067-1.557 2.277-1.556 2.344 0a1.173 1.173 0 0 1-1.172 1.17Zm0 15.062c-.645 0-1.17-.524-1.172-1.17.067-1.556 2.277-1.556 2.344 0a1.173 1.173 0 0 1-1.172 1.17Zm9.958-4.935v.533c-1.467.845-3.387.845-4.854 0v-.533c.136-3.223 4.719-3.22 4.854 0Zm-3.599-5.023c0-.645.525-1.17 1.17-1.172 1.557.067 1.556 2.277 0 2.344a1.173 1.173 0 0 1-1.17-1.172Zm8.703 9.958c-.645 0-1.17-.524-1.172-1.17.067-1.556 2.277-1.556 2.344 0a1.173 1.173 0 0 1-1.172 1.17Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.25}
      />
    </svg>
  );
}

export default SvgConnectionsIcon;
