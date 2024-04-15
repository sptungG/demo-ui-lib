import React, { memo } from "react";
import styled, { css } from "styled-components";
import { cssSpacing, Spacing } from "../theme";

export type GridSize = "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridJustification =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type GridContentAlignment = "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
export type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type GridDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type GridItemsAlignment = "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
export interface GridProps extends React.PropsWithChildren<{}>, Spacing {
  container?: boolean;
  item?: boolean;
  //xl?: boolean | GridSize;
  //lg?: boolean | GridSize;
  //md?: boolean | GridSize;
  //sm?: boolean | GridSize;
  xs?: boolean | GridSize;
  wrap?: "nowrap" | "wrap-reverse" | "wrap";
  direction?: GridDirection;
  justify?: GridJustification;
  alignItems?: GridItemsAlignment;
  alignContent?: GridContentAlignment;
  spacing?: GridSpacing;
  //zeroMinWidth?: boolean;
  //children?: React.ReactNode;
}
const Grid = React.forwardRef<HTMLDivElement, GridProps>(({ ...props }, ref) => {
  return <GridStyled className={props.container ? "SapoGrid-container" : "SapoGrid-item"} {...props} ref={ref} />;
});
Grid.displayName = "Grid";
export default memo(Grid);

const GridStyled = styled.div<GridProps>`
  flex-grow: 0;
  box-sizing: border-box;
  max-width: ${({ xs }) =>
    xs === 1
      ? "calc(100% / 12)"
      : xs === 2
      ? "calc(200% / 12)"
      : xs === 3
      ? "25%"
      : xs === 4
      ? "calc(400% / 12)"
      : xs === 5
      ? "calc(500% / 12%)"
      : xs === 6
      ? "50%"
      : xs === 7
      ? "calc(700% / 12)"
      : xs === 8
      ? "calc(800% / 12)"
      : xs === 9
      ? "75%"
      : xs === 10
      ? "calc(1000% / 12)"
      : xs === 11
      ? "calc(1100% / 12)"
      : xs === 12
      ? "100%"
      : undefined};
  flex-basis: ${({ xs }) =>
    xs === 1
      ? "calc(100% / 12)"
      : xs === 2
      ? "calc(200% / 12)"
      : xs === 3
      ? "25%"
      : xs === 4
      ? "calc(400% / 12)"
      : xs === 5
      ? "calc(500% / 12)"
      : xs === 6
      ? "50%"
      : xs === 7
      ? "calc(700% / 12)"
      : xs === 8
      ? "calc(800% / 12)"
      : xs === 9
      ? "75%"
      : xs === 10
      ? "calc(1000% / 12)"
      : xs === 11
      ? "calc(1100% / 12)"
      : xs === 12
      ? "100%"
      : undefined};
  ${({ container }) =>
    container
      ? css`
          display: flex;
          flex-wrap: wrap;
        `
      : null};
  ${({ alignItems }) =>
    alignItems
      ? css`
          align-items: ${alignItems && alignItems !== "stretch" ? alignItems : ""};
        `
      : null};
  ${({ justify }) =>
    justify
      ? css`
          justify-content: ${justify};
        `
      : null};
  ${({ direction }) =>
    direction
      ? css`
          flex-direction: ${direction};
        `
      : null};
  ${({ wrap }) =>
    wrap
      ? css`
          flex-wrap: ${wrap};
        `
      : null};
  width: ${({ spacing }) => (spacing !== undefined ? "calc(100% + " + spacing * 8 + "px)" : undefined)};
  margin-left: ${({ spacing }) => (spacing !== undefined ? "-" + spacing * 8 + "px" : undefined)};
  margin-top: ${({ spacing }) => (spacing !== undefined ? "-" + spacing * 8 + "px" : undefined)};
  & > .SapoGrid-item {
    padding-left: ${({ spacing }) => (spacing !== undefined ? spacing * 8 + "px" : undefined)};
    padding-top: ${({ spacing }) => (spacing !== undefined ? spacing * 8 + "px" : undefined)};
    & > * {
      box-sizing: border-box;
    }
  }
  ${(props) => cssSpacing(props)}
`;
