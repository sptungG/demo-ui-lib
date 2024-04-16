import { isNaN, isNil, merge } from "lodash";
import {
  Borders,
  Flexbox,
  HorizontalSizing,
  MarginSpacing,
  PaddingSpacing,
  Palette,
  PartialTheme,
  PropTypes,
  Sizing,
  Spacing,
  Theme,
  VerticalSizing,
} from "./types";
import { css, CSSObject } from "styled-components";
import { locales } from "./locales";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n' +
  '    "Droid Sans", "Helvetica Neue", sans-serif';

export default function createSapoTheme(options?: PartialTheme, ...args: object[]): Theme {
  const pxToRem = (pixel: number) => {
    const fontSize = 14;
    const htmlFontSize = 10;
    const coefficient = options?.coefficient || fontSize / 14;
    return `${(pixel / htmlFontSize) * coefficient}rem`;
  };
  const spacing = (num: number | string | null | undefined) => {
    return num ? (isNaN(+num) ? num : pxToRem(+num * 4)) : undefined;
  };
  return merge(
    {
      shape: {
        borderColor: {
          primary: {
            main: "#D3D4D5",
          },
          secondary: {
            main: "#CFD1D3",
          },
        },
      },
      pxToRem: pxToRem,
      spacing: spacing,
      i18n: (key: string, data?: any) => {
        const text =
          options?.locales?.[options?.currentLocale || "vi"]?.[key] ||
          (locales as any)[options?.currentLocale || "vi"]?.[key];
        if (!data) return text;
        let result = text;
        Object.keys(data).forEach((e) => {
          result = result.replace(`{{${e}}}`, data[e]);
        });
        return result;
      },
      typography: {
        h1: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(32),
          lineHeight: pxToRem(44),
          margin: 0,
        },
        h2: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(32),
          lineHeight: pxToRem(44),
          margin: 0,
        },
        h3: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(28),
          lineHeight: pxToRem(40),
          margin: 0,
        },
        h4: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(20),
          lineHeight: pxToRem(28),
          margin: 0,
        },
        h5: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(20),
          lineHeight: pxToRem(28),
          margin: 0,
        },
        h6: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(16),
          lineHeight: pxToRem(20),
          margin: 0,
        },
        body1: {
          fontFamily: fontFamily,
          fontWeight: 400,
          fontSize: pxToRem(14),
          lineHeight: pxToRem(20),
          margin: 0,
        },
        body2: {
          fontFamily: fontFamily,
          fontWeight: 400,
          fontSize: pxToRem(13),
          lineHeight: pxToRem(16),
          margin: 0,
        },
        subtitle1: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(14),
          lineHeight: pxToRem(20),
          margin: 0,
        },
        subtitle2: {
          fontFamily: fontFamily,
          fontWeight: 500,
          fontSize: pxToRem(13),
          lineHeight: pxToRem(16),
          margin: 0,
        },
        fontFamily: fontFamily,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
      palette: {
        primary: {
          main: "#0088FF",
          "80": "#33A0FF",
          "60": "#66B8FF",
          "40": "#99CFFF",
          "20": "#CCE7FF",
          "15": "#D9EDFF",
          "10": "#E6F4FF",
          "5": "#F2F9FF",
          gradient: "linear-gradient(65.71deg, #0088FF 28.29%, #33A0FF 97.55%)",
        },
        success: {
          main: "#0FD186",
          "80": "#3FDA9E",
          "60": "#6FE3B6",
          "40": "#9FEDCF",
          "20": "#CFF6E7",
          "15": "#DBF8ED",
          "10": "#F3FCF9",
          "5": "#F3FCF9",
          gradient: "linear-gradient(62.06deg, #0FD186 25.88%, #3FDA9E 100%)",
          textStatus: "#0DB473",
        },
        error: {
          main: "#FF4D4D",
          "80": "#FF7070",
          "60": "#FF9494",
          "40": "#FFB8B8",
          "20": "#FFDF9B",
          "15": "#FFE5E5",
          "10": "#FFEEEE",
          "5": "#FFF6F6",
          gradient: "linear-gradient(64.1deg, #FF4D4D 22.64%, #FF7070 102.8%)",
          textStatus: "#EE4747",
        },
        warning: {
          main: "#FFAE06",
          "80": "#FFBE38",
          "60": "#FFCE6A",
          "40": "#FFDF9B",
          "20": "#FFDF9B",
          "15": "#FFF3DA",
          "5": "#FFF7E7",
          gradient: "linear-gradient(66.01deg, #FFAE06 37.34%, #FFBE38 101.09%)",
          textStatus: "#E49C06",
        },
        ink: {
          main: "#0F1824",
          "80": "#46515F",
          "60": "#747C87",
          "40": "#A3A8AF",
          "30": "#E8EAEB",
          "20": "#F3F4F5",
          "5": "#F3F4F5",
        },
        extra: {
          main: "#5364FE",
          "40": "#BAC1FF",
          "5": "#EEF2FD",
          textStatus: "#5364FE",
        },
        black: {
          main: "#212B35",
          "80": "#4D555D",
          "60": "#7A8086",
          "40": "#A6AAAE",
          "20": "#DEDFE1",
          "5": "#F4F4F5",
        },
        text: {
          primary: "#0F1824",
          disabled: "#747C87",
        },
        stroke: "#D3D5D7",
      },
    } as Theme,
    options,
    ...args
  );
}

export const getColorStatusByVariant = (color?: PropTypes.ColorVariant | string) => {
  if (!color)
    return css`
      color: ${(p) => p.theme.palette.text.primary};
    `;
  switch (color) {
    case "error":
    case "warning":
    case "success":
    case "extra":
      return css`
        color: ${(p) => p.theme.palette[color].textStatus};
      `;
    case "primary":
      return css`
        color: ${(p) => p.theme.palette.primary.main};
      `;
    case "inactive":
      return css`
        color: ${(p) => p.theme.palette.ink.main};
      `;
    case "disabled":
      return css`
        color: ${(p) => p.theme.palette.text.disabled};
      `;
    default:
      return css`
        color: ${() => color};
      `;
  }
};

export const cssPadding = ({ pl, pr, pt, pb, px, py, padding }: Partial<PaddingSpacing>) => css`
  padding: ${({ theme }) => theme.spacing(padding)};
  padding-left: ${({ theme }) => (isNil(pl) ? theme.spacing(px) : theme.spacing(pl))};
  padding-top: ${({ theme }) => (isNil(pt) ? theme.spacing(py) : theme.spacing(pt))};
  padding-right: ${({ theme }) => (isNil(pr) ? theme.spacing(px) : theme.spacing(pr))};
  padding-bottom: ${({ theme }) => (isNil(pb) ? theme.spacing(py) : theme.spacing(pb))};
`;

export const cssMargin = ({ ml, mr, mt, mb, mx, my, margin }: Partial<MarginSpacing>) => css`
  margin: ${({ theme }) => theme.spacing(margin)};
  margin-left: ${({ theme }) => (isNil(ml) ? theme.spacing(mx) : theme.spacing(ml))};
  margin-top: ${({ theme }) => (isNil(mt) ? theme.spacing(my) : theme.spacing(mt))};
  margin-right: ${({ theme }) => (isNil(mr) ? theme.spacing(mx) : theme.spacing(mr))};
  margin-bottom: ${({ theme }) => (isNil(mb) ? theme.spacing(my) : theme.spacing(mb))};
`;

export const cssSpacing = (props: Partial<Spacing>) => css`
  ${() => cssMargin(props as any)}
  ${() => cssPadding(props as any)}
`;

export const cssHorizontalSizing = ({
  width,
  _width,
  maxWidth,
  minWidth,
}: Partial<HorizontalSizing & { _width: CSSObject["width"] }>) => css`
  width: ${({ theme }) => theme.spacing(width || _width)};
  min-width: ${({ theme }) => theme.spacing(minWidth)};
  max-width: ${({ theme }) => theme.spacing(maxWidth)};
`;

export const cssVerticalSizing = ({ maxHeight, height, minHeight }: Partial<VerticalSizing>) => css`
  height: ${({ theme }) => theme.spacing(height)};
  min-height: ${({ theme }) => theme.spacing(minHeight)};
  max-height: ${({ theme }) => theme.spacing(maxHeight)};
`;

export const cssSizing = (props: Partial<Sizing>) => css`
  ${() => cssVerticalSizing(props as any)}
  ${() => cssHorizontalSizing(props as any)}
`;

export const cssBorders = ({
  border,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  borderBottom,
}: Partial<Borders>) => css`
  border: ${({}) => border};
  border-left: ${({}) => borderLeft};
  border-right: ${({}) => borderRight};
  border-top: ${({}) => borderTop};
  border-bottom: ${({}) => borderBottom};
  border-radius: ${({}) => borderRadius};
`;

export const cssFlexbox = ({ flex, display, justifyContent, alignItems }: Partial<Flexbox>) => css`
  flex: ${({}) => flex};
  display: ${({}) => display};
  justify-content: ${({}) => justifyContent};
  align-items: ${({}) => alignItems};
`;

export const cssPalette = ({ color, bgColor }: Partial<Palette>) => css`
  color: ${({}) => color};
  background-color: ${({}) => bgColor};
`;

export * from "./types";
