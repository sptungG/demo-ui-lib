import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DatePickerPlus, { DateTransfer } from "../../components/DatePicker/DatePickerPlus";

export default {
  title: "Components/DatePickerPlus",
  component: DatePickerPlus.type,
  argTypes: {},
} as ComponentMeta<typeof DatePickerPlus>;

const Template: ComponentStory<typeof DatePickerPlus> = (args) => {
  const [value, setValue] = useState<DateTransfer>({
    firstDate: null,
    lastDate: null,
    textTransfer: null,
  });
  return <DatePickerPlus.type {...args} value={value} onChange={setValue} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Ngày tạo",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9886",
  },
};

const TemplateInline: ComponentStory<typeof DatePickerPlus> = (args) => {
  const [value, setValue] = useState<DateTransfer>({
    firstDate: null,
    lastDate: null,
    textTransfer: null,
  });
  return <DatePickerPlus.type {...args} inline value={value} onChange={setValue} />;
};

export const Inline = TemplateInline.bind({});
Inline.args = {
  label: "Ngày tạo",
};
Inline.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};

export const Submit = Template.bind({});
Submit.args = {
  placeholder: "Ngày tạo",
  changeOnSubmit: true,
};
Submit.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};

export const Options = Template.bind({});
Options.args = {
  label: "Ngày tạo",
  options: ["today", "yesterday", "last_month", "this_month", "custom"],
};
Options.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};
