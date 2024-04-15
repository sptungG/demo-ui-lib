import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageInfoIcon(props: ISvgProps) {
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
        d="M17.317 13.587V7.173c0-.181-.047-.35-.13-.496v-.003L14.912 2.52a.997.997 0 0 0-.866-.52H6.271c-.357 0-.689.2-.867.522L3.162 6.659A1.055 1.055 0 0 0 3 7.224V17.65c0 .798.624 1.448 1.39 1.448h7.627C12.585 20.787 14.13 22 15.94 22c2.292 0 4.156-1.942 4.156-4.329 0-1.884-1.162-3.49-2.779-4.084Zm-6.58-10.415h3.237l1.653 3.02h-4.89v-3.02Zm-4.393 0h3.268v3.02H4.707l1.637-3.02Zm5.448 14.755H4.39a.27.27 0 0 1-.264-.276V7.365h12.066v5.986a4.032 4.032 0 0 0-.252-.008c-2.291 0-4.155 1.941-4.155 4.328 0 .086.002.171.007.256Zm4.148 2.9c-1.67 0-3.03-1.415-3.03-3.156 0-1.74 1.36-3.156 3.03-3.156 1.671 0 3.03 1.416 3.03 3.156 0 1.74-1.359 3.157-3.03 3.157Zm0-3.781a.575.575 0 0 0-.563.586v1.69c0 .324.252.587.563.587.311 0 .563-.263.563-.587v-1.69a.575.575 0 0 0-.563-.586Zm.552-1.123a.599.599 0 0 1-.336.656.623.623 0 0 1-.16.042.537.537 0 0 1-.368-.095.499.499 0 0 1-.086-.073.503.503 0 0 1-.098-.139.561.561 0 0 1-.056-.161.575.575 0 0 1 .014-.285.53.53 0 0 1 .07-.155.497.497 0 0 1 .111-.128.562.562 0 0 1 .302-.13.525.525 0 0 1 .32.066.53.53 0 0 1 .17.145.495.495 0 0 1 .061.096.657.657 0 0 1 .056.161Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M17.317 13.587h-.25v.175l.164.06.086-.235Zm-.13-6.91-.224.11.003.006.004.007.218-.123Zm0-.003.224-.11-.005-.01-.22.12ZM14.912 2.52l.22-.12-.001-.001-.219.121Zm-9.509.002L5.185 2.4v.002l.22.119ZM3.162 6.659l.212.134.004-.007.004-.008-.22-.119Zm8.855 12.44.237-.08-.057-.17h-.18v.25Zm8.079-1.428h.25-.25ZM13.974 3.173l.22-.12-.072-.13h-.148v.25Zm-3.236 0v-.25h-.25v.25h.25Zm4.89 3.02v.25h.42l-.202-.37-.219.12Zm-4.89 0h-.25v.25h.25v-.25Zm-1.126-3.02h.25v-.25h-.25v.25Zm-3.268 0v-.25h-.149l-.07.13.219.12Zm3.268 3.02v.25h.25v-.25h-.25Zm-4.905 0-.22-.12-.2.37h.42v-.25ZM4.39 17.927v-.25h-.25v.25h.25Zm7.402 0v.25h.265l-.015-.264-.25.014Zm-7.402 0v.25h.25v-.25h-.25ZM4.126 7.365v-.25h-.25v.25h.25Zm12.066 0h.25v-.25h-.25v.25Zm0 5.986-.016.25.266.016v-.266h-.25Zm-4.407 4.32h-.25.25Zm4.715-1.69.249-.025-.249.024Zm-.008-.058-.246.045v.004l.246-.049Zm.008.173.249.024-.249-.024Zm-.008.057-.245-.05-.001.004.246.046Zm-.014.055-.239-.073-.001.005.24.068Zm-.018.054.232.094.001-.004-.233-.09Zm-.024.052-.222-.114.222.114Zm-.028.05-.21-.137-.001.003.211.133Zm-.033.046-.197-.154.197.154Zm-.037.043-.178-.176-.005.005.183.17Zm-.04.038.16.19h.001l-.162-.19Zm-.045.035-.142-.206h-.002l.143.206Zm-.048.029-.121-.218.121.218Zm-.05.024.096.232.005-.003-.1-.229Zm-.051.02-.075-.239.075.239Zm-.054.014-.048-.246-.005.001.053.245Zm-.055.008.026.249h.001l-.026-.249Zm-.11 0-.028.249h.001l.027-.249Zm-.055-.008.054-.245h-.006l-.048.245Zm-.053-.014-.076.238h.002l.074-.238Zm-.052-.02-.101.23.005.001.096-.23Zm-.05-.024-.122.218.122-.218Zm-.047-.03-.142.207.142-.206Zm-.045-.034.165-.188-.003-.002-.162.19Zm-.04-.038.18-.174-.003-.002-.178.175Zm-.038-.043-.197.154.197-.154Zm-.033-.047.212-.133-.002-.002-.21.135Zm-.051-.1.233-.09-.002-.005-.231.094Zm-.033-.11-.245.049.245-.05Zm-.008-.057-.249.024.25-.024Zm0-.116.249.025-.249-.025Zm.008-.057-.245-.05v.001l.245.05Zm.014-.055.24.068-.24-.068Zm.019-.054.231.094.002-.005-.233-.09Zm.023-.052.222.114-.222-.114Zm.028-.05.212.134-.212-.133Zm.033-.046.195.157.004-.005-.199-.152Zm.037-.043-.18-.173.18.173Zm.041-.038.163.19.002-.002-.165-.188Zm.045-.035-.142-.206-.003.003.145.203Zm.047-.03.121.22-.121-.22Zm.05-.023.096.23.004-.001-.1-.23Zm.052-.02-.074-.239h-.002l.076.24Zm.053-.014-.053-.244.053.244Zm.055-.008-.027-.25v.001l.027.248Zm.11 0-.026.248.027-.248Zm.055.008-.053.244.053-.244Zm.054.014-.076.239h.002l.074-.239Zm.052.02-.1.229.004.001.096-.23Zm.05.024-.122.218.121-.218Zm.047.03.144-.205-.144.204Zm.044.034.162-.19-.162.19Zm.041.038-.183.17.002.003.181-.173Zm.037.043-.199.152.004.005.195-.157Zm.033.046-.211.134.211-.133Zm.028.05-.222.114.222-.114Zm.024.052.233-.09-.001-.004-.232.094Zm.018.054-.24.068.001.005.24-.073Zm.59-8.695v6.414h.5V7.173h-.5ZM16.97 6.8a.754.754 0 0 1 .098.373h.5c0-.225-.06-.437-.163-.62l-.435.247Zm-.008-.016v.002l.45-.22-.001-.001-.45.22ZM14.694 2.64l2.273 4.155.439-.24L15.132 2.4l-.438.24Zm-.647-.39c.262 0 .512.147.647.392l.438-.243a1.247 1.247 0 0 0-1.085-.649v.5Zm-7.776 0h7.776v-.5H6.271v.5Zm-.648.393a.747.747 0 0 1 .648-.393v-.5c-.451 0-.865.252-1.086.65l.438.243ZM3.382 6.778l2.242-4.137-.44-.238L2.942 6.54l.44.238Zm-.132.446c0-.16.046-.308.123-.431l-.422-.267c-.127.201-.201.441-.201.698h.5Zm0 10.427V7.224h-.5V17.65h.5Zm1.14 1.198c-.619 0-1.14-.528-1.14-1.198h-.5c0 .927.726 1.698 1.64 1.698v-.5Zm7.627 0H4.39v.5h7.627v-.5Zm3.923 2.901c-1.695 0-3.15-1.136-3.686-2.73l-.474.159c.6 1.78 2.233 3.071 4.16 3.071v-.5Zm3.906-4.079c0 2.259-1.762 4.079-3.906 4.079v.5c2.44 0 4.406-2.064 4.406-4.579h-.5Zm-2.615-3.849c1.517.557 2.615 2.068 2.615 3.85h.5c0-1.988-1.226-3.69-2.942-4.32l-.173.47Zm-3.257-10.9h-3.236v.5h3.236v-.5Zm1.872 3.15-1.652-3.02-.439.24 1.653 3.02.438-.24Zm-5.108.37h4.89v-.5h-4.89v.5Zm-.25-3.27v3.02h.5v-3.02h-.5Zm-.876-.25H6.344v.5h3.268v-.5Zm.25 3.27v-3.02h-.5v3.02h.5Zm-5.155.25h4.905v-.5H4.707v.5Zm1.417-3.389-1.636 3.02.44.239 1.636-3.02-.44-.239ZM4.39 18.177h7.402v-.5H4.39v.5Zm.25-.25h-.5.5Zm-.764-.276c0 .28.22.526.514.526v-.5s-.002 0-.006-.004a.031.031 0 0 1-.008-.022h-.5Zm0-10.286v10.286h.5V7.365h-.5Zm12.316-.25H4.126v.5h12.066v-.5Zm.25 6.236V7.365h-.5v5.986h.5Zm-.502.242c.079 0 .158.002.236.007l.032-.499a4.347 4.347 0 0 0-.268-.008v.5Zm-3.905 4.078c0-2.258 1.761-4.078 3.905-4.078v-.5c-2.439 0-4.405 2.063-4.405 4.578h.5Zm.007.242a4.409 4.409 0 0 1-.007-.242h-.5c0 .091.003.181.008.27l.499-.028Zm.618-.242c0 1.869 1.462 3.407 3.28 3.407v-.5c-1.523 0-2.78-1.295-2.78-2.907h-.5Zm3.28-3.406c-1.818 0-3.28 1.538-3.28 3.406h.5c0-1.612 1.257-2.906 2.78-2.906v-.5Zm3.28 3.406c0-1.868-1.461-3.406-3.28-3.406v.5c1.524 0 2.78 1.294 2.78 2.906h.5Zm-3.28 3.407c1.819 0 3.28-1.538 3.28-3.407h-.5c0 1.612-1.257 2.907-2.78 2.907v.5Zm-.313-3.446c0-.195.15-.336.313-.336v-.5c-.458 0-.813.384-.813.836h.5Zm0 1.69v-1.69h-.5v1.69h.5Zm.313.337c-.163 0-.313-.141-.313-.337h-.5c0 .452.355.837.813.837v-.5Zm.313-.337c0 .196-.15.337-.313.337v.5c.459 0 .813-.385.813-.837h-.5Zm0-1.69v1.69h.5v-1.69h-.5Zm-.313-.336c.164 0 .313.14.313.336h.5a.825.825 0 0 0-.813-.836v.5Zm.809-1.34a.814.814 0 0 0-.012-.082l-.49.098a.33.33 0 0 1 .004.033l.498-.05Zm.004.082a.852.852 0 0 0-.004-.082l-.498.049a.362.362 0 0 1 .002.033h.5Zm-.004.082a.839.839 0 0 0 .004-.082h-.5c0 .01 0 .02-.002.033l.498.049Zm-.012.082a.816.816 0 0 0 .012-.082l-.498-.049a.33.33 0 0 1-.004.033l.49.098Zm-.02.08a.78.78 0 0 0 .02-.084l-.491-.09a.246.246 0 0 1-.007.027l.478.146Zm-.024.07a.903.903 0 0 0 .026-.075l-.481-.137a.422.422 0 0 1-.011.032l.466.18Zm-.034.076a.923.923 0 0 0 .033-.072l-.464-.188a.353.353 0 0 1-.014.032l.445.228Zm-.041.072a.826.826 0 0 0 .04-.072l-.444-.228a.338.338 0 0 1-.015.027l.419.273Zm-.046.064a.82.82 0 0 0 .048-.067l-.423-.267a.314.314 0 0 1-.019.026l.394.308Zm-.056.064a.731.731 0 0 0 .056-.064l-.394-.308a.248.248 0 0 1-.018.02l.356.352Zm-.057.053a.75.75 0 0 0 .062-.058l-.366-.341a.246.246 0 0 1-.02.019l.324.38Zm-.065.05a.8.8 0 0 0 .065-.05l-.323-.38a.342.342 0 0 1-.025.019l.283.412Zm-.067.042a.791.791 0 0 0 .07-.043l-.288-.41a.302.302 0 0 1-.025.017l.243.436Zm-.07.035a.855.855 0 0 0 .07-.035l-.243-.436a.343.343 0 0 1-.029.014l.201.457Zm-.079.03a.85.85 0 0 0 .073-.027l-.19-.463a.368.368 0 0 1-.032.012l.15.477Zm-.08.02a.735.735 0 0 0 .08-.02l-.15-.478a.273.273 0 0 1-.026.007l.096.491Zm-.076.012a.738.738 0 0 0 .082-.013l-.107-.489a.248.248 0 0 1-.028.005l.053.497Zm-.082.004a.774.774 0 0 0 .081-.004l-.051-.497a.272.272 0 0 1-.03.001v.5Zm-.082-.004c.03.003.057.004.082.004v-.5a.28.28 0 0 1-.029-.001l-.053.497Zm-.081-.013c.029.006.057.01.08.013l.055-.497a.282.282 0 0 1-.028-.005l-.107.489Zm-.074-.02c.02.007.049.015.08.021l.095-.49a.287.287 0 0 1-.027-.008l-.148.477Zm-.074-.027a.85.85 0 0 0 .072.027l.151-.477a.394.394 0 0 1-.03-.011l-.193.461Zm-.075-.037a.875.875 0 0 0 .07.035l.202-.457a.413.413 0 0 1-.03-.015l-.242.438Zm-.068-.041a.856.856 0 0 0 .067.041l.243-.437a.384.384 0 0 1-.027-.017l-.283.413Zm-.067-.052c.021.018.044.035.067.052l.283-.412a.226.226 0 0 1-.021-.017l-.329.377Zm-.057-.054c.02.02.04.039.06.056l.323-.381a.306.306 0 0 1-.022-.022l-.361.347Zm-.054-.062c.016.02.035.042.056.064l.356-.351a.276.276 0 0 1-.018-.021l-.394.308Zm-.047-.067c.014.022.03.045.047.067l.394-.308a.301.301 0 0 1-.018-.026l-.423.267Zm-.04-.069a.848.848 0 0 0 .041.071l.42-.271a.314.314 0 0 1-.016-.028l-.445.228Zm-.034-.076c.01.026.022.052.034.076l.445-.228a.29.29 0 0 1-.012-.027l-.467.179Zm-.025-.075a.797.797 0 0 0 .027.079l.463-.188a.284.284 0 0 1-.01-.029l-.48.138Zm-.019-.074.018.074.481-.138a.522.522 0 0 1-.009-.036l-.49.1Zm-.012-.083a.835.835 0 0 0 .012.082l.49-.098a.313.313 0 0 1-.004-.033l-.498.049Zm-.004-.082c0 .026.002.053.004.082l.498-.049a.321.321 0 0 1-.002-.033h-.5Zm.004-.082a.855.855 0 0 0-.004.082h.5l.002-.033-.498-.05Zm.012-.082a.828.828 0 0 0-.012.082l.498.049a.323.323 0 0 1 .005-.033l-.49-.098Zm.018-.075a.973.973 0 0 0-.018.074l.49.1a.536.536 0 0 1 .01-.037l-.482-.137Zm.028-.08a.78.78 0 0 0-.027.08l.48.137a.305.305 0 0 1 .01-.028l-.463-.188Zm.033-.071a.767.767 0 0 0-.035.076l.467.18a.272.272 0 0 1 .012-.028l-.444-.228Zm.04-.07a.85.85 0 0 0-.04.07l.444.228a.36.36 0 0 1 .018-.03l-.423-.267Zm.048-.068a.748.748 0 0 0-.05.07l.424.266a.262.262 0 0 1 .016-.023l-.39-.313Zm.052-.06a.744.744 0 0 0-.056.065l.398.303a.227.227 0 0 1 .018-.022l-.36-.346Zm.06-.056a.839.839 0 0 0-.06.056l.36.346a.34.34 0 0 1 .024-.021l-.325-.38Zm.06-.047a.83.83 0 0 0-.063.049l.329.377a.334.334 0 0 1 .025-.02l-.29-.406Zm.072-.045a.862.862 0 0 0-.068.042l.283.412a.331.331 0 0 1 .027-.017l-.242-.437Zm.075-.036a.758.758 0 0 0-.075.036l.242.437a.25.25 0 0 1 .025-.012l-.192-.461Zm.072-.027a.753.753 0 0 0-.076.029l.2.458a.28.28 0 0 1 .027-.01l-.15-.477Zm.076-.02a.922.922 0 0 0-.074.02l.147.477a.41.41 0 0 1 .034-.009l-.107-.488Zm.08-.013a.762.762 0 0 0-.08.013l.106.488a.29.29 0 0 1 .029-.004l-.054-.497Zm.165 0a.773.773 0 0 0-.164 0l.053.497a.277.277 0 0 1 .058 0l.053-.497Zm.081.013a.782.782 0 0 0-.081-.013l-.053.497.028.004.106-.488Zm.076.02a.799.799 0 0 0-.076-.02l-.106.488a.369.369 0 0 1 .031.008l.151-.476Zm.077.029a.729.729 0 0 0-.079-.03l-.147.478a.253.253 0 0 1 .025.01l.2-.458Zm.07.034a.732.732 0 0 0-.074-.036l-.192.461a.257.257 0 0 1 .024.012l.243-.437Zm.07.044a.744.744 0 0 0-.07-.044l-.242.438.024.014.289-.408Zm.063.048a.894.894 0 0 0-.062-.048l-.29.408.028.021.324-.38Zm.062.059a.75.75 0 0 0-.062-.059l-.324.381a.231.231 0 0 1 .02.018l.366-.34Zm.053.062a.752.752 0 0 0-.055-.065l-.361.346a.24.24 0 0 1 .018.022l.398-.303Zm.046.064a.776.776 0 0 0-.05-.07l-.39.314a.24.24 0 0 1 .017.023l.423-.267Zm.039.069a.895.895 0 0 0-.04-.07l-.422.268.017.03.445-.228Zm.033.072a.911.911 0 0 0-.033-.072l-.445.228c.005.009.01.02.014.032l.464-.188Zm.027.079a.907.907 0 0 0-.026-.075l-.466.18a.403.403 0 0 1 .011.032l.48-.137Zm.019.079a.78.78 0 0 0-.02-.084l-.479.147a.246.246 0 0 1 .007.027l.492-.09Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackageInfoIcon;