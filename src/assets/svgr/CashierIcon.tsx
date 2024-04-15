import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCashierIcon(props: ISvgProps) {
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
      <mask id="cashier-icon_svg__a" maskUnits="userSpaceOnUse" x={4} y={1} width={16} height={22} fill="#000">
        <path fill="#fff" d="M4 1h16v22H4z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.916 2H8.522c-.97 0-1.76.789-1.76 1.758v3.008H6.37A1.37 1.37 0 0 0 5 8.133v12.5A1.37 1.37 0 0 0 6.37 22h11.35a1.37 1.37 0 0 0 1.37-1.367v-12.5a1.37 1.37 0 0 0-1.37-1.367h-.391v-1.25h1.76a.587.587 0 0 0 .588-.586V3.758c0-.97-.79-1.758-1.761-1.758Zm-9.98 1.758c0-.323.263-.586.586-.586h7.733c-.065.183-.1.38-.1.586v3.008h-8.22V3.758Zm9.784 4.18c.108 0 .196.087.196.195v12.5a.196.196 0 0 1-.196.195H6.37a.196.196 0 0 1-.196-.195v-12.5c0-.108.088-.195.196-.195h11.35Zm.783-3.594h-1.174v-.586a.587.587 0 0 1 1.174 0v.586ZM15.5 13h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Zm-.5-2H9v1h6v-1Zm-7.065 5.174H9.11a.587.587 0 0 0 0-1.174H7.935a.587.587 0 0 0 0 1.174Zm0 2.485H9.11a.587.587 0 1 0 0-1.175H7.935a.587.587 0 1 0 0 1.174Zm8.22-1.175H14.98a.587.587 0 1 0 0 1.174h1.174a.587.587 0 1 0 0-1.174Zm-4.697 0h1.174a.587.587 0 1 1 0 1.174h-1.174a.587.587 0 1 1 0-1.174ZM14.98 15h1.174a.587.587 0 0 1 0 1.174H14.98a.587.587 0 1 1 0-1.174Zm-2.348 0h-1.174a.587.587 0 0 0 0 1.174h1.174a.587.587 0 0 0 0-1.174ZM9.697 4.383h4.696a.587.587 0 0 1 0 1.174H9.697a.587.587 0 0 1 0-1.174Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.916 2H8.522c-.97 0-1.76.789-1.76 1.758v3.008H6.37A1.37 1.37 0 0 0 5 8.133v12.5A1.37 1.37 0 0 0 6.37 22h11.35a1.37 1.37 0 0 0 1.37-1.367v-12.5a1.37 1.37 0 0 0-1.37-1.367h-.391v-1.25h1.76a.587.587 0 0 0 .588-.586V3.758c0-.97-.79-1.758-1.761-1.758Zm-9.98 1.758c0-.323.263-.586.586-.586h7.733c-.065.183-.1.38-.1.586v3.008h-8.22V3.758Zm9.784 4.18c.108 0 .196.087.196.195v12.5a.196.196 0 0 1-.196.195H6.37a.196.196 0 0 1-.196-.195v-12.5c0-.108.088-.195.196-.195h11.35Zm.783-3.594h-1.174v-.586a.587.587 0 0 1 1.174 0v.586ZM15.5 13h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Zm-.5-2H9v1h6v-1Zm-7.065 5.174H9.11a.587.587 0 0 0 0-1.174H7.935a.587.587 0 0 0 0 1.174Zm0 2.485H9.11a.587.587 0 1 0 0-1.175H7.935a.587.587 0 1 0 0 1.174Zm8.22-1.175H14.98a.587.587 0 1 0 0 1.174h1.174a.587.587 0 1 0 0-1.174Zm-4.697 0h1.174a.587.587 0 1 1 0 1.174h-1.174a.587.587 0 1 1 0-1.174ZM14.98 15h1.174a.587.587 0 0 1 0 1.174H14.98a.587.587 0 1 1 0-1.174Zm-2.348 0h-1.174a.587.587 0 0 0 0 1.174h1.174a.587.587 0 0 0 0-1.174ZM9.697 4.383h4.696a.587.587 0 0 1 0 1.174H9.697a.587.587 0 0 1 0-1.174Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M6.761 6.766v.3h.3v-.3h-.3Zm10.568 0h-.3v.3h.3v-.3Zm0-1.25v-.3h-.3v.3h.3Zm-1.074-2.344.283.1.142-.4h-.425v.3Zm-.1 3.594v.3h.3v-.3h-.3Zm-8.22 0h-.3v.3h.3v-.3Zm9.394-2.422h-.3v.3h.3v-.3Zm1.174 0v.3h.3v-.3h-.3ZM9 11v-.3h-.3v.3H9Zm6 0h.3v-.3H15v.3Zm-6 1h-.3v.3H9V12Zm6 0v.3h.3V12H15ZM8.522 2.3h9.394v-.6H8.522v.6Zm-1.46 1.458c0-.803.654-1.458 1.46-1.458v-.6a2.062 2.062 0 0 0-2.06 2.058h.6Zm0 3.008V3.758h-.6v3.008h.6Zm-.692.3h.391v-.6H6.37v.6ZM5.3 8.133c0-.588.48-1.067 1.07-1.067v-.6c-.92 0-1.67.747-1.67 1.667h.6Zm0 12.5v-12.5h-.6v12.5h.6ZM6.37 21.7c-.59 0-1.07-.48-1.07-1.067h-.6c0 .92.75 1.667 1.67 1.667v-.6Zm11.35 0H6.37v.6h11.35v-.6Zm1.07-1.067a1.07 1.07 0 0 1-1.07 1.067v.6c.92 0 1.67-.747 1.67-1.667h-.6Zm0-12.5v12.5h.6v-12.5h-.6Zm-1.07-1.067c.59 0 1.07.48 1.07 1.067h.6c0-.92-.75-1.667-1.67-1.667v.6Zm-.391 0h.391v-.6h-.391v.6Zm-.3-1.55v1.25h.6v-1.25h-.6Zm2.06-.3h-1.76v.6h1.76v-.6Zm.288-.286a.287.287 0 0 1-.287.286v.6c.49 0 .887-.396.887-.886h-.6Zm0-1.172V4.93h.6V3.758h-.6ZM17.916 2.3c.806 0 1.46.655 1.46 1.458h.6a2.062 2.062 0 0 0-2.06-2.058v.6Zm-9.394.572a.887.887 0 0 0-.887.886h.6c0-.157.129-.286.287-.286v-.6Zm7.733 0H8.522v.6h7.733v-.6Zm.2.886c0-.17.029-.334.083-.486l-.566-.2a2.047 2.047 0 0 0-.118.686h.6Zm0 3.008V3.758h-.6v3.008h.6Zm-8.52.3h8.22v-.6h-8.22v.6Zm-.3-3.308v3.008h.6V3.758h-.6Zm10.58 4.375a.496.496 0 0 0-.495-.495v.6a.104.104 0 0 1-.104-.105h.6Zm0 12.5v-12.5h-.6v12.5h.6Zm-.495.495a.496.496 0 0 0 .496-.495h-.6c0-.059.047-.105.104-.105v.6Zm-11.35 0h11.35v-.6H6.37v.6Zm-.496-.495c0 .274.223.495.496.495v-.6c.057 0 .104.046.104.105h-.6Zm0-12.5v12.5h.6v-12.5h-.6Zm.496-.495a.496.496 0 0 0-.496.495h.6a.104.104 0 0 1-.104.105v-.6Zm11.35 0H6.37v.6h11.35v-.6Zm-.391-2.994h1.174v-.6h-1.174v.6Zm-.3-.886v.586h.6v-.586h-.6Zm.887-.886a.887.887 0 0 0-.887.886h.6c0-.157.128-.286.287-.286v-.6Zm.887.886a.887.887 0 0 0-.887-.886v.6c.158 0 .287.129.287.286h.6Zm0 .586v-.586h-.6v.586h.6ZM8.5 13.3h7v-.6h-7v.6Zm-.8-.8a.8.8 0 0 0 .8.8v-.6a.2.2 0 0 1-.2-.2h-.6Zm0-2v2h.6v-2h-.6Zm.8-.8a.8.8 0 0 0-.8.8h.6c0-.11.09-.2.2-.2v-.6Zm7 0h-7v.6h7v-.6Zm.8.8a.8.8 0 0 0-.8-.8v.6c.11 0 .2.09.2.2h.6Zm0 2v-2h-.6v2h.6Zm-.8.8a.8.8 0 0 0 .8-.8h-.6a.2.2 0 0 1-.2.2v.6Zm-6.5-2h6v-.6H9v.6Zm.3.7v-1h-.6v1h.6Zm5.7-.3H9v.6h6v-.6Zm-.3-.7v1h.6v-1h-.6Zm-5.59 4.874H7.934v.6H9.11v-.6Zm.287-.287a.287.287 0 0 1-.288.287v.6c.49 0 .888-.397.888-.887h-.6Zm-.288-.287c.159 0 .288.128.288.287h.6a.887.887 0 0 0-.888-.887v.6Zm-1.174 0H9.11v-.6H7.935v.6Zm-.287.287c0-.159.129-.287.287-.287v-.6a.887.887 0 0 0-.887.887h.6Zm.287.287a.287.287 0 0 1-.287-.287h-.6c0 .49.397.887.887.887v-.6Zm1.174 2.484H7.935v.6H9.11v-.6Zm.288-.287a.287.287 0 0 1-.288.287v.6c.49 0 .888-.397.888-.887h-.6Zm-.288-.287c.159 0 .288.129.288.287h.6a.887.887 0 0 0-.888-.887v.6Zm-1.174 0H9.11v-.6H7.935v.6Zm-.287.287c0-.158.129-.287.287-.287v-.6a.887.887 0 0 0-.887.887h.6Zm.287.287a.287.287 0 0 1-.287-.287h-.6c0 .49.397.887.887.887v-.6Zm7.045-.574h1.174v-.6H14.98v.6Zm-.287.287c0-.158.129-.287.287-.287v-.6a.887.887 0 0 0-.887.887h.6Zm.287.287a.287.287 0 0 1-.287-.287h-.6c0 .49.397.887.887.887v-.6Zm1.174 0H14.98v.6h1.174v-.6Zm.288-.287a.287.287 0 0 1-.288.287v.6c.49 0 .887-.397.887-.887h-.6Zm-.288-.287c.159 0 .288.129.288.287h.6a.887.887 0 0 0-.888-.887v.6Zm-3.522-.6h-1.174v.6h1.174v-.6Zm.887.887a.887.887 0 0 0-.887-.887v.6c.159 0 .287.129.287.287h.6Zm-.887.887c.49 0 .887-.397.887-.887h-.6a.287.287 0 0 1-.287.287v.6Zm-1.174 0h1.174v-.6h-1.174v.6Zm-.887-.887c0 .49.397.887.887.887v-.6a.287.287 0 0 1-.287-.287h-.6Zm.887-.887a.887.887 0 0 0-.887.887h.6c0-.158.128-.287.287-.287v-.6Zm4.696-2.484H14.98v.6h1.174v-.6Zm.887.887a.887.887 0 0 0-.887-.887v.6c.159 0 .288.128.288.287h.6Zm-.887.887c.49 0 .887-.397.887-.887h-.6a.287.287 0 0 1-.287.287v.6Zm-1.174 0h1.174v-.6H14.98v.6Zm-.887-.887c0 .49.397.887.887.887v-.6a.287.287 0 0 1-.287-.287h-.6Zm.887-.887a.887.887 0 0 0-.887.887h.6c0-.159.129-.287.287-.287v-.6Zm-3.522.6h1.174v-.6h-1.174v.6Zm-.287.287c0-.159.128-.287.287-.287v-.6a.887.887 0 0 0-.887.887h.6Zm.287.287a.287.287 0 0 1-.287-.287h-.6c0 .49.397.887.887.887v-.6Zm1.174 0h-1.174v.6h1.174v-.6Zm.287-.287a.287.287 0 0 1-.287.287v.6c.49 0 .887-.397.887-.887h-.6Zm-.287-.287c.159 0 .287.128.287.287h.6a.887.887 0 0 0-.887-.887v.6Zm1.761-11.217H9.697v.6h4.696v-.6Zm.887.887a.887.887 0 0 0-.887-.887v.6c.159 0 .287.128.287.287h.6Zm-.887.887c.49 0 .887-.397.887-.887h-.6a.287.287 0 0 1-.287.287v.6Zm-4.696 0h4.696v-.6H9.697v.6ZM8.81 4.97c0 .49.397.887.887.887v-.6a.287.287 0 0 1-.287-.287h-.6Zm.887-.887a.887.887 0 0 0-.887.887h.6c0-.159.128-.287.287-.287v-.6Z"
        fill={colorCheck(props.color) || `currentColor`}
        mask="url(#cashier-icon_svg__a)"
      />
    </svg>
  );
}

export default SvgCashierIcon;