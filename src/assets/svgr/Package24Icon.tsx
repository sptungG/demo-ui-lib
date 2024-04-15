import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackage24Icon(props: ISvgProps) {
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
        d="m20.645 7.52-.014-.026a.953.953 0 0 0-.068-.122l-2.671-4.81A1.076 1.076 0 0 0 16.957 2H7.764c-.385 0-.743.216-.936.563L4.114 7.47a.6.6 0 0 0-.055.137C4.021 7.714 4 7.83 4 7.951v12.67C4 21.382 4.594 22 5.323 22h14.074c.73 0 1.323-.618 1.323-1.378V7.905l-.001-.051a.603.603 0 0 0-.074-.334Zm-7.703-4.348h3.989l2.1 3.784h-6.089V3.172Zm-5.152 0h4.027v3.784h-6.12L7.79 3.172Zm11.805 17.45a.202.202 0 0 1-.198.206H5.323a.202.202 0 0 1-.198-.206V8.129h14.47v12.493Zm-7.489-3.332c-.085-.117-.181-.175-.29-.175H8.992v-.255c0-.198.11-.407.33-.627.221-.22.489-.44.804-.66.315-.22.631-.459.95-.718.317-.258.587-.574.807-.946.22-.372.33-.771.33-1.197 0-.636-.225-1.146-.675-1.53a2.384 2.384 0 0 0-1.6-.576c-.583 0-1.089.179-1.518.538-.43.358-.644.826-.644 1.403 0 .492.196.739.589.739.206 0 .37-.053.493-.158a.469.469 0 0 0 .184-.364c0-.318.085-.557.255-.717a.915.915 0 0 1 .652-.239c.312 0 .548.096.708.288.16.191.239.41.239.659 0 .277-.112.553-.336.83a4.959 4.959 0 0 1-.815.787l-.972.733a4.04 4.04 0 0 0-.741.827c-.204.304-.306.612-.306.923v1.029c0 .12.063.222.188.307a.67.67 0 0 0 .378.127h3.534c.106 0 .2-.061.283-.184a.749.749 0 0 0 .124-.428c0-.162-.042-.3-.127-.416Zm4.827-1.926c.128 0 .23.06.304.179.074.12.111.262.11.427 0 .153-.041.29-.126.413-.084.123-.18.184-.288.184h-.476v1.3c0 .14-.065.25-.193.33a.857.857 0 0 1-.466.121.863.863 0 0 1-.46-.121c-.132-.08-.198-.19-.198-.33v-1.3h-2.431a.436.436 0 0 1-.32-.125.445.445 0 0 1-.126-.333c0-.09.024-.181.071-.272l2.4-4.876a.567.567 0 0 1 .558-.356c.135 0 .278.052.43.153.152.103.228.227.228.375 0 .05-.017.11-.05.18l-1.945 4.05h1.185v-1.16c0-.147.064-.26.192-.337a.887.887 0 0 1 .466-.116c.183 0 .338.038.466.116.128.077.193.19.193.337v1.16h.476Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m20.63 7.494-.226.105.003.008.005.009.219-.122Zm.015.026-.219.121.219-.121Zm-.082-.148-.219.121.005.008.005.008.209-.137Zm-2.671-4.81.218-.122-.218.122Zm-11.064.001-.218-.12.218.12ZM4.114 7.47l-.219-.121.219.12Zm-.055.137.236.084.003-.01.003-.01-.242-.064Zm16.66.248-.25-.017v.03l.25-.013Zm-3.788-4.682.218-.121-.071-.129h-.147v.25Zm-3.989 0v-.25h-.25v.25h.25Zm6.09 3.784v.25h.425l-.207-.37-.218.12Zm-6.09 0h-.25v.25h.25v-.25Zm-1.125-3.784h.25v-.25h-.25v.25Zm-4.027 0v-.25h-.147l-.071.13.218.12Zm4.027 3.784v.25h.25v-.25h-.25Zm-6.12 0-.22-.12-.205.37h.424v-.25ZM5.124 8.13v-.25h-.25v.25h.25Zm14.47 0h.25v-.25h-.25v.25Zm-7.489 9.16-.202.148.202-.148Zm-3.114-.174h-.25v.25h.25v-.25Zm.33-.882-.176-.177.177.177Zm.804-.66-.143-.205.143.205Zm.95-.718.157.194-.158-.194Zm.807-.946-.215-.127.215.127Zm-.345-2.727.162-.19-.162.19Zm-3.118-.038.16.191-.16-.191Zm.438 1.984.162.19-.162-.19Zm.44-1.08.17.182-.17-.183Zm1.359.048.192-.16-.192.16Zm-.097 1.489-.194-.158.194.158Zm-.815.787.15.2.004-.003-.154-.197Zm-.972.733-.15-.2-.006.005-.006.005.162.19Zm-.741.827.207.14-.207-.14Zm-.306 1.952h.25-.25Zm.188.307.14-.207-.14.207Zm4.195-.057.207.14-.207-.14Zm.124-.428h-.25.25Zm5.004-2.163.212-.132-.212.132Zm.11.427h-.25.25Zm-.126.413.206.142-.206-.142Zm-.764.184v-.25h-.25v.25h.25Zm-.193 1.63.133.212-.133-.212Zm-.927 0 .131-.213-.13.213Zm-.197-1.63h.25v-.25h-.25v.25Zm-2.75-.125.175-.178-.175.178Zm-.056-.605.222.116.003-.005-.225-.11Zm2.4-4.876.225.11.003-.006-.227-.104Zm.988-.203.14-.207-.14.207Zm.178.554.225.109-.226-.109Zm-1.945 4.052-.226-.108-.171.358h.397v-.25Zm1.185 0v.25h.25v-.25h-.25Zm.192-1.498-.129-.214.13.214Zm.932 0 .13-.214-.13.214Zm.193 1.498h-.25v.25h.25v-.25Zm3.955-7.748.014.025.437-.243-.014-.025-.437.243Zm-.058-.107a.7.7 0 0 1 .05.09l.453-.21a1.207 1.207 0 0 0-.085-.154l-.418.274Zm-2.68-4.826 2.67 4.81.437-.242-2.67-4.81-.438.242Zm-.717-.433c.29 0 .566.163.716.433l.437-.243a1.326 1.326 0 0 0-1.153-.69v.5Zm-9.193 0h9.193v-.5H7.764v.5Zm-.717.434a.826.826 0 0 1 .717-.434v-.5c-.48 0-.92.268-1.154.692l.437.242ZM4.332 7.59l2.715-4.906-.437-.242-2.715 4.906.437.242Zm-.031.08a.351.351 0 0 1 .032-.08l-.438-.242a.85.85 0 0 0-.077.194l.483.128Zm-.051.281c0-.092.016-.18.045-.26l-.471-.168a1.278 1.278 0 0 0-.074.428h.5Zm0 12.67V7.952h-.5v12.67h.5Zm1.073 1.129c-.582 0-1.073-.497-1.073-1.128h-.5c0 .888.696 1.628 1.573 1.628v-.5Zm14.074 0H5.323v.5h14.074v-.5Zm1.073-1.128c0 .631-.49 1.128-1.073 1.128v.5c.877 0 1.573-.74 1.573-1.628h-.5Zm0-12.717v12.717h.5V7.905h-.5Zm0-.038v.038h.5l-.001-.064-.5.026Zm-.044-.226c.034.061.048.13.044.196l.498.034a.853.853 0 0 0-.105-.473l-.437.243Zm-3.495-4.719h-3.989v.5h3.989v-.5Zm2.32 3.913-2.102-3.784-.437.243 2.101 3.784.437-.243Zm-6.309.371h6.09v-.5h-6.09v.5Zm-.25-4.034v3.784h.5V3.172h-.5Zm-.875-.25H7.79v.5h4.027v-.5Zm.25 4.034V3.172h-.5v3.784h.5Zm-6.37.25h6.12v-.5h-6.12v.5Zm1.875-4.155L5.478 6.835l.437.242 2.094-3.784-.437-.242Zm11.825 18.027a.452.452 0 0 0 .448-.456h-.5c0-.01.004-.02.012-.028a.057.057 0 0 1 .04-.016v.5Zm-14.074 0h14.074v-.5H5.323v.5Zm-.448-.456c0 .242.192.456.448.456v-.5c.018 0 .033.008.04.016a.04.04 0 0 1 .012.028h-.5Zm0-12.493v12.493h.5V8.129h-.5Zm14.72-.25H5.125v.5h14.47v-.5Zm.25 12.743V8.129h-.5v12.493h.5Zm-8.028-3.257c.003 0 .033-.003.087.072l.404-.295c-.115-.157-.279-.277-.492-.277v.5Zm-2.825 0h2.824v-.5H8.992v.5Zm-.25-.505v.255h.5v-.255h-.5Zm.404-.804c-.242.24-.404.51-.404.804h.5c0-.102.058-.252.257-.45l-.353-.354Zm.837-.688a6.274 6.274 0 0 0-.837.688l.353.354c.208-.208.464-.418.77-.632l-.286-.41Zm.935-.707a16 16 0 0 1-.935.707l.286.41c.32-.223.641-.466.964-.729l-.315-.388Zm.75-.88c-.206.349-.456.641-.75.88l.315.388c.342-.278.63-.616.865-1.013l-.43-.254Zm.295-1.069c0 .38-.098.735-.295 1.07l.43.254c.242-.41.365-.852.365-1.324h-.5Zm-.588-1.34c.39.332.588.77.588 1.34h.5c0-.703-.253-1.285-.763-1.72l-.325.38Zm-1.436-.516c.559 0 1.034.172 1.436.516l.325-.38a2.634 2.634 0 0 0-1.761-.636v.5Zm-1.359.48c.382-.32.831-.48 1.359-.48v-.5c-.64 0-1.203.198-1.68.596l.321.383Zm-.554 1.21c0-.504.184-.901.554-1.21l-.32-.384c-.488.408-.734.947-.734 1.595h.5Zm.339.49c-.14 0-.207-.042-.246-.09-.048-.06-.093-.18-.093-.4h-.5c0 .274.054.524.202.71.157.198.385.28.637.28v-.5Zm.33-.098c-.066.057-.167.098-.33.098v.5c.248 0 .476-.064.655-.218l-.324-.38Zm.097-.174c0 .051-.018.107-.096.174l.325.38a.718.718 0 0 0 .271-.554h-.5Zm.334-.899c-.237.222-.334.538-.334.9h.5c0-.277.073-.439.176-.535l-.342-.365Zm.823-.307c-.32 0-.6.098-.823.307l.342.365a.666.666 0 0 1 .48-.172v-.5Zm.9.377c-.22-.262-.534-.377-.9-.377v.5c.258 0 .415.077.515.198l.385-.32Zm.297.82c0-.307-.1-.583-.297-.82l-.385.32c.123.147.182.31.182.5h.5Zm-.392.987c.25-.308.392-.638.392-.987h-.5c0 .205-.082.427-.28.672l.388.315Zm-.855.827c.332-.258.618-.534.855-.827l-.388-.315c-.21.26-.468.51-.774.747l.307.395Zm-.975.736.972-.734-.301-.399-.972.734.301.399Zm-.685.767c.19-.284.423-.543.696-.776l-.324-.381a4.29 4.29 0 0 0-.787.878l.415.279Zm-.263.783c0-.253.082-.513.263-.783l-.415-.279c-.227.338-.348.693-.348 1.062h.5Zm0 1.029v-1.029h-.5v1.029h.5Zm.078.1c-.077-.052-.078-.085-.078-.1h-.5c0 .225.124.397.299.514l.28-.414Zm.238.084a.422.422 0 0 1-.238-.084l-.28.414c.159.107.333.17.518.17v-.5Zm3.534 0H8.292v.5h3.534v-.5Zm.075-.074a.246.246 0 0 1-.062.069c-.009.006-.012.005-.013.005v.5c.22 0 .381-.133.49-.295l-.415-.279Zm.082-.288c0 .117-.03.21-.082.288l.415.28a.998.998 0 0 0 .167-.568h-.5Zm-.079-.27c.05.069.08.154.079.27h.5c0-.208-.055-.4-.175-.564l-.404.295Zm5.545-2.025a.592.592 0 0 0-.516-.297v.5c.032 0 .057.007.091.061l.425-.264Zm.149.56c0-.205-.046-.395-.15-.56l-.424.264a.544.544 0 0 1 .074.295h.5Zm-.17.554a.961.961 0 0 0 .17-.555h-.5c0 .103-.028.191-.083.271l.412.284Zm-.495.292c.219 0 .382-.13.494-.292l-.412-.284a.248.248 0 0 1-.063.069c-.01.007-.016.007-.02.007v.5Zm-.476 0h.476v-.5h-.476v.5Zm.25 1.05v-1.3h-.5v1.3h.5Zm-.31.541a.623.623 0 0 0 .31-.542h-.5c0 .046-.013.08-.076.12l.266.422Zm-.599.16c.22 0 .424-.049.6-.16l-.267-.423a.608.608 0 0 1-.333.083v.5Zm-.591-.158c.176.108.376.158.591.158v-.5a.614.614 0 0 1-.33-.084l-.261.426Zm-.317-.544c0 .238.12.424.317.544l.261-.426c-.067-.041-.078-.075-.078-.118h-.5Zm0-1.3v1.3h.5v-1.3h-.5Zm-2.181.25h2.43v-.5h-2.43v.5Zm-.495-.195a.686.686 0 0 0 .495.196v-.5c-.07 0-.11-.02-.144-.053l-.35.357Zm-.2-.512c0 .194.06.374.201.512l.35-.357c-.028-.028-.052-.07-.052-.155h-.5Zm.099-.387a.833.833 0 0 0-.1.387h.5c0-.045.012-.097.043-.156l-.443-.231Zm2.397-4.871-2.4 4.876.449.22 2.4-4.875-.449-.221Zm.782-.496a.862.862 0 0 0-.472.129.849.849 0 0 0-.313.374l.455.207a.354.354 0 0 1 .127-.16.365.365 0 0 1 .203-.05v-.5Zm.57.196a1.03 1.03 0 0 0-.57-.196v.5c.07 0 .166.027.291.111l.278-.415Zm.338.582c0-.251-.136-.446-.338-.582l-.28.415c.102.068.118.123.118.167h.5Zm-.075.288a.675.675 0 0 0 .075-.288h-.5l-.003.014a.385.385 0 0 1-.023.057l.45.216Zm-1.945 4.051 1.945-4.051-.45-.217-1.946 4.052.451.216Zm.96-.358h-1.185v.5h1.185v-.5Zm-.25-.911v1.16h.5v-1.16h-.5Zm.313-.551a.62.62 0 0 0-.313.551h.5c0-.058.017-.09.072-.123l-.259-.428Zm.595-.152c-.218 0-.42.046-.595.152l.258.428c.082-.05.19-.08.337-.08v-.5Zm.595.152a1.135 1.135 0 0 0-.595-.152v.5c.147 0 .255.03.337.08l.258-.428Zm.314.551a.621.621 0 0 0-.313-.551l-.26.428c.056.033.073.065.073.123h.5Zm0 1.16v-1.16h-.5v1.16h.5Zm.226-.25h-.476v.5h.476v-.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackage24Icon;