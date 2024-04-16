import React, { useCallback, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import DatePickerShortRange from "../../components/DatePicker/DatePickerShortRange";
import { Button } from "../../index";
import { ActivatorDatePickerProps } from "../../components/DatePicker";

export default {
  title: "Components/DatePickerShortRange",
  component: DatePickerShortRange.type,
  argTypes: {},
} as Meta<typeof DatePickerShortRange>;

const Template: StoryFn<typeof DatePickerShortRange> = (args) => {
  const [date, setDate] = useState<Date | null>();
  const [lastDate, setLastDate] = useState<Date | null>();
  return (
    <DatePickerShortRange.type
      {...args}
      value={date}
      secondValue={lastDate}
      onChange={(firstDate, lastDate) => {
        setDate(firstDate);
        setLastDate(lastDate);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Ngày tạo",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};

const TemplateCustom: StoryFn<typeof DatePickerShortRange> = (args) => {
  const [date, setDate] = useState<Date | null>();
  const [lastDate, setLastDate] = useState<Date | null>();
  const renderActivator = useCallback(
    ({ onClick, reference }: ActivatorDatePickerProps) => (
      <Button.type ref={reference} variant="outlined" onClick={onClick}>
        Chọn
      </Button.type>
    ),
    []
  );
  return (
    <DatePickerShortRange.type
      {...args}
      value={date}
      secondValue={lastDate}
      onChange={(firstDate, lastDate) => {
        setDate(firstDate);
        setLastDate(lastDate);
      }}
      renderActivator={renderActivator}
    />
  );
};

export const Custom = TemplateCustom.bind({});
Custom.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};
