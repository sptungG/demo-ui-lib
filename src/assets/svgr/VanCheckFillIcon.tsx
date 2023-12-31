import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgVanCheckFillIcon(props: ISvgProps) {
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
        d="M18.357 14.646c-.041-.025-.075-.059-.116-.075-.05-.034-.109-.059-.159-.084a2.815 2.815 0 0 0-1.242-.3c-.45 0-.867.109-1.242.3-.05.025-.109.05-.159.084-.041.025-.083.05-.116.075a2.622 2.622 0 0 0-1.117 2.15c0 .226.033.442.091.66.075.291.192.566.359.816.008.009.016.025.025.034.05.075.117.141.175.216.492.517 1.2.842 1.984.842s1.492-.325 1.984-.842c.059-.066.125-.133.175-.208.009-.008.017-.025.025-.033.167-.242.284-.517.359-.817.05-.209.091-.426.091-.659 0-.9-.441-1.684-1.117-2.16Zm-.175 2.8a1.526 1.526 0 0 1-1.342.785 1.526 1.526 0 0 1-1.342-.784 1.344 1.344 0 0 1-.184-.675c0-.809.684-1.46 1.526-1.46s1.526.66 1.526 1.46c0 .241-.075.466-.184.675Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.311 5h11.138c.859 0 1.56.667 1.55 1.492v9.463c0 .825-.7 1.492-1.558 1.492h-.467c.042-.208.067-.417.067-.633a3.202 3.202 0 0 0-3.21-3.194 3.197 3.197 0 0 0-3.21 3.194c0 .216.025.425.067.633h-3.385a3.31 3.31 0 0 0 .075-.65 3.213 3.213 0 0 0-1.359-2.618l-.15-.1c-.058-.033-.125-.067-.192-.1-.283-.15-.6-.25-.925-.309V6.492c0-.825.7-1.492 1.559-1.492Zm7.179 3.226a.605.605 0 0 1 .825 0 .554.554 0 0 1 .017.784l-3.035 2.91a.616.616 0 0 1-.417.166c-.15 0-.3-.058-.416-.166l-1.426-1.36a.549.549 0 0 1 0-.791.605.605 0 0 1 .825 0l1.01.967 2.617-2.51Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m8.64 14.614.046.032a2.626 2.626 0 0 1 1.117 2.16 2.61 2.61 0 0 1-.45 1.466l-.013.017a2.735 2.735 0 0 1-2.172 1.067 2.735 2.735 0 0 1-1.984-.842 2.33 2.33 0 0 0-.07-.086c-.038-.043-.074-.085-.105-.13a.115.115 0 0 1-.012-.017 2.609 2.609 0 0 1-.463-1.484 2.622 2.622 0 0 1 1.234-2.226c.038-.025.08-.046.12-.065l.038-.019c.376-.191.792-.3 1.243-.3.45 0 .867.117 1.242.3l.038.019c.04.02.082.04.12.065.026.01.048.026.071.043Zm-2.997 2.158c0 .8.683 1.459 1.525 1.459.842 0 1.526-.659 1.526-1.46 0-.8-.684-1.458-1.526-1.458s-1.525.65-1.525 1.459Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M4.443 7.843c-.684 0-1.3.275-1.743.708-.433.417-.7.992-.7 1.626v5.953c0 .725.617 1.317 1.376 1.317H4.026a3.305 3.305 0 0 1-.075-.65c0-1.084.542-2.035 1.359-2.618l.15-.1c.058-.042.125-.067.192-.1.425-.209.9-.342 1.4-.359V7.843h-2.61Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgVanCheckFillIcon;
