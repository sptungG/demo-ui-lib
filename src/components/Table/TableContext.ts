import { createContext } from "use-context-selector";
import { TableProps } from "./Table.type";

export interface TableContextType extends Omit<TableProps, "children" | "onSelectionChange"> {
  onSelectionChange: (item: any | "all") => void;
}

const TableContext = createContext<TableContextType>({
  total: 0,
  items: [],
  uniqueKey: "id",
  settingColumns: {},
  onSelectionChange: () => {},
});

export default TableContext;
