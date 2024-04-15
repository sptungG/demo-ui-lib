import React, { useCallback, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table, { TableColumn, SortDirection, TableDrillDownTemplate, TableDrillDown } from "../../components/Table";
import Link from "../../components/Link";
import Chip from "../../components/Chip";
import Button from "../../components/Button";
import TableCellBulkAction, { TableCellBulkActionTemplate } from "../../components/Table/TableCellBulkAction";
import { TableBasic, TableHeadBasic, TableBodyBasic, TableRowBasic, TableCellBasic } from "../../index";
import Dropdown from "../../components/Dropdown";

export default {
  id: "Table",
  title: "Components/Table",
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  status: string,
  isHaveDrillDown?: boolean
) {
  return { id, name, calories, fat, carbs, protein, status, isHaveDrillDown };
}

interface FoodType {
  id: number;
  name: string;
  fat: number;
  calories: number;
  carbs: number;
  status: string;
  protein: number;
  isHaveDrillDown?: boolean;
}

const foods: FoodType[] = [];
for (let i = 0; i < 3; i++) {
  foods.push(
    createData(
      i + 1,
      "Frozen yoghurt",
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      "Hoàn thành",
      !!(i % 3)
    )
  );
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T | undefined) {
  if (!orderBy) return 0;
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: "asc" | "desc" | undefined,
  orderBy: Key | undefined
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: readonly any[], comparator: (a: any, b: any) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [any, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const settingColumns: Record<string, boolean> = {
  name: true,
  calories: true,
  group: true,
  fat: true,
  carbs: true,
  protein: true,
  status: true,
};

const Template: ComponentStory<typeof Table> = (args) => {
  return (
    <TableBasic>
      <TableHeadBasic>
        <TableRowBasic>
          <TableCellBasic>Name</TableCellBasic>
          <TableCellBasic>Calories</TableCellBasic>
          <TableCellBasic>Fat&nbsp;(g)</TableCellBasic>
          <TableCellBasic>Carbs&nbsp;(g)</TableCellBasic>
          <TableCellBasic>Protein&nbsp;(g)</TableCellBasic>
          <TableCellBasic>Trạng thái</TableCellBasic>
        </TableRowBasic>
      </TableHeadBasic>
      <TableBodyBasic>
        {foods.map((item, index) => {
          return (
            <TableRowBasic key={index}>
              <TableCellBasic style={{ width: 300 }}>{item.name}</TableCellBasic>
              <TableCellBasic>{item.calories}</TableCellBasic>
              <TableCellBasic>{item.fat}</TableCellBasic>
              <TableCellBasic>{item.carbs}</TableCellBasic>
              <TableCellBasic>{item.protein}</TableCellBasic>
              <TableCellBasic>{item.status}</TableCellBasic>
            </TableRowBasic>
          );
        })}
      </TableBodyBasic>
    </TableBasic>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateSmall: ComponentStory<typeof Table> = (args) => {
  return (
    <Table.type {...args} items={foods}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="fat" align="center" title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>
  );
};

export const Small = TemplateSmall.bind({});
Small.args = { tableSize: "small" };
Small.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateGroupColumn: ComponentStory<typeof Table> = (args) => {
  return (
    <Table.type {...args} items={foods}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn align="center" title="Detail">
        <TableColumn field="fat" align="center" title="Fat (g)" />
        <TableColumn field="carbs" align="center" title="Carbs (g)" />
        <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      </TableColumn>
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>
  );
};

export const GroupColumn = TemplateGroupColumn.bind({});
GroupColumn.args = {};
GroupColumn.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateSettingGroupColumn: ComponentStory<typeof Table> = (args) => {
  const handleToggleSettings = useCallback(() => {}, []);
  return (
    <Table.type {...args} items={foods} onToggleSettings={handleToggleSettings} settingColumns={settingColumns}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="group" align="center" title="Detail">
        <TableColumn field="fat" align="center" title="Fat (g)" />
        <TableColumn field="carbs" align="center" title="Carbs (g)" />
        <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      </TableColumn>
      <TableColumn width={150} field="status" align="center" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>
  );
};

export const SettingColumn = TemplateSettingGroupColumn.bind({});
SettingColumn.args = {};
SettingColumn.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateGroupColumnCustom: ComponentStory<typeof Table> = (args) => {
  const handleToggleSettings = useCallback(() => {}, []);
  return (
    <Table.type
      {...args}
      rowCount
      items={foods}
      onToggleSettings={handleToggleSettings}
      settingColumns={settingColumns}
    >
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="group" align="center" title="Detail">
        <TableColumn field="fat" align="center" title="Fat (g)" />
        <TableColumn field="carbs" align="center" title="Carbs (g)" />
        <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      </TableColumn>
      <TableColumn width={150} field="status" align="center" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>
  );
};

export const DarkTheme = TemplateGroupColumnCustom.bind({});
DarkTheme.args = {
  tableTheme: "dark",
};
DarkTheme.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateSortable: ComponentStory<typeof Table> = (args) => {
  const [filter, setFilter] = useState<{
    sortBy?: string;
    sortDirection?: SortDirection;
  }>({});
  const handleToggleSettings = useCallback(() => {}, []);
  const handleSort = useCallback((direction: SortDirection, field?: string) => {
    setFilter({
      sortBy: field,
      sortDirection: direction,
    });
  }, []);
  return (
    <Table.type sortBy={filter.sortBy} sortDirection={filter.sortDirection} {...args} items={foods} onSort={handleSort}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" sortable title="Calories" />
      <TableColumn field="fat" align="center" sortable title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>
  );
};

export const Sortable = TemplateSortable.bind({});
Sortable.args = {};
Sortable.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateDrillDown: ComponentStory<typeof Table> = (args) => {
  const [filter, setFilter] = useState<{
    sortBy?: string;
    sortDirection?: SortDirection;
  }>({});

  const handleOpenDrillDown = useCallback(async (item: FoodType) => {
    await new Promise((r) => setTimeout(r, 200));
    return item;
  }, []);

  const handleSort = useCallback((direction: SortDirection, field?: string) => {
    setFilter({
      sortBy: field,
      sortDirection: direction,
    });
  }, []);

  return (
    <Table.type
      sortBy={filter.sortBy}
      sortDirection={filter.sortDirection}
      {...args}
      items={foods}
      onSort={handleSort}
      onOpenDrillDown={handleOpenDrillDown}
    >
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" sortable title="Calories" />
      <TableColumn field="fat" align="center" sortable title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
      <TableDrillDown>
        {({ item }: TableDrillDownTemplate<FoodType>) => <div style={{ margin: 30 }}>{JSON.stringify(item)}</div>}
      </TableDrillDown>
    </Table.type>
  );
};

export const DrillDown = TemplateDrillDown.bind({});
DrillDown.args = {};
DrillDown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateSelectable: ComponentStory<typeof Table> = (args) => {
  const [selectedItems, setSelectedItems] = useState<FoodType[]>([]);
  return (
    <Table.type {...args} items={foods} selectable selectedItems={selectedItems} onSelectionChange={setSelectedItems}>
      <TableCellBulkAction
        textSelected={(num: number, isSelectedAll: boolean) =>
          isSelectedAll ? "Đã chọn tất cả trên trang này" : `Đã chọn ${num} trên trang này`
        }
      >
        {({ selectedItems }: TableCellBulkActionTemplate) => (
          <React.Fragment>
            <Button ml={4} onClick={() => console.log(selectedItems)} variant="text">
              Cập nhật khách hàng
            </Button>
            <Button ml={4} variant="text">
              Ngừng giao dịch
            </Button>
            <Button ml={4} variant="text">
              Xóa khách hàng
            </Button>
            <Dropdown
              placeholder="Thao tác khác"
              value={null}
              onChange={(value) => console.log(value, selectedItems)}
              ml={4}
              width="180px"
              options={[
                { id: 1, name: "Cập nhật khách hàng" },
                { id: 2, name: "Ngừng giao dịch" },
                { id: 3, name: "Xóa khách hàng" },
              ]}
              renderOption={(item) => item.name}
            />
          </React.Fragment>
        )}
      </TableCellBulkAction>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="fat" align="center" title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>
  );
};

export const Selectable = TemplateSelectable.bind({});
Selectable.args = {};
Selectable.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};

const TemplateOftenUsed: ComponentStory<typeof Table> = (args) => {
  const [selectedItems, setSelectedItems] = useState<FoodType[]>([]);
  const handleToggleSettings = useCallback(async () => {}, []);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 20,
  });
  const handleOpenDrillDown = useCallback(async (item: FoodType) => {
    await new Promise((r) => setTimeout(r, 200));
    return item;
  }, []);
  const handlePageChange = useCallback(
    (page: number, limit: number) =>
      setFilter((prev) => ({
        ...prev,
        limit: limit,
        page: page,
      })),
    []
  );
  return (
    <Table.type
      {...args}
      total={100}
      items={foods}
      selectable
      nameObjectSelected={"khách hàng"}
      selectedItems={selectedItems}
      onSelectionChange={setSelectedItems}
      onOpenDrillDown={handleOpenDrillDown}
      page={filter.page}
      limit={filter.limit}
      onPageChange={handlePageChange}
      onToggleSettings={handleToggleSettings}
      settingColumns={settingColumns}
      sticky
      stickyPosition="0px"
      onRowClick={(item) => {
        alert(`Click Row: ${item}`);
      }}
    >
      <TableCellBulkAction>
        {({ selectedItems }: TableCellBulkActionTemplate) => (
          <React.Fragment>
            <Button ml={4} onClick={() => console.log(selectedItems)} variant="text">
              Cập nhật khách hàng
            </Button>
            <Button ml={4} variant="text">
              Ngừng giao dịch
            </Button>
            <Button ml={4} variant="text">
              Xóa khách hàng
            </Button>
            <Dropdown
              placeholder="Thao tác khác"
              value={null}
              onChange={(value) => console.log(value, selectedItems)}
              ml={4}
              strategy="fixed"
              width="180px"
              options={[
                { id: 1, name: "Cập nhật khách hàng" },
                { id: 2, name: "Ngừng giao dịch" },
                { id: 3, name: "Xóa khách hàng" },
              ]}
              renderOption={(item) => item.name}
            />
          </React.Fragment>
        )}
      </TableCellBulkAction>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="fat" align="center" title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
      <TableDrillDown>
        {({ item }: TableDrillDownTemplate<FoodType>) => <div style={{ margin: 30 }}>{JSON.stringify(item)}</div>}
      </TableDrillDown>
    </Table.type>
  );
};

export const OftenUsed = TemplateOftenUsed.bind({});
OftenUsed.args = {};
OftenUsed.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472",
  },
};
