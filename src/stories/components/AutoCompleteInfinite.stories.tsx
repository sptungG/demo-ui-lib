import React, { useCallback, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import AutoCompleteInfinite from "../../components/AutoCompleteInfinite";
import { isNil } from "lodash";
import { DataSource } from "../../components/DropdownInfinite";

export default {
  id: "AutoCompleteInfinite",
  title: "Components/AutoCompleteInfinite",
  component: AutoCompleteInfinite,
  argTypes: {},
} as Meta<typeof AutoCompleteInfinite>;

const Template: StoryFn<typeof AutoCompleteInfinite> = (args: any) => {
  const [reason, setReason] = useState<ReasonResponse | null>();
  const handleFetchOptions = useCallback(
    async (filter: ReasonFilter) => {
      try {
        const res = { data: { reasons: reasons, metadata: meteData } };
        const data = res.data.reasons.filter((item) => item.name.includes(filter.query || ""));
        return Promise.resolve({
          data: [...data].splice(res.data.metadata.page * 10, 10),
          limit: 10,
          total: data.length,
        } as DataSource);
      } catch (error) {}
    },
    [reasons]
  );
  const renderOption = useCallback((option) => option.name, []);
  const onSubmit = useCallback(
    async (query, value: ReasonResponse | null | undefined, options: ReasonResponse[]) => {
      if (isNil(value) || value.name.toLocaleLowerCase() !== query.toLocaleLowerCase()) {
        let selected: ReasonResponse | undefined;
        if (options.length > 0) {
          const optionsReverse = [...options].reverse();
          selected = optionsReverse.find(
            (e) => e.name.toLocaleLowerCase() === query.toLocaleLowerCase()
          );
        }
        onChange({
          id: selected?.id || 0,
          name: query,
        } as ReasonResponse);
      }
    },
    [reasons]
  );
  const onChange = (value: ReasonResponse) => {
    setReason(value);
  };
  const onQueryChange = useCallback(
    async (filter) => {
      const dataSourceFilter: ReasonFilter = {
        ...filter,
        ...initFilter,
        page: filter.page || 1,
        query: filter.query,
      };
      return dataSourceFilter;
    },
    [reasons]
  );
  return (
    <AutoCompleteInfinite.type
      {...args}
      value={reason}
      onChange={(value) => {
        onChange(value);
      }}
      fetchOptions={handleFetchOptions}
      renderOption={renderOption}
      onSubmit={onSubmit}
      onQueryChange={onQueryChange}
      onClickCreate={(value) => {
        onChange({
          id: 0,
          name: value,
        } as ReasonResponse);
      }}
      createable
    />
  );
};
export type ReasonFilter = {
  query?: string;
  type?: string;
  objects?: string;
  page?: number;
  limit?: number;
  ids?: string;
  include_delete?: boolean;
  typeObject?: string;
  include_inactive?: boolean;
};
export type ReasonResponse = {
  id: number;
  name: string;
  type: string;
  object: string;
  is_active: boolean;
  is_delete: boolean;
  inputName?: string;
};
export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  label: "Lý do hủy đơn",
  placeholder: "Nhập lý do hủy",
  required: true,
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/47UYscREX47yX7YD3XERVZ/Fix-UI-OMNI?node-id=10475%3A106309",
  },
};

const initFilter = {
  type: "cancel",
  objects: "order",
  includeInactive: false,
  includeDelete: false,
} as ReasonFilter;
const meteData = {
  total: 100,
  page: 0,
  limit: 10,
};
const reasons = [
  {
    id: 1,
    name: "Lý do hủy đơn 1",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 2,
    name: "Lý do hủy đơn 2",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 3,
    name: "Lý do hủy đơn 3",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 4,
    name: "Lý do hủy đơn 4",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 5,
    name: "Lý do hủy đơn 5",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 6,
    name: "Lý do hủy đơn 6",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 7,
    name: "Lý do hủy đơn 7",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 8,
    name: "Lý do hủy đơn 8",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 9,
    name: "Lý do hủy đơn 9",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
  {
    id: 10,
    name: "Lý do hủy đơn 10",
    is_active: true,
    is_default: true,
    is_delete: false,
    created_on: "2022-09-05T12:06:23Z",
    modified_on: "2022-09-05T12:06:23Z",
    note: "",
    object: "type",
    tenant_id: 2000000,
    type: "cancel",
  },
];
