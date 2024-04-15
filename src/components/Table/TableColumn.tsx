import React from "react";
import { TableColumnProps } from "./Table.type";

export const TableColumn: React.FunctionComponent<TableColumnProps> = function (_: any) {
  return null;
};

TableColumn.displayName = "TableColumn";

TableColumn.defaultProps = {
  align: "left",
  sortable: false,
};
