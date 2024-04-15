import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgContainerIcon(props: ISvgProps) {
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
        d="M16.983 10.996h3.041c1.09 0 1.976.851 1.976 1.897v6.413c0 1.046-.886 1.896-1.976 1.896H3.976c-1.09 0-1.976-.85-1.976-1.896v-6.413c0-1.046.886-1.897 1.976-1.897H6.92l3.34-3.088a1.703 1.703 0 0 1-.173-.75c0-.31.262-.562.586-.562.323 0 .586.252.586.563 0 .356.302.646.673.646.372 0 .674-.29.674-.646a.662.662 0 0 0-.674-.647.575.575 0 0 1-.586-.563v-.938c-.569-.12-.997-.607-.997-1.188v-.606c0-.671.569-1.217 1.268-1.217h.631c.699 0 1.267.546 1.267 1.217v.606c0 .581-.427 1.069-.997 1.188v.468c.732.235 1.26.9 1.26 1.68 0 .258-.058.504-.163.726l3.367 3.111Zm-4.734-7.082a.094.094 0 0 0 .095-.091v-.606a.094.094 0 0 0-.095-.092h-.631a.094.094 0 0 0-.096.092v.606c0 .05.043.091.096.091h.631Zm-.316 5.016c-.312 0-.606-.075-.864-.206L8.61 10.996h6.683L12.82 8.711c-.264.14-.566.22-.888.22Zm8.091 11.147c.444 0 .804-.346.804-.771v-6.413c0-.426-.36-.772-.804-.772H3.976c-.444 0-.804.346-.804.772v6.413c0 .425.36.771.804.771h16.048ZM4.4 13.737c0-.31.263-.563.586-.563.324 0 .586.252.586.563v4.725c0 .31-.262.562-.586.562a.575.575 0 0 1-.586-.562v-4.725Zm14.61-.563a.575.575 0 0 0-.586.563v4.725c0 .31.262.562.586.562a.575.575 0 0 0 .585-.562v-4.725a.575.575 0 0 0-.585-.563Zm-7.598.563c0-.31.262-.563.586-.563.324 0 .586.252.586.563v4.725c0 .31-.262.562-.586.562a.575.575 0 0 1-.586-.562v-4.725Zm-2.92-.583a.575.575 0 0 0-.586.562v4.725c0 .31.263.562.586.562a.575.575 0 0 0 .586-.562v-4.725a.575.575 0 0 0-.586-.562Zm6.41.562c0-.31.263-.562.586-.562.324 0 .586.252.586.562v4.725c0 .31-.262.562-.586.562a.575.575 0 0 1-.586-.562v-4.725Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m16.983 10.996-.17.184.072.066h.098v-.25ZM22 12.893h-.25.25ZM6.92 10.996v.25h.099l.071-.066-.17-.184Zm3.341-3.088.17.184.137-.126-.082-.167-.225.11Zm1.086-2.897h.25v-.203l-.198-.041-.052.244Zm1.172 0-.05-.244-.2.041v.203h.25Zm0 .468h-.25v.182l.174.056.076-.238Zm1.097 2.406-.226-.107-.078.166.135.124.17-.183Zm-2.547.839.114-.223-.155-.08-.129.119.17.184ZM8.61 10.996l-.17-.183-.468.433h.638v-.25Zm6.683 0v.25h.639l-.47-.433-.17.183ZM12.82 8.711l.17-.183-.13-.12-.157.082.117.221Zm7.203 2.035h-3.041v.5h3.041v-.5Zm2.226 2.147c0-1.194-1.008-2.147-2.226-2.147v.5c.961 0 1.726.749 1.726 1.647h.5Zm0 6.413v-6.413h-.5v6.413h.5Zm-2.226 2.146c1.218 0 2.226-.953 2.226-2.146h-.5c0 .898-.765 1.646-1.726 1.646v.5Zm-16.048 0h16.048v-.5H3.976v.5ZM1.75 19.306c0 1.193 1.008 2.146 2.226 2.146v-.5c-.961 0-1.726-.748-1.726-1.646h-.5Zm0-6.413v6.413h.5v-6.413h-.5Zm2.226-2.147c-1.218 0-2.226.953-2.226 2.147h.5c0-.898.765-1.647 1.726-1.647v-.5Zm2.945 0H3.976v.5H6.92v-.5Zm3.17-3.021-3.34 3.088.34.367 3.34-3.088-.34-.367Zm-.253-.566c0 .307.072.598.199.859l.45-.22a1.452 1.452 0 0 1-.15-.64h-.5Zm.836-.813c-.452 0-.836.354-.836.813h.5c0-.164.14-.313.336-.313v-.5Zm.836.813c0-.459-.384-.813-.836-.813v.5c.195 0 .336.15.336.313h.5Zm.423.396a.412.412 0 0 1-.423-.396h-.5c0 .504.424.896.923.896v-.5Zm.424-.396c0 .209-.18.396-.424.396v.5c.5 0 .924-.392.924-.896h-.5Zm-.424-.397c.244 0 .424.187.424.397h.5c0-.505-.424-.897-.924-.897v.5Zm-.836-.813c0 .458.384.813.836.813v-.5c-.195 0-.336-.15-.336-.313h-.5Zm0-.938v.938h.5v-.938h-.5ZM10.1 3.823c0 .71.52 1.291 1.196 1.433l.103-.49c-.463-.096-.799-.49-.799-.943h-.5Zm0-.606v.606h.5v-.606h-.5Zm1.518-1.467c-.828 0-1.518.648-1.518 1.467h.5c0-.524.447-.967 1.018-.967v-.5Zm.631 0h-.631v.5h.631v-.5Zm1.517 1.467c0-.819-.69-1.467-1.517-1.467v.5c.57 0 1.017.443 1.017.967h.5Zm0 .606v-.606h-.5v.606h.5Zm-1.195 1.433c.675-.142 1.195-.724 1.195-1.433h-.5c0 .454-.335.847-.798.944l.103.489Zm.198.223V5.01h-.5v.468h.5Zm1.26 1.68c0-.899-.607-1.652-1.433-1.918l-.153.476c.637.205 1.086.779 1.086 1.442h.5Zm-.186.832c.119-.254.186-.536.186-.832h-.5c0 .22-.05.43-.139.62l.453.212Zm3.31 2.822L13.785 7.7l-.34.367 3.367 3.112.34-.367Zm-5.059-6.99c0-.097.08-.159.155-.159v.5c.18 0 .345-.143.345-.341h-.5Zm0-.606v.606h.5v-.606h-.5Zm.155.158a.156.156 0 0 1-.155-.158h.5a.344.344 0 0 0-.345-.342v.5Zm-.631 0h.631v-.5h-.631v.5Zm.154-.158a.156.156 0 0 1-.154.158v-.5a.344.344 0 0 0-.346.342h.5Zm0 .606v-.606h-.5v.606h.5Zm-.154-.159c.075 0 .154.062.154.159h-.5c0 .198.165.341.346.341v-.5Zm.631 0h-.631v.5h.631v-.5Zm-1.294 5.282c.293.15.626.234.978.234v-.5c-.271 0-.527-.065-.75-.18l-.228.446ZM8.78 11.18l2.459-2.273-.34-.367-2.458 2.273.34.367Zm6.513-.434H8.61v.5h6.683v-.5ZM12.65 8.895l2.472 2.285.34-.367-2.472-2.285-.34.367Zm-.718.285c.364 0 .706-.09 1.005-.248l-.234-.442c-.228.121-.49.19-.77.19v.5Zm8.645 10.126a.54.54 0 0 1-.554.521v.5c.572 0 1.054-.448 1.054-1.021h-.5Zm0-6.413v6.413h.5v-6.413h-.5Zm-.554-.522a.54.54 0 0 1 .554.522h.5c0-.573-.482-1.022-1.054-1.022v.5Zm-16.048 0h16.048v-.5H3.976v.5Zm-.554.522a.54.54 0 0 1 .554-.522v-.5c-.572 0-1.054.449-1.054 1.022h.5Zm0 6.413v-6.413h-.5v6.413h.5Zm.554.521a.54.54 0 0 1-.554-.521h-.5c0 .573.482 1.021 1.054 1.021v-.5Zm16.048 0H3.976v.5h16.048v-.5ZM4.986 12.924a.825.825 0 0 0-.836.813h.5c0-.163.141-.313.336-.313v-.5Zm.836.813a.825.825 0 0 0-.836-.813v.5c.196 0 .336.15.336.313h.5Zm0 4.725v-4.725h-.5v4.725h.5Zm-.836.812c.452 0 .836-.354.836-.812h-.5c0 .163-.14.312-.336.312v.5Zm-.836-.812c0 .458.385.812.836.812v-.5c-.195 0-.336-.15-.336-.312h-.5Zm0-4.725v4.725h.5v-4.725h-.5Zm14.524 0c0-.163.14-.313.336-.313v-.5a.825.825 0 0 0-.836.813h.5Zm0 4.725v-4.725h-.5v4.725h.5Zm.336.312c-.196 0-.336-.15-.336-.312h-.5c0 .458.384.812.836.812v-.5Zm.335-.312c0 .163-.14.312-.335.312v.5c.451 0 .835-.354.835-.812h-.5Zm0-4.725v4.725h.5v-4.725h-.5Zm-.335-.313c.195 0 .335.15.335.313h.5a.824.824 0 0 0-.835-.813v.5Zm-7.012-.5a.825.825 0 0 0-.836.813h.5c0-.163.14-.313.336-.313v-.5Zm.836.813a.824.824 0 0 0-.836-.813v.5c.195 0 .336.15.336.313h.5Zm0 4.725v-4.725h-.5v4.725h.5Zm-.836.812c.452 0 .836-.354.836-.812h-.5c0 .163-.14.312-.336.312v.5Zm-.836-.812c0 .458.384.812.836.812v-.5c-.195 0-.336-.15-.336-.312h-.5Zm0-4.725v4.725h.5v-4.725h-.5Zm-3.006-.02c0-.164.141-.313.336-.313v-.5c-.452 0-.836.354-.836.812h.5Zm0 4.724v-4.725h-.5v4.725h.5Zm.336.312c-.195 0-.336-.15-.336-.312h-.5c0 .458.384.812.836.812v-.5Zm.336-.312c0 .163-.14.312-.336.312v.5c.452 0 .836-.354.836-.812h-.5Zm0-4.725v4.725h.5v-4.725h-.5Zm-.336-.312c.196 0 .336.15.336.312h.5a.825.825 0 0 0-.836-.812v.5Zm6.996-.5a.825.825 0 0 0-.836.812h.5c0-.163.141-.312.336-.312v-.5Zm.836.812a.825.825 0 0 0-.836-.812v.5c.196 0 .336.15.336.312h.5Zm0 4.725v-4.725h-.5v4.725h.5Zm-.836.812c.452 0 .836-.354.836-.812h-.5c0 .163-.14.312-.336.312v.5Zm-.836-.812c0 .458.384.812.836.812v-.5c-.195 0-.336-.15-.336-.312h-.5Zm0-4.725v4.725h.5v-4.725h-.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgContainerIcon;
