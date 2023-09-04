import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropdown from "../../components/Dropdown";
import { Typography } from "../../index";

export default {
  id: "Dropdown",
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [selected, setSelected] = useState<any>({ id: 8, name: "Sacombank" });
  return (
    <Dropdown.type
      label="Thanh toán dự kiến"
      placeholder="Chọn thanh toán dự kiến"
      {...args}
      onChange={setSelected}
      value={selected}
      width={"200px"}
      popperWidth={"500px"}
      renderOption={(e) => e.name}
      options={[
        { id: 1, name: "Tiền mặt" },
        { id: 2, name: "Ví Shopee" },
        { id: 3, name: "VNPAY-QR" },
        { id: 4, name: "Zalo Pay" },
        { id: 5, name: "Vietcombank" },
        { id: 6, name: "VietinBank" },
        { id: 7, name: "SHBC" },
        { id: 8, name: "Sacombank" },
        { id: 9, name: "Techcombank" },
      ]}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const TemplateStandard: ComponentStory<typeof Dropdown> = (args) => {
  const [selected, setSelected] = useState<any>({ id: 1, percentage: "10%", text: "Thuế đầu vào" });
  return (
    <Dropdown.type
      {...args}
      variant="standard"
      onChange={setSelected}
      value={selected}
      renderValue={(selected) => selected.percentage}
      width={"100px"}
      popperWidth={"200px"}
      renderOption={(e) => {
        return (
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Typography>{e.text}</Typography>
            <Typography>{e.percentage}</Typography>
          </div>
        );
      }}
      options={[
        { id: 1, percentage: "10%", text: "Thuế đầu vào" },
        { id: 2, percentage: "20%", text: "Thuế đầu vào" },
        { id: 3, percentage: "10%", text: "Thuế đầu vào" },
        { id: 4, percentage: "0%", text: "Không áp dụng thuế" },
        { id: 5, percentage: "5%", text: "Thuế đầu vào" },
      ]}
    />
  );
};

export const Standard = TemplateStandard.bind({});
Standard.args = {};
Standard.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const TemplateMultiple: ComponentStory<typeof Dropdown> = (args) => {
  const [selected, setSelected] = useState<any[]>([]);

  const options = [
    { id: 1, name: "Tiền mặt" },
    { id: 2, name: "Ví Shopee" },
    { id: 3, name: "VNPAY-QR" },
    { id: 4, name: "Zalo Pay" },
    { id: 5, name: "Vietcombank" },
    { id: 6, name: "VietinBank" },
    { id: 7, name: "SHBC" },
    { id: 8, name: "Sacombank" },
    { id: 9, name: "Techcombank" },
  ];

  return (
    <Dropdown.type
      label="Thanh toán dự kiến"
      placeholder="Chọn thanh toán dự kiến"
      {...args}
      multiple
      value={selected}
      onChange={setSelected}
      renderOption={(e) => e.name}
      disabledSelectAll
      tooltipLabel="Chọn phương thức thanh toán"
      options={options}
      disabledOptions={selected.length === 4 ? options.filter((e) => !selected.find((s) => s.id === e.id)) : []}
    />
  );
};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {};
Multiple.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const TemplateInline: ComponentStory<typeof Dropdown> = (args) => {
  const [selected, setSelected] = useState<any[]>([{ id: 1, name: "Tiền mặt" }]);
  return (
    <Dropdown.type
      label="Thanh toán dự kiến"
      placeholder="Chọn thanh toán dự kiến"
      {...args}
      multiple
      value={selected}
      onChange={setSelected}
      renderOption={(e) => e.name}
      inline
      options={[
        { id: 1, name: "Tiền mặt" },
        { id: 2, name: "Ví Shopee" },
        { id: 3, name: "VNPAY-QR" },
        { id: 4, name: "Zalo Pay" },
        { id: 5, name: "Vietcombank" },
        { id: 6, name: "VietinBank" },
        { id: 7, name: "SHBC" },
        { id: 8, name: "Sacombank" },
        { id: 9, name: "Techcombank" },
      ]}
    />
  );
};

export const Inline = TemplateInline.bind({});
Inline.args = {};
Inline.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
