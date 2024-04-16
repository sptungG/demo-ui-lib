import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Pagination from "../../components/Pagination";

export default {
  id: "Pagination",
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {},
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [page, setPage] = useState({
    id: 1,
    limit: 20,
  });
  const handlePageChange = (id: number, limit: number) =>
    setPage((prev) => ({
      ...prev,
      id: id,
      limit: limit,
    }));
  return (
    <Pagination.type {...args} total={10000} limit={page.limit} currentPage={page.id} onChange={handlePageChange} />
  );
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
