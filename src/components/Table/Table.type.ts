import React from "react";
import { CSSObject } from "styled-components";

export type TableSize = "regular" | "auto" | "small" | "large" | "extra-large";
export type TableTheme = "light" | "dark" | "grey";
export type SortDirection = "asc" | "desc";

export interface TableProps extends React.PropsWithChildren<{}> {
  items: any[];
  total: number;
  uniqueKey?: string;
  nameObjectSelected?: string;
  rowCount?: boolean;
  page?: number;
  limit?: number;
  shortPagination?: boolean;
  onPageChange?: (page: number, limit: number) => void;
  sortDirection?: SortDirection;
  sortBy?: string;
  onSort?: (direction: SortDirection, field?: string) => void;
  settingColumns?: Record<string, boolean>;
  onToggleSettings?: () => void;
  tableSize?: TableSize;
  tableTheme?: TableTheme;
  selectable?: boolean;
  onSelectionChange?: (items: any[]) => void;
  selectedItems?: any[];
  sticky?: boolean;
  stickyPosition?: CSSObject["top"];
  fixTopTableRow?: () => JSX.Element;
  fixTopTableRowV2?: () => JSX.Element;
  fixScrollXBar?: boolean;
  onOpenDrillDown?: (item: any) => any;
  onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>, id: any) => any;
  scrollXStyle?: React.CSSProperties;
  maxHeightScroll?: CSSObject["height"];
}

export interface TableRef {
  update: () => void;
}

export interface TableCellProps extends React.PropsWithChildren<{}> {
  align?: "left" | "center" | "right" | "justify";
  field: string;
  sortable?: boolean;
  width?: CSSObject["width"];
  maxWidth?: CSSObject["maxWidth"];
  minWidth?: CSSObject["minWidth"];
  rowSpan?: number;
  colSpan?: number;
  depth?: number;
  color?: CSSObject["color"];
  background?: CSSObject["background"];
  isShow?: boolean;
  isSubCell?: boolean;
  subCells?: TableCellProps[];
  isOpenDrillDown?: boolean;
  sticky?: boolean;
}

export interface TableColumnProps {
  field?: string;
  title?: string;
  sortable?: boolean;
  width?: CSSObject["width"];
  maxWidth?: CSSObject["maxWidth"];
  minWidth?: CSSObject["minWidth"];
  align?: "inherit" | "left" | "center" | "right" | "justify";
  cellTemplate?: React.ComponentType<any>;
  component?: React.ReactNode;
  sticky?: boolean;
}
