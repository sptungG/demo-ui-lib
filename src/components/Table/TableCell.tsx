import React, { memo, useCallback, useMemo } from "react";
import { ArrowDuoDownIcon, ArrowDuoRightIcon } from "../../assets/svgr";
import { TableCellProps, TableSize, TableTheme } from "./Table.type";
import { useContextSelector } from "use-context-selector";
import Checkbox from "../Checkbox";
import IconButton from "../IconButton";
import TableContext from "./TableContext";
import { TableHeadContext } from "./TableHead";
import { TableRowContext } from "./TableRow";
import { Typography, useTooltip } from "../../index";
import styled, { css } from "styled-components";
import { CSSObject } from "@storybook/theming";

interface StyledTableCellProps extends Pick<TableCellProps, "align"> {
  tableTheme?: TableTheme;
  tableSize?: TableSize;
  isOpenDrillDown?: boolean;
  _color?: CSSObject["color"];
  sticky?: boolean;
}

const TableCell = memo(({ children, field, color, isOpenDrillDown, sticky, ...props }: TableCellProps) => {
  const item = useContextSelector(TableRowContext, (v) => v.item);
  const tableTheme = useContextSelector(TableContext, (v) => v.tableTheme);
  const tableSize = useContextSelector(TableContext, (v) => v.tableSize);

  // const labelRef = useRef<HTMLTableDataCellElement | null>(null);
  // const [isEllipsisOn, setIsEllipsisOn] = React.useState(false);
  const rebuildTooltip = useTooltip();
  const childrenWithProps = useMemo(() => (typeof children === "function" ? children(item) : item?.[field]), [item]);

  // React.useEffect(() => {
  //   if (labelRef.current) {
  //     if (labelRef?.current?.offsetWidth < labelRef?.current?.scrollWidth) {
  //       setIsEllipsisOn(true);
  //       rebuildTooltip();
  //     }
  //   }
  // }, [labelRef?.current, childrenWithProps, item]);
  React.useEffect(() => {
    rebuildTooltip();
  }, [childrenWithProps, item]);

  return (
    <StyledTD
      {...props}
      _color={color}
      tableSize={tableSize}
      tableTheme={tableTheme}
      isOpenDrillDown={isOpenDrillDown}
      sticky={sticky}
    >
      {typeof childrenWithProps === "string" || typeof childrenWithProps === "number" ? (
        <StyledTypography
          align={props.align || "left"}
          noWrap
          // ref={labelRef}
          width="fit-content"
          maxWidth="100%"
          data-tip={childrenWithProps}
          data-tip-placement="top"
          // data-tip={isEllipsisOn ? childrenWithProps : childrenWithProps}
        >
          {childrenWithProps}
        </StyledTypography>
      ) : (
        childrenWithProps
      )}
    </StyledTD>
  );
});

const CellActions = styled.div<{ isHave2Icons: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isHave2Icons }) => (isHave2Icons ? "80px" : "50px")};
`;

const EmptyElement = styled.div<{}>`
  width: ${({ theme }) => theme.pxToRem(30)};
  height: ${({ theme }) => theme.pxToRem(30)};
  pointer-events: none;
  flex: none;
`;

const StyledTD = styled.td<StyledTableCellProps & { isToolCell?: boolean }>`
  color: inherit;
  position: ${({ sticky }) => sticky && "sticky"};
  position: ${({ sticky }) => sticky && "-webkit-sticky"};
  z-index: ${({ sticky }) => sticky && "8"};
  background-color: ${({ sticky }) => sticky && "inherit"};
  left: 0px;

  text-align: ${({ align }) => align || "left"};
  ${({ theme }) => theme.typography["body1"]};
  padding: ${({ theme, isToolCell }) => (isToolCell ? 0 : `0 ${theme.pxToRem(16)}`)};
  line-height: ${({ theme }) => theme.pxToRem(18)};
  border-bottom: ${({ theme, isOpenDrillDown }) =>
    isOpenDrillDown ? undefined : `1px solid ${theme.palette.ink["30"]}`};
  border-right: ${({ tableTheme }) => (tableTheme !== "dark" ? "none" : `1px solid #DDDFE1`)};
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ theme, tableSize }) => {
    switch (tableSize) {
      case "small":
        return theme.pxToRem(40);
      case "regular":
        return theme.pxToRem(52);
      case "large":
        return theme.pxToRem(60);
      case "extra-large":
        return theme.pxToRem(86);
      default:
        return theme.pxToRem(52);
    }
  }};
`;

TableCell.displayName = "TableCell";
export default TableCell;

const StyledTypography = styled(Typography)`
  display: inline-block;
`;

const SettingButton = styled(IconButton)<{ tableTheme?: TableTheme; open?: boolean }>`
  padding: 0;
  background: transparent;

  &:hover {
    background: ${({ theme, tableTheme }) => (tableTheme === "dark" ? "#243751" : theme.palette.ink["30"])};
  }

  svg {
    color: ${({ theme, tableTheme, open }) =>
      tableTheme === "dark" ? "#fff" : open ? theme.palette.primary.main : theme.palette.ink["40"]};
    height: ${({ theme }) => theme.pxToRem(24)};

    &:hover {
      background: transparent;
    }
  }
`;

export interface TableCellToolbarProps extends React.PropsWithChildren<{}> {
  isSelected?: boolean;
  isIndeterminate?: boolean;
  isHaveDrillDown?: boolean;
  isOpenDrillDown?: boolean;
  isLoadingDrillDown?: boolean;
  onClickDrillDown?: () => void;
}

const TableCellToolbar = memo(
  ({
    children,
    isSelected,
    isIndeterminate,
    isLoadingDrillDown,
    isOpenDrillDown,
    isHaveDrillDown,
    onClickDrillDown,
    ...props
  }: TableCellToolbarProps) => {
    const item = useContextSelector(TableRowContext, (v) => v.item);
    const rowSpan = useContextSelector(TableHeadContext, (v) => v.rowSpan);
    const rowCount = useContextSelector(TableContext, (v) => v.rowCount);
    const tableSize = useContextSelector(TableContext, (v) => v.tableSize);
    const tableTheme = useContextSelector(TableContext, (v) => v.tableTheme);
    const selectable = useContextSelector(TableContext, (v) => v.selectable);
    const onSelectionChange = useContextSelector(TableContext, (v) => v.onSelectionChange);
    const handleSelectionChange = useCallback(() => onSelectionChange?.(item), [onSelectionChange, item]);
    const onToggleSettings = useContextSelector(TableContext, (v) => v.onToggleSettings);

    return (
      <StyledTD
        {...props}
        isToolCell
        rowSpan={rowSpan}
        tableSize={tableSize}
        tableTheme={tableTheme}
        isOpenDrillDown={isOpenDrillDown}
      >
        <CellActions isHave2Icons={!!onToggleSettings && !!selectable}>
          {onClickDrillDown ? (
            isHaveDrillDown ? (
              <SettingButton
                tableTheme={tableTheme}
                variant="text"
                size="medium"
                open={isOpenDrillDown}
                isLoading={isLoadingDrillDown}
                onClick={onClickDrillDown}
              >
                {isOpenDrillDown ? <ArrowDuoDownIcon /> : <ArrowDuoRightIcon />}
              </SettingButton>
            ) : (
              <EmptyElement />
            )
          ) : onToggleSettings ? (
            rowCount ? (
              <>{item.index || item.id}</>
            ) : (
              <EmptyElement />
            )
          ) : null}
          {!!selectable && (
            <Checkbox
              size="large"
              theme={tableTheme}
              checked={isSelected}
              indeterminate={isIndeterminate}
              onChange={handleSelectionChange}
            />
          )}
        </CellActions>
      </StyledTD>
    );
  }
);

TableCellToolbar.displayName = "TableCellToolbar";

export { TableCellToolbar };
