import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useModal } from "../../components/ModalProvider";
import Radio from "../../components/Radio";
import RadioGroup from "../../components/RadioGroup";
import SettingColumn, { ColumnGroup } from "../../components/SettingColumn";
import Typography from "../../components/Typography";

export default {
  id: "SettingColumn",
  title: "Components/SettingColumn",
  component: SettingColumn,
  argTypes: {},
} as Meta<typeof SettingColumn>;
const Template: StoryFn<typeof SettingColumn> = (args) => {
  const [settingColumns, setSettingColumns] = useState<Record<string, boolean>>(SettingColumnsDefault);
  const { openModal } = useModal();
  const [addNewToTop, setAddNewToTop] = useState<string>("1");

  let columns = Object.entries(settingColumns).map(([key, value]) => ({
    key: key,
    label: ColumnNames[key],
    disable: key === "id" || key === "name",
    defaultSelected: SettingColumnsDefault[key],
    selected: value,
  }));

  return (
    <Button
      onClick={() => {
        openModal(SettingColumn, {
          ...args,
          columnGroups: getColumnsGroup,
          columns: columns,
          additionalInfo: (
            <Box>
              <Box minHeight={"34px"} padding="0px" display={"grid"} alignItems={"center"}>
                <Typography>Thứ tự hiển thị hàng hóa:</Typography>
                <RadioGroup.type
                  value={addNewToTop}
                  onChange={(value: any) => {
                    setAddNewToTop(value);
                  }}
                  direction="row"
                >
                  <Radio.type value="1" label="Thêm sau lên trên" />
                  <Radio.type value="2" label="Thêm sau xuống dưới" />
                </RadioGroup.type>
              </Box>
            </Box>
          ),
        }).result.then((columns) => {
          setSettingColumns(columns);
        });
      }}
    >
      Setting column
    </Button>
  );
};
export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  sortable: true,
  title: "Tùy chỉnh hiển thị",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const SettingColumnsDefault: Record<string, boolean> = {
  id: true,
  name: true,
  phone: true,
  email: true,
  address: false,
  area: false,

  id_customer: true,
  name_customer: false,
  phone_customer: false,
};

const ColumnNames: Record<string, string> = {
  id: "Mã ID",
  name: "Tên",
  phone: "Số điện thoại",
  email: "Email",
  address: "Địa chỉ",
  area: "Khu vực",

  id_customer: "Mã khách hàng",
  name_customer: "Tên khách hàng",
  phone_customer: "SĐT khách hàng",
};

const getColumnsGroup: ColumnGroup[] = [
  {
    label: "Thông tin đơn hàng",
    columnKeys: ["id", "name", "phone", "email", "address", "area"],
  },
  {
    label: "Thông tin khách",
    columnKeys: ["id_customer", "name_customer", "phone_customer"],
  },
];
