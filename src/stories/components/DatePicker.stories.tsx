import React, { useCallback, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import DatePicker, { ActivatorDatePickerProps } from "../../components/DatePicker";
import { Button } from "../../index";

export default {
  title: "Components/DatePicker",
  component: DatePicker.type,
  argTypes: {},
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args: any) => {
  const [date, setDate] = useState<Date | null>();
  return <DatePicker.type label="Ngày tham chiếu" {...args} value={date} onChange={setDate} />;
};

export const Basic = Template.bind({});
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9886",
  },
};

const TemplateYearSelect: StoryFn<typeof DatePicker> = (args: any) => {
  const [date, setDate] = useState<Date | null>();
  return (
    <DatePicker.type
      label="Ngày sinh"
      {...args}
      value={date}
      onChange={setDate}
      isYearSelect
      maxDate={new Date()}
    />
  );
};

export const YearSelect = TemplateYearSelect.bind({});
YearSelect.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};

const TemplateCustom: StoryFn<typeof DatePicker> = (args: any) => {
  const [date, setDate] = useState<Date | null>();
  const renderActivator = useCallback(
    ({ onClick, reference }: ActivatorDatePickerProps) => (
      <Button.type ref={reference} variant="outlined" onClick={onClick}>
        Chọn
      </Button.type>
    ),
    []
  );
  return (
    <DatePicker.type {...args} value={date} onChange={setDate} renderActivator={renderActivator} />
  );
};

export const Custom = TemplateCustom.bind({});
Custom.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};

const TemplateRange: StoryFn<typeof DatePicker> = (args: any) => {
  const [date, setDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  return (
    <DatePicker.type
      {...args}
      value={date}
      onChange={setDate}
      isDateRange
      secondValue={endDate}
      onChangeSecond={setEndDate}
    />
  );
};

export const Range = TemplateRange.bind({});
Range.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301",
  },
};
