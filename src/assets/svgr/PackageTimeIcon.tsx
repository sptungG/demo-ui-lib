import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageTimeIcon(props: ISvgProps) {
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
        d="M17.317 7.173v6.414c1.617.594 2.779 2.2 2.779 4.084 0 2.387-1.864 4.329-4.156 4.329-1.81 0-3.355-1.213-3.923-2.9H4.39c-.766 0-1.39-.65-1.39-1.45V7.225c0-.209.06-.403.162-.565l2.242-4.137A.997.997 0 0 1 6.271 2h7.776c.356 0 .688.2.866.52l2.273 4.154.002.003c.082.145.13.315.13.496Zm-3.343-4h-3.236v3.02h4.89l-1.654-3.02Zm-4.362 0H6.344l-1.637 3.02h4.905v-3.02ZM4.39 17.927h7.402a4.694 4.694 0 0 1-.007-.256c0-2.387 1.864-4.328 4.155-4.328.085 0 .169.003.252.008V7.365H4.126v10.286a.27.27 0 0 0 .264.276Zm8.52-.256c0 1.74 1.36 3.157 3.03 3.157 1.671 0 3.03-1.416 3.03-3.157 0-1.74-1.359-3.156-3.03-3.156-1.67 0-3.03 1.416-3.03 3.156Zm3.593-.586h1.2c.312 0 .563.262.563.586a.575.575 0 0 1-.562.587H15.94a.575.575 0 0 1-.563-.587v-1.954c0-.324.252-.586.563-.586.31 0 .563.262.563.586v1.368Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M17.317 13.587h-.25v.175l.164.06.086-.235Zm2.779 4.084h.25-.25ZM12.017 19.1l.237-.08-.057-.17h-.18v.25ZM3.162 6.66l.212.133.004-.007.004-.007-.22-.12Zm2.242-4.137L5.185 2.4v.001l.22.12Zm9.51-.002.218-.12-.219.12Zm2.272 4.154.226-.108-.006-.012-.22.12Zm.002.003-.226.108.004.007.004.008.218-.123Zm-6.45-3.504v-.25h-.25v.25h.25Zm3.236 0 .22-.12-.072-.13h-.148v.25Zm-3.236 3.02h-.25v.25h.25v-.25Zm4.89 0v.25h.421l-.202-.37-.22.12Zm-9.284-3.02v-.25h-.149l-.07.13.219.12Zm3.268 0h.25v-.25h-.25v.25Zm-4.905 3.02-.22-.12-.2.37h.42v-.25Zm4.905 0v.25h.25v-.25h-.25Zm2.18 11.734v.25h.265l-.015-.264-.25.014Zm-.007-.256h-.25.25Zm4.407-4.32-.016.25.266.016v-.266h-.25Zm0-5.986h.25v-.25h-.25v.25Zm-12.066 0v-.25h-.25v.25h.25Zm12.377 9.72h-.25v.25h.25v-.25Zm1.064-3.498V7.173h-.5v6.414h.5Zm2.779 4.084c0-1.987-1.226-3.688-2.942-4.318l-.173.469c1.517.557 2.615 2.068 2.615 3.85h.5ZM15.94 22.25c2.44 0 4.406-2.064 4.406-4.579h-.5c0 2.259-1.762 4.079-3.906 4.079v.5Zm-4.16-3.071c.6 1.78 2.233 3.071 4.16 3.071v-.5c-1.695 0-3.15-1.136-3.686-2.73l-.473.159Zm-7.39.17h7.627v-.5H4.39v.5Zm-1.64-1.698c0 .927.726 1.698 1.64 1.698v-.5c-.619 0-1.14-.528-1.14-1.198h-.5Zm0-10.427V17.65h.5V7.224h-.5Zm.2-.698c-.126.2-.2.44-.2.698h.5c0-.16.046-.308.124-.432l-.423-.266Zm2.234-4.124L2.942 6.54l.44.238 2.242-4.137-.44-.239Zm1.087-.652c-.451 0-.865.252-1.086.65l.438.243a.747.747 0 0 1 .648-.393v-.5Zm7.776 0H6.271v.5h7.776v-.5Zm1.085.65a1.247 1.247 0 0 0-1.085-.65v.5c.262 0 .512.147.647.392l.438-.243Zm2.274 4.154L15.132 2.4l-.438.24 2.273 4.154.439-.24Zm.007.014-.001-.002-.45.217v.002l.45-.217Zm.154.605c0-.225-.059-.437-.162-.62l-.435.247a.755.755 0 0 1 .098.373h.5Zm-6.83-3.75h3.237v-.5h-3.236v.5Zm.25 2.77v-3.02h-.5v3.02h.5Zm4.64-.25h-4.89v.5h4.89v-.5Zm-1.872-2.65 1.653 3.02.439-.24-1.653-3.02-.439.24Zm-7.411.13h3.268v-.5H6.344v.5ZM4.927 6.311l1.637-3.02-.44-.239-1.636 3.02.44.239Zm4.685-.37H4.707v.5h4.905v-.5Zm-.25-2.77v3.02h.5v-3.02h-.5Zm2.43 14.505H4.39v.5h7.402v-.5Zm-.257-.005c0 .09.003.18.008.269l.499-.028a4.426 4.426 0 0 1-.007-.242h-.5Zm4.405-4.58c-2.439 0-4.405 2.064-4.405 4.58h.5c0-2.26 1.761-4.08 3.905-4.08v-.5Zm.268.01a4.347 4.347 0 0 0-.268-.01v.5c.079 0 .158.003.236.008l.032-.499Zm-.266-5.737v5.986h.5V7.365h-.5Zm-11.816.25h12.066v-.5H4.126v.5Zm.25 10.036V7.365h-.5v10.286h.5Zm.014.026s-.002 0-.006-.004a.031.031 0 0 1-.008-.022h-.5c0 .28.22.526.514.526v-.5Zm11.55 2.9c-1.523 0-2.78-1.294-2.78-2.906h-.5c0 1.869 1.462 3.407 3.28 3.407v-.5Zm2.78-2.906c0 1.612-1.256 2.907-2.78 2.907v.5c1.819 0 3.28-1.538 3.28-3.407h-.5Zm-2.78-2.906c1.524 0 2.78 1.294 2.78 2.906h.5c0-1.868-1.461-3.406-3.28-3.406v.5Zm-2.78 2.906c0-1.612 1.257-2.906 2.78-2.906v-.5c-1.818 0-3.28 1.538-3.28 3.406h.5Zm4.544-.836h-1.201v.5h1.2v-.5Zm.812.836c0-.452-.354-.836-.812-.836v.5c.163 0 .312.14.312.336h.5Zm-.812.837c.458 0 .812-.385.812-.837h-.5c0 .196-.15.337-.312.337v.5Zm-1.764 0h1.764v-.5H15.94v.5Zm-.813-.837c0 .452.355.837.813.837v-.5c-.163 0-.313-.141-.313-.337h-.5Zm0-1.954v1.954h.5v-1.954h-.5Zm.813-.836c-.458 0-.813.384-.813.836h.5c0-.195.15-.336.313-.336v-.5Zm.813.836c0-.452-.355-.836-.813-.836v.5c.163 0 .313.14.313.336h.5Zm0 1.368v-1.368h-.5v1.368h.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackageTimeIcon;
