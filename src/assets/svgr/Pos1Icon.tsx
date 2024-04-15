import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPos1Icon(props: ISvgProps) {
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
        d="M18.936 2H5.716C4.774 2 4 2.776 4 3.724v16.552C4 21.224 4.773 22 5.717 22h13.219c.944 0 1.716-.776 1.716-1.724V3.724c0-.948-.772-1.724-1.716-1.724Zm.858 18.276a.863.863 0 0 1-.858.862H5.716a.863.863 0 0 1-.858-.862V3.724c0-.474.387-.862.859-.862h13.219c.472 0 .858.388.858.862v16.552Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M9.236 17.043h-2.66a.422.422 0 0 0-.43.431v1.94c0 .244.186.43.43.43h2.66c.243 0 .43-.186.43-.43v-1.94a.422.422 0 0 0-.43-.43Zm-.43 1.94H7.005v-1.078h1.803v1.078ZM13.657 17.043h-2.661a.422.422 0 0 0-.43.431v1.94c0 .244.186.43.43.43h2.66c.244 0 .43-.186.43-.43v-1.94c0-.244-.2-.43-.43-.43Zm-.43 1.94h-1.802v-1.078h1.802v1.078ZM9.236 13.307h-2.66a.422.422 0 0 0-.43.431v1.94c0 .244.186.431.43.431h2.66c.243 0 .43-.187.43-.43v-1.94a.431.431 0 0 0-.43-.432Zm-.43 1.94H7.005V14.17h1.803v1.078ZM13.657 13.307h-2.661a.422.422 0 0 0-.43.431v1.94c0 .244.186.431.43.431h2.66c.244 0 .43-.187.43-.43v-1.94c0-.23-.2-.432-.43-.432Zm-.43 1.94h-1.802V14.17h1.802v1.078ZM9.236 9.572h-2.66a.422.422 0 0 0-.43.43v1.94c0 .245.186.432.43.432h2.66c.243 0 .43-.187.43-.431v-1.94a.431.431 0 0 0-.43-.431Zm-.43 1.94H7.005v-1.078h1.803v1.078ZM13.657 9.572h-2.661a.422.422 0 0 0-.43.43v1.94c0 .245.186.432.43.432h2.66c.244 0 .43-.187.43-.431v-1.94c0-.23-.2-.431-.43-.431Zm-.43 1.94h-1.802v-1.078h1.802v1.078ZM18.063 13.307h-2.647a.422.422 0 0 0-.429.431v5.676c0 .244.186.43.43.43h2.646c.243 0 .429-.186.429-.43v-5.676c.014-.23-.186-.43-.43-.43Zm-.43 5.676h-1.788v-4.814h1.789v4.814ZM18.063 9.572h-2.647a.422.422 0 0 0-.429.43v1.94c0 .245.186.432.43.432h2.646c.243 0 .429-.187.429-.431v-1.94c.014-.23-.186-.431-.43-.431Zm-.43 1.94h-1.788v-1.078h1.789v1.078ZM18.063 4.155H6.575a.422.422 0 0 0-.43.431V7.82c0 .244.187.431.43.431h11.488c.243 0 .429-.187.429-.431V4.586c.014-.23-.186-.43-.43-.43Zm-.43 3.247H7.005v-2.37h10.63v2.37Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgPos1Icon;
