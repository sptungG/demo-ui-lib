import { CSSObject } from "styled-components";

export interface PartialTheme {
  coefficient?: number;
  palette?: Palette;
  shape?: Shape;
  typography?: Typography;
  currentLocale?: string;
  locales?: Record<string, Record<string, string>>;
}

export interface Theme {
  palette: PaletteVariant;
  shape: Shape;
  pxToRem: (px: number) => string;
  spacing: (num: number | string | null | undefined) => string | null | undefined;
  typography: Typography;
  i18n: (key: string, data?: Record<string, any>) => string;
}

interface PaletteVariant {
  primary: PaletteOpacity;
  secondary: PaletteOpacity;
  error: PaletteOpacity;
  warning: PaletteOpacity;
  info: PaletteOpacity;
  success: PaletteOpacity;
  extra: PaletteOpacity;
  ink: PaletteOpacity;
  black: PaletteOpacity;
  text: TypeText;
  stroke: string;
}

type PaletteOpacity = {
  main: string;
  90: string;
  80: string;
  70: string;
  60: string;
  50: string;
  40: string;
  30: string;
  20: string;
  15: string;
  10: string;
  5: string;
  textStatus: string;
  gradient?: string;
};

export interface MarginSpacing {
  ml?: string | number;
  mr?: string | number;
  mt?: string | number;
  mb?: string | number;
  mx?: string | number;
  my?: string | number;
  margin?: string | number;
}

export interface PaddingSpacing {
  pl?: string | number;
  pr?: string | number;
  pt?: string | number;
  pb?: string | number;
  px?: string | number;
  py?: string | number;
  padding?: string | number;
}

export interface Spacing extends MarginSpacing, PaddingSpacing {}

export interface HorizontalSizing {
  width?: CSSObject["width"];
  maxWidth?: CSSObject["maxWidth"];
  minWidth?: CSSObject["minWidth"];
}

export interface VerticalSizing {
  height?: CSSObject["height"];
  minHeight?: CSSObject["minHeight"];
  maxHeight?: CSSObject["maxHeight"];
}
export interface Flexbox {
  display?: CSSObject["display"];
  alignItems?: CSSObject["alignItems"];
  justifyContent?: CSSObject["justifyContent"];
  flex?: CSSObject["flex"];
}

export interface Palette {
  bgColor?: CSSObject["backgroundColor"];
  color?: CSSObject["color"];
}

export interface Borders {
  border?: CSSObject["border"];
  borderTop?: CSSObject["borderTop"];
  borderRight?: CSSObject["borderRight"];
  borderLeft?: CSSObject["borderLeft"];
  borderBottom?: CSSObject["borderBottom"];
  borderRadius?: CSSObject["borderRadius"];
}

export interface Sizing extends HorizontalSizing, VerticalSizing {}

export namespace PropTypes {
  export type ColorVariant =
    | "default"
    | "primary"
    | "warning"
    | "success"
    | "extra"
    | "error"
    | "inactive"
    | "disabled";
}

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}

export type Shape = {
  borderRadius: number;
  borderColor: PaletteVariant;
};

export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "subtitle1" | "subtitle2";

export interface FontStyle
  extends Required<{
    fontSize: number;
    fontFamily: CSSObject["fontFamily"];
    fontWeightLight: CSSObject["fontWeight"];
    fontWeightRegular: CSSObject["fontWeight"];
    fontWeightMedium: CSSObject["fontWeight"];
    fontWeightBold: CSSObject["fontWeight"];
  }> {}

export interface Typography extends Record<TypographyVariant, CSSObject>, FontStyle {}
