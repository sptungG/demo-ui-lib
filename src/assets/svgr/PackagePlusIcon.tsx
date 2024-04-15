import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackagePlusIcon(props: ISvgProps) {
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
        d="m20.323 7.494.015.026c.061.105.085.221.078.334a.95.95 0 0 1 .001.05v12.718A1.38 1.38 0 0 1 19.039 22H4.379A1.38 1.38 0 0 1 3 20.622V7.952a.99.99 0 0 1 .062-.346.588.588 0 0 1 .057-.137l2.827-4.906c.2-.347.574-.563.975-.563h9.576c.4 0 .773.215.973.562l2.783 4.81c.026.039.05.08.07.122ZM16.47 3.172h-4.154v3.784h6.343L16.47 3.172Zm-5.327 0H6.948L4.767 6.956h6.375V3.172Zm7.897 17.656a.206.206 0 0 0 .206-.206V8.129H4.172v12.493c0 .113.093.206.206.206h14.66Zm-6.724-6.936h1.892a.586.586 0 1 1 0 1.172h-1.892v1.892a.586.586 0 1 1-1.172 0v-1.892H9.25a.586.586 0 0 1 0-1.172h1.892V12a.586.586 0 1 1 1.172 0v1.892Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m20.338 7.52.217-.125-.217.125Zm-.015-.026-.225.109.004.008.005.008.216-.125Zm.093.36-.25-.018v.031l.25-.013ZM3.062 7.606l.234.087.004-.01.003-.01-.241-.067Zm.057-.137.216.125-.216-.125Zm2.827-4.906.217.125-.217-.125Zm11.524-.001-.216.125.216-.125Zm2.783 4.81-.217.125.005.008.005.008.207-.14Zm-7.938-4.2v-.25h-.25v.25h.25Zm4.154 0 .217-.125-.072-.125h-.145v.25Zm-4.154 3.784h-.25v.25h.25v-.25Zm6.343 0v.25h.434l-.217-.375-.217.125ZM6.948 3.172v-.25h-.144l-.072.125.216.125Zm4.194 0h.25v-.25h-.25v.25ZM4.767 6.956l-.217-.124-.216.374h.433v-.25Zm6.375 0v.25h.25v-.25h-.25Zm8.103 1.173h.25v-.25h-.25v.25Zm-15.073 0v-.25h-.25v.25h.25Zm8.143 5.763h-.25v.25h.25v-.25Zm2.478.586h-.25.25Zm-2.478.586v-.25h-.25v.25h.25Zm-1.172 0h.25v-.25h-.25v.25Zm0-1.172v.25h.25v-.25h-.25Zm9.412-6.498-.015-.025-.433.25.015.026.433-.25Zm.11.478a.835.835 0 0 0-.11-.477l-.433.25c.035.06.049.127.044.191l.499.036Zm.002.033c0-.022 0-.044-.002-.064l-.5.026c.002.013.002.026.002.038h.5Zm0 12.717V7.905h-.5v12.717h.5Zm-1.628 1.628a1.63 1.63 0 0 0 1.628-1.628h-.5a1.13 1.13 0 0 1-1.128 1.128v.5Zm-14.66 0h14.66v-.5H4.379v.5ZM2.75 20.622c0 .898.73 1.628 1.628 1.628v-.5a1.13 1.13 0 0 1-1.128-1.128h-.5Zm0-12.67v12.67h.5V7.952h-.5Zm.077-.433a1.24 1.24 0 0 0-.077.432h.5a.74.74 0 0 1 .046-.258l-.469-.174Zm.075-.175a.838.838 0 0 0-.081.196l.482.133a.339.339 0 0 1 .032-.08l-.433-.249ZM5.73 2.438 2.902 7.344l.433.25 2.828-4.906-.433-.25Zm1.19-.688c-.49 0-.946.263-1.19.688l.433.25a.878.878 0 0 1 .758-.438v-.5Zm9.577 0H6.92v.5h9.576v-.5Zm1.19.687a1.378 1.378 0 0 0-1.19-.687v.5c.31 0 .601.168.757.437l.433-.25Zm2.782 4.81-2.782-4.81-.433.25 2.782 4.81.433-.25Zm.08.138a1.186 1.186 0 0 0-.09-.154l-.413.282c.02.029.037.059.052.09l.45-.218Zm-8.234-3.963h4.154v-.5h-4.154v.5Zm.25 3.534V3.172h-.5v3.784h.5Zm6.093-.25h-6.343v.5h6.343v-.5Zm-2.405-3.409 2.189 3.785.433-.25-2.19-3.785-.432.25Zm-9.305.125h4.194v-.5H6.948v.5Zm-1.964 3.66 2.18-3.785-.432-.25L4.55 6.832l.434.25Zm6.158-.376H4.767v.5h6.375v-.5Zm-.25-3.534v3.784h.5V3.172h-.5Zm8.103 17.45c0-.025.02-.044.044-.044v.5a.456.456 0 0 0 .456-.456h-.5Zm0-12.493v12.493h.5V8.129h-.5Zm-14.823.25h15.073v-.5H4.172v.5Zm.25 12.243V8.129h-.5v12.493h.5Zm-.044-.044c.025 0 .044.02.044.044h-.5c0 .251.205.456.456.456v-.5Zm14.66 0H4.379v.5h14.66v-.5Zm-4.831-6.936h-1.892v.5h1.892v-.5Zm.836.836a.836.836 0 0 0-.836-.836v.5c.186 0 .336.15.336.336h.5Zm-.836.836a.836.836 0 0 0 .836-.836h-.5c0 .186-.15.336-.336.336v.5Zm-1.892 0h1.892v-.5h-1.892v.5Zm.25 1.642v-1.892h-.5v1.892h.5Zm-.836.837a.836.836 0 0 0 .836-.837h-.5c0 .186-.15.337-.336.337v.5Zm-.836-.837c0 .462.374.837.836.837v-.5a.336.336 0 0 1-.336-.337h-.5Zm0-1.892v1.892h.5v-1.892h-.5Zm-1.642.25h1.892v-.5H9.25v.5Zm-.837-.836c0 .462.375.836.837.836v-.5a.336.336 0 0 1-.337-.336h-.5Zm.837-.836a.836.836 0 0 0-.837.836h.5c0-.185.151-.336.337-.336v-.5Zm1.892 0H9.25v.5h1.892v-.5ZM10.893 12v1.892h.5V12h-.5Zm.836-.836a.836.836 0 0 0-.836.836h.5c0-.186.15-.336.336-.336v-.5Zm.836.836a.836.836 0 0 0-.836-.836v.5c.186 0 .336.15.336.336h.5Zm0 1.892V12h-.5v1.892h.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackagePlusIcon;
