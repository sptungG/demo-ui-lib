import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs, { TabDescriptor } from "../../components/Tabs";

export default {
  id: "Tabs",
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const TabsTemplate: ComponentStory<typeof Tabs> = (args) => {
  const [tabs, setTabs] = useState<TabDescriptor[]>([
    {
      id: "Tab1",
      label: "Default Tab1",
      canDelete: false,
    },
    {
      id: "Tab2",
      label: "Default Tab2",
      canDelete: false,
    },
    {
      id: "Tab3",
      label: "Default Tab3",
      canDelete: false,
    },
    {
      id: "Tab4",
      label: "Default Tab4",
      canDelete: false,
    },
    {
      id: "Tab5",
      label: "Default Tab5",
      canDelete: true,
    },
    {
      id: "Tab6",
      label: "Default Tab6",
      canDelete: true,
    },
    {
      id: "Tab7",
      label: "Default Tab7",
      canDelete: true,
    },
    {
      id: "Tab8",
      label: "Default Tab8",
      canDelete: true,
    },
    {
      id: "Tab9",
      label: "Default Tab9",
      canDelete: true,
    },
    {
      id: "Tab10",
      label: "Default Tab100000000000000000000000000000000000000000000",
      canDelete: true,
    },
    {
      id: "Tab11",
      label: "Default Tab11",
      canDelete: true,
    },
    {
      id: "Tab12",
      label: "Default Tab12",
      canDelete: true,
    },
    {
      id: "Tab13",
      label: "Default Tab13",
      canDelete: true,
    },
    {
      id: "Tab14",
      label: "Default Tab14",
      canDelete: true,
    },
    {
      id: "Tab15",
      label: "Default Tab15",
      canDelete: true,
    },
  ]);
  const [selected, setSelected] = useState(tabs[tabs.length - 1].id);
  const handleDelete = (tab: TabDescriptor) => {
    setSelected("Tab1");
    setTabs(
      tabs.filter((object: any) => {
        return object.id !== tab.id;
      })
    );
  };
  return (
    <Tabs.type {...args} tabs={tabs} value={selected} onChange={(tab) => setSelected(tab.id)} onDelete={handleDelete} />
  );
};

export const MultipleTabs = TabsTemplate.bind({});
MultipleTabs.storyName = "default";
MultipleTabs.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11148%3A8848",
  },
};
