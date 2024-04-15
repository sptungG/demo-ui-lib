import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSnapchatIcon(props: ISvgProps) {
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
        d="M12.166 3c.796 0 3.495.223 4.77 3.073.425.959.323 2.589.24 3.898l-.003.047c-.01.146-.018.278-.024.41a.62.62 0 0 0 .322.072c.241-.013.53-.096.831-.241a.81.81 0 0 1 .373-.084c.146 0 .29.023.41.072.36.12.59.385.59.674.012.361-.314.675-.976.939-.07.023-.169.061-.276.096-.363.109-.917.289-1.073.651-.072.181-.049.421.098.697l.012.013c.048.109 1.228 2.795 3.854 3.229a.401.401 0 0 1 .337.409c0 .06-.013.119-.036.181-.193.457-1.023.795-2.53 1.021-.047.073-.096.302-.132.459-.022.144-.06.289-.107.444-.06.218-.217.325-.446.325h-.024a2.45 2.45 0 0 1-.433-.059 4.799 4.799 0 0 0-1.024-.108c-.24 0-.48.012-.732.06-.483.084-.904.373-1.386.71-.687.481-1.469 1.036-2.649 1.036-.048 0-.096-.012-.146-.012h-.119c-1.18 0-1.951-.543-2.637-1.036-.481-.338-.89-.626-1.373-.711a5.507 5.507 0 0 0-.745-.06c-.435 0-.771.072-1.023.12-.17.035-.314.059-.435.059a.45.45 0 0 1-.47-.337c-.048-.154-.07-.313-.107-.456-.038-.146-.085-.396-.133-.458-1.543-.179-2.373-.517-2.565-.986a.473.473 0 0 1-.044-.181.398.398 0 0 1 .337-.409c2.625-.434 3.805-3.119 3.854-3.232l.013-.023c.145-.277.18-.52.096-.699-.156-.349-.711-.529-1.07-.65a1.759 1.759 0 0 1-.279-.096c-.89-.35-1.011-.748-.962-1.024.072-.384.541-.637.939-.637.117 0 .217.023.308.06.337.155.635.241.888.241a.742.742 0 0 0 .373-.085l-.041-.458c-.08-1.307-.182-2.935.247-3.889 1.236-2.836 3.93-3.054 4.724-3.054L12.117 3h.05Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSnapchatIcon;
