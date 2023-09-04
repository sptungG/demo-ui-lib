import { SVGProps } from "react";

interface ISvgProps extends SVGProps<SVGSVGElement> {
  size?: "small" | "regular" | "large" | string;
  color?: "primary" | "warning" | "success" | "error" | string;
}

export default ISvgProps;
