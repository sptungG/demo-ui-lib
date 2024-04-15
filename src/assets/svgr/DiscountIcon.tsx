import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgDiscountIcon(props: ISvgProps) {
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
        d="M20.851 13.764c.677-.11 1.149-.647 1.149-1.305 0-.658-.473-1.194-1.149-1.305a.192.192 0 0 1-.17-.162.186.186 0 0 1 .102-.207c.596-.326.849-.986.614-1.604-.235-.618-.87-.967-1.546-.85a.202.202 0 0 1-.22-.097.176.176 0 0 1 .02-.223l.007-.007a1.264 1.264 0 0 0 .002-1.705 1.403 1.403 0 0 0-1.755-.292.203.203 0 0 1-.239-.02c-.041-.033-.105-.107-.06-.221.237-.617-.012-1.277-.606-1.606a1.403 1.403 0 0 0-1.754.3.202.202 0 0 1-.231.06c-.051-.017-.137-.066-.137-.188.004-.657-.466-1.196-1.142-1.31-.676-.115-1.31.238-1.54.857a.197.197 0 0 1-.196.132.197.197 0 0 1-.195-.132c-.232-.62-.866-.972-1.541-.858-.676.115-1.146.654-1.143 1.311a.196.196 0 0 1-.14.196.188.188 0 0 1-.217-.058l-.017-.02-.013-.012A1.402 1.402 0 0 0 7 4.16c-.594.329-.843.99-.605 1.606.044.114-.02.188-.061.221a.203.203 0 0 1-.239.02 1.403 1.403 0 0 0-1.755.292c-.44.503-.44 1.203.002 1.705l.014.017c.059.066.066.137.022.211a.211.211 0 0 1-.23.1c-.675-.118-1.31.231-1.545.85-.235.617.018 1.277.614 1.603.11.06.111.156.101.207a.192.192 0 0 1-.169.162C2.472 11.264 2 11.8 2 12.459c0 .658.472 1.194 1.149 1.305.125.021.16.11.17.162a.185.185 0 0 1-.102.207c-.596.326-.849.986-.614 1.604.235.618.87.967 1.546.85.125-.022.19.05.217.096a.182.182 0 0 1-.022.228 1.264 1.264 0 0 0-.004 1.708 1.403 1.403 0 0 0 1.755.292.203.203 0 0 1 .239.02c.041.033.105.107.06.221-.238.62.012 1.282.608 1.612.592.328 1.31.204 1.747-.3l.01-.013a.202.202 0 0 1 .226-.053c.051.018.137.066.137.188-.004.657.466 1.197 1.142 1.31.085.015.169.022.252.022.576 0 1.086-.338 1.289-.879a.197.197 0 0 1 .195-.132c.055 0 .153.017.195.132.232.62.866.972 1.541.858.676-.115 1.146-.654 1.143-1.311-.001-.122.085-.17.136-.188a.202.202 0 0 1 .23.06c.44.505 1.16.63 1.755.3.594-.329.843-.99.605-1.606-.044-.114.02-.188.061-.221a.203.203 0 0 1 .239-.02 1.403 1.403 0 0 0 1.755-.292 1.264 1.264 0 0 0-.004-1.708.182.182 0 0 1-.021-.228.199.199 0 0 1 .216-.096c.676.117 1.311-.232 1.546-.85.235-.619-.018-1.278-.614-1.604a.185.185 0 0 1-.101-.207.192.192 0 0 1 .169-.162Zm-.198-1.109c-.582.096-1.025.518-1.128 1.075-.102.558.163 1.1.676 1.38.101.056.132.137.093.242-.04.104-.119.147-.233.127a1.39 1.39 0 0 0-1.444.641c-.295.49-.24 1.087.143 1.519.075.085.075.171 0 .257-.074.085-.163.1-.263.043a1.415 1.415 0 0 0-1.585.13 1.276 1.276 0 0 0-.408 1.473c.04.105.01.186-.091.242-.1.055-.19.04-.264-.046a1.406 1.406 0 0 0-1.536-.398c-.555.194-.912.685-.909 1.251 0 .112-.057.178-.171.197-.115.02-.193-.024-.232-.128-.2-.534-.71-.878-1.301-.878s-1.102.344-1.301.878c-.04.104-.117.148-.232.128-.114-.019-.172-.085-.171-.197.003-.566-.354-1.057-.91-1.25a1.406 1.406 0 0 0-1.535.397l-.011.013c-.071.078-.156.091-.251.038-.07-.039-.144-.113-.093-.247a1.276 1.276 0 0 0-.408-1.474 1.415 1.415 0 0 0-1.585-.129c-.1.057-.19.042-.264-.043-.075-.086-.074-.172 0-.257a1.268 1.268 0 0 0 .144-1.519 1.39 1.39 0 0 0-1.444-.64c-.115.02-.193-.024-.232-.128-.04-.105-.01-.186.092-.241.513-.28.779-.823.676-1.38-.103-.558-.545-.98-1.128-1.076-.115-.019-.173-.085-.173-.196s.058-.177.173-.196c.583-.096 1.025-.518 1.128-1.076.103-.557-.163-1.1-.676-1.38-.101-.055-.132-.136-.092-.24.04-.105.117-.148.232-.129a1.4 1.4 0 0 0 1.456-.643 1.254 1.254 0 0 0-.14-1.5L5.24 7.28c-.075-.085-.075-.171 0-.257.074-.085.163-.1.263-.044.51.286 1.133.236 1.585-.128.453-.365.613-.943.408-1.474-.04-.105-.01-.186.091-.242.1-.055.19-.04.264.045l.017.02.013.012c.376.416.962.563 1.503.375.557-.195.915-.689.912-1.26 0-.11.057-.177.171-.196.115-.02.193.024.232.128.2.534.71.878 1.301.878s1.102-.344 1.301-.878c.04-.104.117-.148.232-.128.114.019.172.085.171.197-.003.566.354 1.057.91 1.25a1.406 1.406 0 0 0 1.535-.398c.075-.085.163-.1.264-.045.1.056.131.137.09.242a1.276 1.276 0 0 0 .409 1.473 1.415 1.415 0 0 0 1.585.13c.1-.057.19-.042.264.043.075.086.074.172 0 .257l-.007.007a1.263 1.263 0 0 0-.14 1.51c.296.492.864.744 1.447.642.114-.02.193.023.232.128.04.105.01.186-.092.241-.513.28-.779.822-.676 1.38.103.558.546.98 1.128 1.076.115.018.173.085.173.196s-.058.177-.173.196Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M13.96 12.948a1.637 1.637 0 0 0-.537-.6 6.004 6.004 0 0 0-.695-.386 8.217 8.217 0 0 0-.695-.294 1.716 1.716 0 0 1-.537-.302.56.56 0 0 1-.216-.437c0-.208.088-.37.266-.489.177-.118.429-.177.754-.177.294 0 .562.055.803.164.24.11.388.164.442.164.145 0 .259-.068.343-.205a.763.763 0 0 0 .127-.399.448.448 0 0 0-.186-.355 1.191 1.191 0 0 0-.478-.222 4.775 4.775 0 0 0-.678-.115v-.92a.575.575 0 0 0-.587-.562.575.575 0 0 0-.587.563v.997a2.489 2.489 0 0 0-.68.286c-.216.131-.39.316-.519.553-.13.237-.194.51-.194.82 0 .277.053.524.158.74.105.216.244.39.415.52.172.129.361.246.569.35.208.103.414.197.618.28.205.084.393.17.564.26.172.09.31.202.416.337.105.136.158.29.158.463a.63.63 0 0 1-.29.562c-.192.127-.433.19-.721.19-.211 0-.404-.035-.578-.107a1.332 1.332 0 0 1-.402-.238 3.083 3.083 0 0 0-.289-.239.473.473 0 0 0-.266-.107c-.132 0-.251.068-.356.203a.656.656 0 0 0-.158.402c0 .266.204.51.613.735.277.152.591.253.942.302v.867c0 .31.263.563.587.563a.575.575 0 0 0 .587-.563v-.894c.356-.073.66-.213.913-.42.394-.32.59-.777.59-1.368 0-.352-.071-.659-.216-.921Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgDiscountIcon;
