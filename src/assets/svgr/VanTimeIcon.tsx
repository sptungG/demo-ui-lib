import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgVanTimeIcon(props: ISvgProps) {
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
        d="M13.55 7.141C13.927 4.794 15.887 3 18.242 3 20.866 3 23 5.227 23 7.965c0 2.52-1.809 4.607-4.143 4.923v4.877c0 .863-.673 1.565-1.5 1.565h-.761c-.285 1.115-1.26 1.939-2.418 1.939-1.156 0-2.132-.824-2.417-1.939h-3.67c-.286 1.115-1.261 1.939-2.418 1.939-1.157 0-2.132-.824-2.417-1.939h-.917C1.6 19.33 1 18.704 1 17.933v-5.697c0-1.31 1.021-2.376 2.277-2.375H6.06V8.706c0-.863.672-1.565 1.5-1.565h5.99ZM2.339 17.985h.917c.285-1.114 1.26-1.938 2.417-1.938.132 0 .26.011.387.031v-4.873H3.277c-.545 0-.988.463-.988 1.031v5.697c0 .03.022.052.05.052Zm2.12.673c0 .698.545 1.266 1.214 1.266.669 0 1.213-.568 1.213-1.266 0-.698-.544-1.266-1.213-1.266s-1.213.568-1.213 1.266Zm8.506 0c0 .698.545 1.266 1.213 1.266.67 0 1.214-.568 1.214-1.266 0-.698-.545-1.266-1.213-1.266-.67 0-1.213.568-1.214 1.265v.002Zm4.392-.673c.117 0 .211-.098.211-.22V12.88c-2.143-.319-3.83-2.133-4.058-4.394H7.56a.216.216 0 0 0-.212.22v8.015c.354.333.616.77.742 1.264h3.671c.285-1.114 1.26-1.938 2.417-1.938 1.157 0 2.133.824 2.418 1.938h.761Zm-2.584-10.02c0 1.996 1.556 3.62 3.47 3.62 1.912 0 3.468-1.624 3.468-3.62s-1.556-3.62-3.469-3.62c-1.913 0-3.47 1.624-3.47 3.62Zm4.085-.672h1.374c.356 0 .645.3.645.672a.659.659 0 0 1-.645.672h-2.019a.659.659 0 0 1-.644-.672V5.724c0-.372.288-.673.644-.673.356 0 .645.301.645.673v1.569Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M13.55 7.141v.25h.213l.034-.21-.247-.04Zm5.307 5.747-.033-.248-.217.03v.218h.25Zm-2.261 6.442v-.25h-.194l-.048.188.242.062Zm-4.835 0 .242-.062-.048-.188h-.194v.25Zm-3.67 0v-.25h-.195l-.048.188.242.062Zm-4.835 0 .242-.062-.048-.188h-.194v.25Zm.02-9.47v.25-.25Zm2.784 0v.25h.25v-.25h-.25Zm-2.804 8.125v.25h.194l.048-.188-.242-.062Zm2.417-1.938v-.25.25Zm.387.031-.04.247.29.047v-.294h-.25Zm0-4.873h.25v-.25h-.25v.25Zm6.905 7.454-.249-.019v.019h.25Zm0-.002h-.25v.01l.001.009.25-.019Zm0 0 .25.02.001-.02-.001-.017-.25.018Zm4.603-.892h.25v-.25h-.25v.25Zm0 0h-.25v.25h.25v-.25Zm0-4.885h.25v-.216l-.213-.032-.037.248ZM13.51 8.486l.249-.025-.023-.225h-.226v.25ZM7.348 16.72h-.25v.108l.079.074.171-.182Zm.742 1.264-.242.063.048.188h.194v-.25Zm3.671 0v.25h.194l.048-.188-.242-.062Zm4.835 0-.242.063.048.188h.194v-.25Zm2.262-10.692h-.25v.25h.25v-.25Zm-.616-4.543c-2.487 0-4.544 1.893-4.939 4.351l.494.08c.36-2.236 2.223-3.931 4.445-3.931v-.5Zm5.008 5.215c0-2.866-2.236-5.215-5.008-5.215v.5c2.476 0 4.508 2.105 4.508 4.715h.5Zm-4.36 5.17c2.465-.332 4.36-2.531 4.36-5.17h-.5c0 2.401-1.723 4.377-3.926 4.675l.067.496Zm.217 4.63v-4.877h-.5v4.877h.5Zm-1.75 1.815c.975 0 1.75-.824 1.75-1.814h-.5c0 .734-.57 1.314-1.25 1.314v.5Zm-.761 0h.762v-.5h-.762v.5Zm-2.418 1.939c1.281 0 2.35-.91 2.66-2.127l-.484-.124c-.26 1.014-1.142 1.75-2.175 1.75v.5Zm-2.66-2.127c.312 1.216 1.38 2.127 2.66 2.127v-.5c-1.033 0-1.916-.737-2.175-1.75l-.484.123Zm-3.428.188h3.671v-.5h-3.67v.5ZM5.673 21.52c1.28 0 2.349-.91 2.66-2.127l-.485-.124c-.259 1.014-1.142 1.75-2.175 1.75v.5Zm-2.66-2.127c.311 1.216 1.38 2.127 2.66 2.127v-.5c-1.033 0-1.916-.737-2.175-1.75l-.485.123Zm-.674.188h.917v-.5h-.917v.5ZM.75 17.933c0 .899.703 1.647 1.589 1.647v-.5c-.59 0-1.089-.504-1.089-1.147h-.5Zm0-5.697v5.697h.5v-5.697h-.5Zm2.527-2.625C1.873 9.61.75 10.798.75 12.236h.5c0-1.182.92-2.126 2.027-2.126v-.5Zm2.783 0H3.277v.5H6.06v-.5Zm-.25-.905V9.86h.5V8.706h-.5ZM7.56 6.89c-.976 0-1.75.824-1.75 1.815h.5c0-.735.57-1.315 1.25-1.315v-.5Zm5.99 0H7.56v.5h5.99v-.5ZM3.256 17.735h-.917v.5h.917v-.5Zm2.417-1.938c-1.28 0-2.349.91-2.66 2.127l.485.123c.259-1.013 1.142-1.75 2.175-1.75v-.5Zm.427.035a2.659 2.659 0 0 0-.427-.035v.5c.118 0 .233.01.347.028l.08-.493Zm-.29-4.627v4.873h.5v-4.873h-.5Zm-2.533.25H6.06v-.5H3.277v.5Zm-.738.781c0-.44.34-.78.738-.78v-.5c-.693 0-1.238.584-1.238 1.28h.5Zm0 5.697v-5.697h-.5v5.697h.5Zm-.2-.198c.12 0 .2.1.2.198h-.5c0 .157.124.302.3.302v-.5Zm3.334 1.939c-.521 0-.963-.446-.963-1.016h-.5c0 .826.646 1.516 1.463 1.516v-.5Zm.963-1.016c0 .57-.442 1.016-.963 1.016v.5c.817 0 1.463-.69 1.463-1.516h-.5Zm-.963-1.016c.52 0 .963.446.963 1.016h.5c0-.826-.646-1.516-1.463-1.516v.5Zm-.963 1.016c0-.57.442-1.016.963-1.016v-.5c-.817 0-1.463.69-1.463 1.516h.5Zm9.469 1.016c-.521 0-.963-.446-.964-1.016h-.5c0 .826.647 1.516 1.463 1.516v-.5Zm.963-1.016c0 .57-.443 1.016-.963 1.016v.5c.816 0 1.463-.69 1.463-1.516h-.5Zm-.963-1.016c.52 0 .963.446.963 1.016h.5c0-.826-.647-1.516-1.463-1.516v.5Zm-.964 1.015c0-.57.443-1.015.963-1.015v-.5c-.816 0-1.462.69-1.463 1.515h.5Zm0-.017v-.001l-.499.037.499-.036Zm0 .037-.499-.037.499.037Zm4.103-.912c0-.005.002-.011.008-.017a.044.044 0 0 1 .031-.013v.5c.265 0 .461-.22.461-.47h-.5Zm.25.25v-.5.5Zm-.25-5.135v4.885h.5V12.88h-.5Zm-4.057-4.37c.238 2.37 2.008 4.28 4.27 4.617l.074-.495c-2.024-.3-3.63-2.017-3.846-4.171l-.498.05Zm-5.702.226h5.951v-.5H7.56v.5Zm.04-.03a.026.026 0 0 1-.008.017.044.044 0 0 1-.032.013v-.5c-.264 0-.46.22-.46.47h.5Zm0 1.155V8.706h-.5V9.86h.5Zm0 6.86V9.86h-.5v6.86h.5Zm.734 1.203a2.885 2.885 0 0 0-.813-1.385l-.343.364c.32.3.557.696.671 1.145l.485-.124Zm3.428-.189h-3.67v.5h3.67v-.5Zm2.417-1.938c-1.28 0-2.348.91-2.66 2.127l.485.123c.26-1.013 1.142-1.75 2.175-1.75v-.5Zm2.66 2.127c-.31-1.216-1.379-2.127-2.66-2.127v.5c1.033 0 1.916.737 2.176 1.75l.484-.123Zm.52-.189h-.762v.5h.761v-.5Zm.884-6.4c-1.765 0-3.22-1.502-3.22-3.37h-.5c0 2.124 1.66 3.87 3.72 3.87v-.5Zm3.22-3.37c0 1.868-1.455 3.37-3.22 3.37v.5c2.061 0 3.72-1.746 3.72-3.87h-.5Zm-3.22-3.37c1.765 0 3.22 1.502 3.22 3.37h.5c0-2.124-1.66-3.87-3.72-3.87v.5Zm-3.22 3.37c0-1.868 1.455-3.37 3.22-3.37v-.5c-2.06 0-3.72 1.746-3.72 3.87h.5Zm5.21-.922h-1.374v.5h1.374v-.5Zm.895.922c0-.5-.391-.922-.895-.922v.5a.41.41 0 0 1 .395.422h.5Zm-.895.922c.504 0 .895-.423.895-.922h-.5a.41.41 0 0 1-.395.422v.5Zm-2.019 0h2.02v-.5h-2.02v.5Zm-.894-.922c0 .5.39.922.894.922v-.5a.409.409 0 0 1-.394-.422h-.5Zm0-2.241v2.24h.5v-2.24h-.5Zm.894-.923c-.504 0-.894.423-.894.923h.5c0-.244.186-.423.394-.423v-.5Zm.895.923c0-.5-.391-.923-.895-.923v.5a.41.41 0 0 1 .395.423h.5Zm0 1.569v-1.57h-.5v1.57h.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgVanTimeIcon;
