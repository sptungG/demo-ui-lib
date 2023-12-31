import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageDeliveryCreditCardIcon(props: ISvgProps) {
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
        d="M19.814 5H4.186C2.98 5 2 6.023 2 7.28v9.036c0 1.258.98 2.28 2.186 2.28h15.628c1.206 0 2.186-1.022 2.186-2.28V7.281C22 6.023 21.02 5 19.814 5ZM3.172 7.28c0-.583.455-1.057 1.014-1.057h15.628c.56 0 1.014.474 1.014 1.058v.541H3.172v-.541Zm17.656 9.036c0 .584-.455 1.058-1.014 1.058H4.186c-.56 0-1.014-.475-1.014-1.058V12.41h17.656v3.906Zm0-5.13H3.172v-2.14h17.656v2.14Zm-2.6 3.04h-2.762a.6.6 0 0 0-.586.611.6.6 0 0 0 .586.612h2.762a.6.6 0 0 0 .586-.612.6.6 0 0 0-.586-.611Zm-12.48 0h7.79a.6.6 0 0 1 .585.611.6.6 0 0 1-.586.612h-7.79a.6.6 0 0 1-.585-.612.6.6 0 0 1 .586-.611Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M20.828 7.822v.25h.25v-.25h-.25Zm-17.656 0h-.25v.25h.25v-.25Zm17.656 8.494v-.25h-.25v.25h.25ZM3.172 12.41v-.25h-.25v.25h.25Zm17.656 0h.25v-.25h-.25v.25Zm0 3.906v.25h.25v-.25h-.25Zm-17.656-5.13h-.25v.25h.25v-.25Zm0-2.14v-.25h-.25v.25h.25Zm17.656 0h.25v-.25h-.25v.25Zm0 2.14v.25h.25v-.25h-.25Zm-2.014 3.651h.25-.25ZM4.186 5.25h15.628v-.5H4.186v.5ZM2.25 7.28c0-1.129.878-2.03 1.936-2.03v-.5c-1.354 0-2.436 1.145-2.436 2.53h.5Zm0 9.036V7.281h-.5v9.035h.5Zm1.936 2.03c-1.058 0-1.936-.9-1.936-2.03h-.5c0 1.386 1.082 2.53 2.436 2.53v-.5Zm15.628 0H4.186v.5h15.628v-.5Zm1.936-2.03c0 1.13-.878 2.03-1.936 2.03v.5c1.354 0 2.436-1.144 2.436-2.53h-.5Zm0-9.035v9.035h.5V7.281h-.5ZM19.814 5.25c1.058 0 1.936.901 1.936 2.03h.5c0-1.385-1.082-2.53-2.436-2.53v.5Zm-15.628.723c-.707 0-1.264.597-1.264 1.308h.5c0-.456.353-.808.764-.808v-.5Zm15.628 0H4.186v.5h15.628v-.5Zm1.264 1.308c0-.711-.557-1.308-1.264-1.308v.5c.411 0 .764.352.764.808h.5Zm0 .541v-.541h-.5v.541h.5Zm-17.906.25h17.656v-.5H3.172v.5Zm-.25-.791v.541h.5v-.541h-.5Zm16.892 10.343c.707 0 1.264-.597 1.264-1.308h-.5c0 .456-.353.808-.764.808v.5Zm-15.628 0h15.628v-.5H4.186v.5Zm-1.264-1.308c0 .711.557 1.308 1.264 1.308v-.5c-.411 0-.764-.352-.764-.808h-.5Zm0-3.906v3.906h.5V12.41h-.5Zm17.906-.25H3.172v.5h17.656v-.5Zm.25 4.156V12.41h-.5v3.906h.5Zm-.25.25v-.5.5Zm-17.656-5.13h17.656v-.5H3.172v.5Zm-.25-2.39v2.14h.5v-2.14h-.5Zm17.906-.25H3.172v.5h17.656v-.5Zm.25 2.39v-2.14h-.5v2.14h.5Zm-.25.25v-.5.5Zm-5.362 3.04h2.762v-.5h-2.762v.5Zm-.336.361c0-.21.16-.361.336-.361v-.5c-.472 0-.836.396-.836.861h.5Zm.336.362c-.176 0-.336-.152-.336-.362h-.5c0 .466.364.862.836.862v-.5Zm2.762 0h-2.762v.5h2.762v-.5Zm.336-.362c0 .21-.16.362-.336.362v.5c.472 0 .836-.396.836-.862h-.5Zm-.336-.361c.176 0 .336.151.336.361h.5c0-.465-.364-.861-.836-.861v.5Zm-4.69-.5h-7.79v.5h7.79v-.5Zm.835.861c0-.465-.364-.861-.836-.861v.5c.176 0 .336.151.336.361h.5Zm-.836.862c.472 0 .836-.396.836-.862h-.5c0 .21-.16.362-.336.362v.5Zm-7.79 0h7.79v-.5h-7.79v.5Zm-.835-.862c0 .466.364.862.836.862v-.5c-.176 0-.336-.152-.336-.362h-.5Zm.836-.861c-.472 0-.836.396-.836.861h.5c0-.21.16-.361.336-.361v-.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackageDeliveryCreditCardIcon;
