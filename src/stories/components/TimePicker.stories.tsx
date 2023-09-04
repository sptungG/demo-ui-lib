import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TimePicker from "../../components/TimePicker";

export default {
  id: "TimePicker",
  title: "Components/TimePicker",
  component: TimePicker,
  argTypes: {},
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => {
  const [date, setDate] = useState<Date | null>();
  return <TimePicker.type {...args} value={date} onChange={setDate} />;
};

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const RangeTemplate: ComponentStory<typeof TimePicker> = (args) => {
  const [startTime, setStartTime] = useState<Date | null>();
  const [endTime, setEndTime] = useState<Date | null>();
  return (
    <TimePicker.type
      isTimeSameDay
      {...args}
      value={startTime}
      secondValue={endTime}
      onChange={setStartTime}
      onChangeSecond={setEndTime}
    />
  );
};

export const Range = RangeTemplate.bind({});
Range.args = {};
Range.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
