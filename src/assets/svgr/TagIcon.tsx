import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgTagIcon(props: ISvgProps) {
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
        d="m21.018 4.45.953 5.27a1.822 1.822 0 0 1-.504 1.613L11.332 21.468a1.816 1.816 0 0 1-1.288.532c-.467 0-.933-.177-1.288-.532l-6.223-6.224a1.823 1.823 0 0 1 0-2.576L12.667 2.533a1.822 1.822 0 0 1 1.611-.504l5.271.953a1.83 1.83 0 0 1 1.468 1.468ZM10.502 20.638l10.135-10.135a.648.648 0 0 0 .18-.574l-.953-5.27a.65.65 0 0 0-.523-.523l-5.27-.953a.65.65 0 0 0-.574.18L3.362 13.498a.649.649 0 0 0 0 .916l6.224 6.224a.649.649 0 0 0 .916 0Zm5.554-14.982a1.607 1.607 0 0 1 2.741 1.135 1.6 1.6 0 0 1-1.605 1.605 1.6 1.6 0 0 1-1.136-.47 1.607 1.607 0 0 1 0-2.27Zm1.441 1.441a.43.43 0 0 0 0-.612.431.431 0 0 0-.611 0 .433.433 0 0 0 .611.612ZM9.46 16.904l-.906-.907.53-.53a.196.196 0 0 0 .06-.186.358.358 0 0 0-.102-.186.365.365 0 0 0-.195-.107.197.197 0 0 0-.184.057l-.53.53-.594-.593.91-.91a.193.193 0 0 0 .05-.191.45.45 0 0 0-.128-.216.446.446 0 0 0-.207-.123.191.191 0 0 0-.193.053l-1.219 1.218a.441.441 0 0 0-.124.213.197.197 0 0 0 .054.195l2.23 2.23c.054.054.123.069.206.044a.564.564 0 0 0 .237-.149.564.564 0 0 0 .15-.237c.024-.083.01-.152-.045-.206Zm2.866-3.183a.15.15 0 0 1 .081.046c.068.068.096.169.082.304a.511.511 0 0 1-.142.325c-.082.082-.174.106-.277.073l-1.416-.453-.232.232.847.847c.054.054.068.122.044.205a.564.564 0 0 1-.15.237.563.563 0 0 1-.236.15c-.084.024-.152.01-.206-.044l-2.234-2.234a.228.228 0 0 1-.068-.164.227.227 0 0 1 .072-.17l.727-.727c.576-.576 1.114-.614 1.616-.113.365.366.46.745.288 1.138l1.204.348ZM10 13.827l.348-.348c.103-.103.156-.207.16-.311.003-.104-.053-.215-.17-.332-.118-.117-.228-.174-.332-.17-.105.003-.208.056-.311.16l-.348.347.653.654Zm4.482-1.75a.445.445 0 0 0-.123-.207.45.45 0 0 0-.216-.128.193.193 0 0 0-.192.05l-.94.942-.598-.597.527-.527a.196.196 0 0 0 .06-.186.358.358 0 0 0-.102-.186.366.366 0 0 0-.195-.107.197.197 0 0 0-.184.058l-.527.527-.594-.594.941-.941a.193.193 0 0 0 .051-.192.45.45 0 0 0-.128-.216.445.445 0 0 0-.207-.123.191.191 0 0 0-.193.053l-1.25 1.25a.442.442 0 0 0-.125.213.197.197 0 0 0 .054.195l2.23 2.23a.196.196 0 0 0 .195.055.44.44 0 0 0 .213-.125l1.25-1.25a.19.19 0 0 0 .053-.194Zm1.77-2.1a.445.445 0 0 1 .123.207.191.191 0 0 1-.053.194l-1.25 1.25a.44.44 0 0 1-.213.125.196.196 0 0 1-.194-.055l-2.23-2.23a.197.197 0 0 1-.055-.195.44.44 0 0 1 .124-.213l1.25-1.25a.191.191 0 0 1 .194-.053c.075.019.144.06.207.123a.45.45 0 0 1 .128.216c.018.076.001.14-.05.192l-.942.94.594.595.527-.527a.198.198 0 0 1 .184-.058.365.365 0 0 1 .195.107.358.358 0 0 1 .102.186.196.196 0 0 1-.06.186l-.527.527.597.597.942-.941a.193.193 0 0 1 .191-.051.45.45 0 0 1 .216.128Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m21.971 9.72-.246.045.246-.044Zm-.953-5.27-.246.045.246-.045Zm.449 6.883-.177-.177.177.177ZM11.332 21.468l-.177-.177.177.177Zm-2.576 0-.177.176.177-.176Zm-6.223-6.224-.177.177.177-.177Zm0-2.576-.177-.176.176.176ZM12.667 2.533l.176.177-.176-.177Zm1.611-.504.045-.246-.045.246Zm5.271.953-.044.246.044-.246Zm1.087 7.521-.177-.177.177.177ZM10.502 20.638l.177.177-.177-.177ZM20.817 9.93l-.246.045.246-.045Zm-.953-5.27-.246.044.246-.044Zm-.523-.523-.044.246.044-.246Zm-5.27-.953.044-.246-.044.246Zm-.574.18-.177-.177.177.177ZM3.362 13.498l-.177-.177.177.177Zm0 .916.177-.176-.177.176Zm6.224 6.224.176-.177-.176.177Zm8.74-14.982-.176.177.177-.177Zm-2.27 0 .177.177-.177-.177Zm2.741 1.135h-.25.25Zm-.47 1.136.177.176-.177-.176Zm-2.27 0 .176-.177-.177.177Zm1.44-.83-.176-.177-.074.074v.103h.25Zm0 0 .177.177.073-.073v-.104h-.25Zm0-.612.177-.176-.177.176Zm-.611 0 .177.177-.177-.177Zm0 .612.177-.177-.177.177Zm-8.333 8.9-.177-.177-.177.177.177.177.177-.177Zm.906.907-.177.176.177-.176Zm-.376-1.437-.176-.177.176.177Zm.06-.186-.245.049.245-.05Zm-.297-.293.045-.246-.045.245Zm-.184.057.177.177-.177-.177Zm-.53.53-.177.178.177.176.176-.177-.176-.176Zm-.594-.593-.177-.177-.177.177.177.177.177-.177Zm.91-.91.176.177-.176-.177Zm.05-.191-.243.056.244-.056Zm-.128-.216-.176.177.176-.177Zm-.207-.123.06-.242-.06.242Zm-.193.053-.177-.177.177.177Zm-1.219 1.218-.177-.176.177.176Zm-.124.213.243.056-.243-.056Zm.054.195-.177.177.177-.177Zm2.23 2.23-.176.177.176-.177Zm.206.044.07.24-.07-.24Zm.237-.149-.177-.177.177.177Zm.15-.237-.24-.071.24.071Zm2.902-3.342.177-.177-.177.177Zm-.08-.046-.07.24.014.004.014.003.041-.247Zm.162.35-.248-.024.248.024Zm-.142.325-.177-.177.177.177Zm-.277.073-.076.239.076-.239Zm-1.416-.453.077-.238-.146-.046-.107.108.176.176Zm-.232.232-.176-.177-.177.177.177.177.177-.177Zm.89 1.052.24.071-.24-.07Zm-.385.386-.071-.24.07.24Zm-2.44-2.277.177-.177-.177.177Zm-.068-.164.25-.004-.25.004Zm.072-.17.176.177-.176-.177Zm.727-.727.177.177-.177-.177Zm1.616-.113-.177.177.177-.177Zm.288 1.138-.23-.1-.114.261.274.08.07-.24Zm-.773.106.177.177-.177-.177Zm-.348.348-.177.176.177.177.177-.177-.177-.176Zm.508-.659.25.009-.25-.009Zm-.502-.502-.009-.25.008.25Zm-.311.16.176.176-.176-.177Zm-.348.347-.177-.177-.177.177.177.177.177-.177Zm5.135-1.096-.243.061.243-.06Zm-.34-.335.057-.244-.056.244Zm-.19.05-.177-.176.176.177Zm-.942.942-.177.177.177.177.177-.177-.177-.177Zm-.597-.597-.177-.177-.177.177.177.177.177-.177Zm.587-.713-.245.05.245-.05Zm-.297-.293.044-.246-.044.246Zm-.711.585-.177.176.177.177.176-.177-.176-.176Zm-.594-.594-.177-.177-.177.177.177.177.177-.177Zm.941-.941.177.177-.177-.177Zm.051-.192.244-.056-.244.056Zm-.128-.216-.177.177.177-.177Zm-.207-.123.06-.242-.06.242Zm-.193.053-.177-.177.177.177Zm-1.25 1.25-.178-.176.177.176Zm-.125.213.243.056-.243-.056Zm.054.195-.177.177.177-.177Zm2.23 2.23.177-.177-.177.177Zm.195.055-.056-.244.056.244Zm.213-.125.176.177-.176-.177Zm1.25-1.25-.177-.177.177.177Zm1.946-2.087-.243.06.243-.06Zm-.123-.207-.177.177.177-.177Zm-1.393 1.776-.056-.244.056.244Zm-.194-.055-.177.177.177-.177Zm-2.23-2.23-.178.177.177-.177Zm-.055-.195.243.056-.243-.056Zm.124-.213-.176-.176.176.176Zm1.25-1.25-.176-.177.177.177Zm.194-.053.06-.242-.06.242Zm.207.123-.177.177.177-.177Zm.128.216.244-.056-.244.056Zm-.05.192.176.176-.177-.176Zm-.942.94-.177-.176-.176.177.176.177.177-.177Zm.594.595-.177.176.177.177.177-.177-.177-.176Zm.527-.527.176.176-.176-.176Zm.184-.058.044-.246-.044.246Zm.297.293-.245.049.245-.049Zm-.06.186.177.177-.177-.177Zm-.527.527-.176-.177-.177.177.177.177.176-.177Zm.597.597-.176.177.176.177.177-.177-.177-.177Zm1.133-.992.056-.244-.056.244Zm6.181-.173-.953-5.27-.492.089.953 5.27.492-.089Zm-.574 1.833c.48-.48.695-1.165.574-1.833l-.492.09a1.572 1.572 0 0 1-.435 1.39l.353.353ZM11.508 21.644 21.643 11.51l-.353-.353L11.155 21.29l.353.353Zm-1.464.606c.53 0 1.06-.202 1.464-.606l-.353-.353c-.306.306-.708.459-1.111.459v.5Zm-1.465-.606c.404.404.935.606 1.465.606v-.5c-.403 0-.805-.153-1.111-.46l-.354.354Zm-6.223-6.223 6.223 6.223.354-.353-6.224-6.224-.353.354Zm0-2.93a2.073 2.073 0 0 0 0 2.93l.353-.354a1.573 1.573 0 0 1 0-2.222l-.353-.354ZM12.49 2.357 2.356 12.49l.353.354L12.844 2.71l-.353-.353Zm1.833-.574a2.072 2.072 0 0 0-1.833.574l.353.353a1.572 1.572 0 0 1 1.39-.435l.09-.492Zm5.27.953-5.27-.953-.09.492 5.272.953.088-.492Zm1.67 1.67a2.08 2.08 0 0 0-1.67-1.67l-.088.492a1.58 1.58 0 0 1 1.266 1.267l.492-.09Zm-.803 5.92L10.325 20.461l.353.354L20.814 10.68l-.354-.354Zm.11-.352a.399.399 0 0 1-.11.352l.353.354a.898.898 0 0 0 .249-.795l-.492.089Zm-.953-5.27.953 5.27.492-.09-.953-5.27-.492.09Zm-.321-.322c.162.03.292.16.32.321l.493-.089a.901.901 0 0 0-.724-.724l-.09.492Zm-5.27-.953 5.27.953.089-.492-5.27-.953-.09.492Zm-.072-.006a.4.4 0 0 1 .071.006l.089-.492a.9.9 0 0 0-.16-.014v.5Zm-.281.117a.399.399 0 0 1 .281-.117v-.5a.899.899 0 0 0-.635.263l.354.354ZM3.539 13.674 13.674 3.54l-.354-.354L3.185 13.321l.354.354Zm0 .564a.4.4 0 0 1 0-.564l-.354-.353c-.35.35-.35.92 0 1.27l.354-.353Zm6.223 6.223L3.54 14.238l-.354.353 6.224 6.224.353-.354Zm.563 0a.399.399 0 0 1-.563 0l-.353.354c.35.35.92.35 1.27 0l-.354-.354ZM18.505 5.48a1.857 1.857 0 0 0-2.624 0l.353.354a1.357 1.357 0 0 1 1.917 0l.354-.354Zm.543 1.312c0-.495-.193-.962-.543-1.312l-.354.354c.257.256.397.596.397.958h.5Zm-.543 1.312c.35-.35.543-.816.543-1.312h-.5c0 .363-.14.703-.397.959l.354.353Zm-1.312.543c.474 0 .95-.18 1.312-.543l-.354-.353a1.35 1.35 0 0 1-.958.396v.5Zm-1.312-.543a1.85 1.85 0 0 0 1.312.543v-.5a1.35 1.35 0 0 1-.959-.396l-.353.353Zm0-2.624a1.857 1.857 0 0 0 0 2.624l.353-.353a1.357 1.357 0 0 1 0-1.917l-.353-.354Zm1.367 1.618h.5-.5Zm.127-.306a.18.18 0 0 1-.053.13l.353.353a.68.68 0 0 0 .2-.483h-.5Zm-.053-.129a.18.18 0 0 1 .053.13h.5a.68.68 0 0 0-.2-.483l-.353.353Zm-.13-.053c.048 0 .094.018.13.053l.353-.353a.682.682 0 0 0-.482-.2v.5Zm-.128.053a.181.181 0 0 1 .129-.053v-.5a.681.681 0 0 0-.483.2l.354.353Zm0 .258a.183.183 0 0 1 0-.258l-.354-.353a.683.683 0 0 0 0 .965l.354-.354Zm.258 0a.183.183 0 0 1-.258 0l-.354.354c.266.266.7.266.965 0l-.353-.354Zm-8.945 9.254.906.906.354-.353-.906-.907-.354.354Zm.53-.884-.53.53.354.354.53-.53-.353-.354Zm-.008.04v-.009c0-.005 0-.011.003-.017.004-.013.01-.017.006-.014l.353.354a.445.445 0 0 0 .128-.412l-.49.098Zm-.034-.059c.022.022.03.04.034.059l.49-.098a.608.608 0 0 0-.17-.314l-.354.353Zm-.062-.038c.014.003.035.01.062.038l.354-.353a.615.615 0 0 0-.327-.176l-.09.491Zm.037-.01c0-.002-.005.004-.018.008-.012.004-.02.002-.02.002l.09-.492a.447.447 0 0 0-.406.128l.354.353Zm-.53.53.53-.53-.354-.354-.53.53.353.354Zm-.948-.594.594.593.353-.353-.593-.594-.354.354Zm.91-1.263-.91.91.354.353.91-.91-.354-.353Zm-.016.041c.001.006-.001-.001.002-.015a.07.07 0 0 1 .008-.018l.006-.008.353.353a.442.442 0 0 0 .118-.424l-.487.112Zm-.061-.095a.205.205 0 0 1 .061.095l.487-.112a.7.7 0 0 0-.195-.337l-.353.354Zm-.092-.058a.198.198 0 0 1 .092.058l.353-.354a.694.694 0 0 0-.323-.188l-.122.484Zm.045-.013s-.007.007-.023.011c-.015.005-.024.002-.021.003l.12-.486a.44.44 0 0 0-.43.119l.354.354Zm-1.219 1.22 1.219-1.22-.354-.353-1.219 1.219.354.353Zm-.058.091a.194.194 0 0 1 .058-.092l-.354-.353a.69.69 0 0 0-.191.333l.487.112Zm-.012-.038.003.005.007.016c.004.013.001.021.002.017l-.487-.112a.446.446 0 0 0 .121.428l.354-.354Zm2.23 2.23-2.23-2.23-.354.354 2.23 2.23.354-.353Zm-.042-.018c-.01.003-.006 0 .01.002a.08.08 0 0 1 .02.008l.012.009-.353.353a.442.442 0 0 0 .453.107l-.142-.48Zm.131-.087a.317.317 0 0 1-.131.087l.142.48a.813.813 0 0 0 .343-.213l-.354-.354Zm.086-.13a.318.318 0 0 1-.086.13l.354.354a.813.813 0 0 0 .212-.343l-.48-.142Zm.02.041a.054.054 0 0 1-.009-.011.078.078 0 0 1-.008-.021c-.003-.016 0-.021-.003-.01l.48.142a.442.442 0 0 0-.107-.453l-.354.353Zm3.3-3.49a.399.399 0 0 0-.217-.115l-.082.493a.107.107 0 0 1-.055-.024l.354-.354Zm.154.505c.018-.178-.015-.365-.154-.505l-.354.354s.004.003.007.015a.252.252 0 0 1 .004.088l.497.048Zm-.214.477a.76.76 0 0 0 .214-.478l-.497-.047a.263.263 0 0 1-.07.172l.353.354Zm-.53.136a.507.507 0 0 0 .53-.136l-.354-.353a.097.097 0 0 1-.017.014c-.002.002-.002.002 0 .001h.002l-.01-.003-.151.477Zm-1.416-.454 1.416.454.152-.477-1.415-.453-.153.476Zm.021.171.232-.232-.353-.353-.232.231.353.354Zm.847.493-.847-.847-.353.354.846.846.354-.353Zm.107.453a.442.442 0 0 0-.107-.453l-.354.353a.053.053 0 0 1-.008-.011.08.08 0 0 1-.008-.021c-.003-.016 0-.02-.003-.01l.48.142Zm-.213.343a.813.813 0 0 0 .213-.343l-.48-.142a.318.318 0 0 1-.086.131l.353.354Zm-.343.212a.813.813 0 0 0 .343-.212l-.353-.354a.317.317 0 0 1-.131.087l.141.48Zm-.453-.107a.442.442 0 0 0 .454.107l-.143-.48c-.01.004-.005 0 .01.004a.076.076 0 0 1 .033.016l-.354.353ZM8.31 13.585l2.234 2.234.354-.353-2.234-2.234-.354.353Zm-.141-.335c.002.127.05.244.141.335l.354-.353.003.006c.002.004.002.006.002.003l-.5.009Zm.145-.352a.477.477 0 0 0-.145.352l.5-.01v.005a.035.035 0 0 1-.003.007c-.002.005-.003.005.001 0l-.353-.354Zm.727-.727-.727.727.354.354.727-.727-.354-.354Zm1.97-.112c-.285-.285-.612-.446-.974-.42-.354.024-.686.222-.996.532l.354.354c.266-.267.491-.375.676-.388.176-.012.37.059.586.275l.353-.353Zm.34 1.415c.106-.242.134-.492.07-.741-.061-.246-.206-.47-.41-.674l-.354.353c.16.16.246.31.28.443a.624.624 0 0 1-.044.418l.457.201Zm1.045.007-1.205-.348-.139.48 1.205.348.139-.48Zm-2.224-.179-.348.348.354.353.348-.347-.354-.354Zm.087-.143c0 .02-.01.067-.087.143l.354.354c.13-.13.226-.29.232-.48l-.5-.017Zm-.097-.146c.096.096.097.143.097.147l.5.016c.007-.204-.106-.379-.244-.517l-.353.354Zm-.147-.097c.003 0 .05 0 .147.097l.353-.354c-.138-.138-.312-.25-.517-.243l.017.5Zm-.143.086c.076-.076.123-.086.143-.086l-.017-.5a.717.717 0 0 0-.48.233l.354.353Zm-.347.348.347-.348-.353-.353-.348.348.354.353Zm.653.3-.653-.654-.354.354.653.653.354-.353Zm4.005-1.603a.197.197 0 0 1 .057.091l.485-.121a.695.695 0 0 0-.188-.324l-.354.354Zm-.096-.061c.022.005.054.019.096.061l.354-.354a.7.7 0 0 0-.337-.195l-.113.488Zm.042-.016-.008.006a.07.07 0 0 1-.018.007c-.014.004-.02.001-.015.003l.112-.488a.443.443 0 0 0-.424.118l.353.354Zm-.941.941.941-.941-.353-.354-.942.941.354.354Zm-.95-.597.596.597.354-.354-.597-.597-.354.354Zm.526-.88-.527.526.354.354.527-.527-.354-.354Zm-.008.04-.001-.01a.07.07 0 0 1 .003-.017c.004-.013.01-.017.006-.013l.354.353a.446.446 0 0 0 .128-.412l-.49.098Zm-.034-.06a.11.11 0 0 1 .034.06l.49-.099a.608.608 0 0 0-.17-.314l-.354.354Zm-.063-.037c.015.002.035.01.063.038l.354-.354a.615.615 0 0 0-.328-.176l-.089.492Zm.037-.011c.001-.001-.005.004-.017.008s-.02.003-.02.003l.09-.492a.447.447 0 0 0-.406.127l.353.354Zm-.527.526.527-.526-.353-.354-.527.527.353.353Zm-.947-.593.594.593.353-.353-.593-.594-.354.354Zm.941-1.295-.94.941.353.354.941-.941-.354-.354Zm-.015.041c0 .006-.002-.001.002-.015a.067.067 0 0 1 .014-.026l.353.354a.442.442 0 0 0 .118-.425l-.487.112Zm-.062-.095a.205.205 0 0 1 .062.096l.487-.113a.7.7 0 0 0-.195-.336l-.354.353Zm-.091-.057a.197.197 0 0 1 .091.057l.354-.353a.694.694 0 0 0-.323-.19l-.122.486Zm.044-.013s-.007.006-.022.01c-.015.005-.024.002-.022.003l.121-.485a.44.44 0 0 0-.43.118l.353.354Zm-1.25 1.25 1.25-1.25-.353-.354-1.25 1.25.353.354Zm-.058.092a.195.195 0 0 1 .058-.092l-.354-.353a.69.69 0 0 0-.191.333l.487.112Zm-.012-.038.003.005c.003.004.005.01.007.015.004.014.001.022.002.018l-.487-.112a.446.446 0 0 0 .121.428l.354-.354Zm2.23 2.23-2.23-2.23-.354.354 2.23 2.23.354-.354Zm-.038-.012c-.004.001.004-.001.018.003a.066.066 0 0 1 .016.006l.004.003-.353.354c.116.117.27.158.428.121l-.113-.487Zm.092-.058a.193.193 0 0 1-.092.058l.112.487c.13-.03.241-.099.333-.191l-.353-.354Zm1.25-1.25-1.25 1.25.353.354 1.25-1.25-.353-.354Zm-.013.044c0 .003-.002-.007.002-.022.005-.015.012-.023.011-.022l.354.353a.44.44 0 0 0 .118-.43l-.485.121Zm2.378-2.014a.693.693 0 0 0-.188-.324l-.354.354a.196.196 0 0 1 .057.09l.485-.12Zm-.118.43a.44.44 0 0 0 .119-.43l-.485.12c0 .004-.002-.006.002-.021.004-.015.011-.023.01-.022l.354.353Zm-1.25 1.25 1.25-1.25-.354-.353-1.25 1.25.354.354Zm-.334.192c.13-.03.241-.099.334-.191l-.354-.354a.192.192 0 0 1-.092.058l.112.487Zm-.427-.121c.116.117.27.158.428.121l-.113-.487c-.004 0 .004-.001.018.002a.063.063 0 0 1 .016.007l.004.003-.353.354Zm-2.23-2.23 2.23 2.23.353-.354-2.23-2.23-.354.354Zm-.122-.428a.446.446 0 0 0 .121.428l.354-.354.003.005c.003.004.005.01.007.015.004.014.002.022.002.018l-.487-.112Zm.192-.333a.69.69 0 0 0-.192.333l.487.112a.194.194 0 0 1 .058-.092l-.353-.353Zm1.25-1.25-1.25 1.25.353.353 1.25-1.25-.353-.354Zm.43-.12a.44.44 0 0 0-.43.12l.354.353s-.007.006-.023.01c-.015.005-.024.002-.021.003l.12-.485Zm.324.19a.694.694 0 0 0-.323-.19L13.887 8a.197.197 0 0 1 .091.057l.354-.353Zm.195.336a.698.698 0 0 0-.195-.337l-.354.354a.204.204 0 0 1 .062.095l.487-.112Zm-.118.424a.442.442 0 0 0 .118-.424l-.487.112c.001.006-.001-.001.002-.015a.069.069 0 0 1 .014-.026l.353.353Zm-.941.942.941-.942-.353-.353-.942.941.354.354Zm.594.24-.594-.594-.354.354.594.593.354-.353Zm.173-.527-.527.527.354.353.526-.527-.353-.353Zm.405-.127a.447.447 0 0 0-.405.127l.353.353c.001 0-.004.005-.017.01-.012.003-.02.002-.02.002l.09-.492Zm.328.176a.615.615 0 0 0-.328-.176l-.088.492c.014.002.034.01.062.038l.354-.354Zm.17.314a.608.608 0 0 0-.17-.314l-.354.354c.021.02.03.04.034.058l.49-.098Zm-.128.412a.445.445 0 0 0 .128-.412l-.49.098v-.009c0-.005 0-.011.002-.017.004-.013.01-.017.006-.014l.354.354Zm-.527.527.527-.527-.354-.354-.527.527.354.354Zm.597.243-.597-.597-.354.354.598.597.353-.354Zm.588-.941-.941.941.353.354.941-.941-.353-.354Zm.424-.118a.442.442 0 0 0-.424.118l.353.354-.008.006a.073.073 0 0 1-.018.007c-.014.004-.02.001-.015.003l.112-.488Zm.337.195a.7.7 0 0 0-.337-.195l-.112.487c.02.005.053.02.095.062l.354-.354Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgTagIcon;
