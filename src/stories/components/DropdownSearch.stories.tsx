import React, { useCallback, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropdownSearch, { ActivatorDropdownSearchProps } from "../../components/DropdownSearch";
import Button from "../../components/Button";
import { DataSource } from "../../components/DropdownInfinite";

export default {
  title: "Components/DropdownSearch",
  component: DropdownSearch,
  argTypes: {},
} as ComponentMeta<typeof DropdownSearch>;

const data = [
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

const Template: ComponentStory<typeof DropdownSearch> = (args) => {
  const handleFetchOptions = useCallback(
    () =>
      ({
        data: data,
        total: data.length,
      } as DataSource),
    []
  );
  const [selected, setSelected] = useState<any>();
  const renderOption = useCallback((option) => option.name, []);

  return (
    <DropdownSearch.type
      label="Thanh toán dự kiến"
      placeholder="Chọn thanh toán dự kiến"
      {...args}
      onChange={setSelected}
      value={selected}
      renderOption={renderOption}
      fetchOptions={handleFetchOptions}
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

const TemplateSearchMulti: ComponentStory<typeof DropdownSearch> = (args) => {
  const handleFetchOptions = useCallback(
    () =>
      ({
        data: data,
        total: data.length,
      } as DataSource),
    []
  );
  const [selected, setSelected] = useState<any[]>([data[2]]);
  const renderOption = useCallback((option) => option.name, []);

  return (
    <DropdownSearch.type
      label="Thanh toán dự kiến"
      placeholder="Chọn thanh toán dự kiến"
      {...args}
      multiple
      value={selected}
      onChange={setSelected}
      renderOption={renderOption}
      fetchOptions={handleFetchOptions}
    />
  );
};

export const Multiple = TemplateSearchMulti.bind({});
Multiple.args = {};
Multiple.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const TemplateSearchPagination: ComponentStory<typeof DropdownSearch> = (args) => {
  const [selected, setSelected] = useState<any[]>([]);
  const handleFetchOptions = useCallback(
    async (query: string, page: number) => {
      const data = cities.filter((item) => item.name.includes(query));
      return Promise.resolve({
        data: [...data].splice(page * 10, 10),
        limit: 10,
        total: data.length,
      } as DataSource);
    },
    [cities]
  );
  const renderOption = useCallback((option) => option.name, []);

  return (
    <DropdownSearch.type
      label="Tỉnh/Thành phố"
      placeholder="Chọn Tỉnh/Thành phố"
      {...args}
      multiple
      pageable
      value={selected}
      onChange={setSelected}
      fetchOptions={handleFetchOptions}
      renderOption={renderOption}
    />
  );
};

export const Pagination = TemplateSearchPagination.bind({});
Pagination.args = {};
Pagination.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const TemplateSubmit: ComponentStory<typeof DropdownSearch> = (args) => {
  const [selected, setSelected] = useState<any[]>([]);
  const handleFetchOptions = useCallback(
    async (query: string, page: number) => {
      const data = cities.filter((item) => item.name.includes(query));
      return Promise.resolve({
        data: [...data].splice(page * 10, 10),
        limit: 10,
        total: data.length,
      } as DataSource);
    },
    [cities]
  );
  const renderOption = useCallback((option) => option.name, []);

  return (
    <DropdownSearch.type
      label="Tỉnh/Thành phố"
      placeholder="Chọn Tỉnh/Thành phố"
      {...args}
      multiple
      changeOnSubmit
      pageable
      value={selected}
      onChange={setSelected}
      fetchOptions={handleFetchOptions}
      renderOption={renderOption}
    />
  );
};

const TemplateInline: ComponentStory<typeof DropdownSearch> = (args) => {
  const [selected, setSelected] = useState<any[]>([]);
  const handleFetchOptions = useCallback(
    async (query: string, page: number) => {
      const data = cities.filter((item) => item.name.includes(query));
      return Promise.resolve({
        data: [...data].splice(page * 10, 10),
        limit: 10,
        total: data.length,
      } as DataSource);
    },
    [cities]
  );
  const renderOption = useCallback((option) => option.name, []);

  return (
    <DropdownSearch.type
      label="Tỉnh/Thành phố"
      placeholder="Chọn Tỉnh/Thành phố"
      {...args}
      multiple
      pageable
      value={selected}
      onChange={setSelected}
      fetchOptions={handleFetchOptions}
      renderOption={renderOption}
      inline
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

export const Submit = TemplateSubmit.bind({});
Submit.args = {};
Submit.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};

const TemplateCustom: ComponentStory<typeof DropdownSearch> = (args) => {
  const [selected, setSelected] = useState<any[]>([]);
  const handleFetchOptions = useCallback(
    async (query: string, page: number) => {
      const data = cities.filter((item) => item.name.includes(query));
      return Promise.resolve({
        data: [...data].splice(page * 10, 10),
        limit: 10,
        total: data.length,
      } as DataSource);
    },
    [cities]
  );
  const renderOption = useCallback((option) => option.name, []);
  const renderActivator = useCallback(
    ({ onClick, reference }: ActivatorDropdownSearchProps) => (
      <Button ref={reference} variant="outlined" onClick={onClick}>
        Tỉnh/Thành phố
      </Button>
    ),
    []
  );

  return (
    <DropdownSearch.type
      label="Tỉnh/Thành phố"
      placeholder="Chọn Tỉnh/Thành phố"
      {...args}
      multiple
      changeOnSubmit
      pageable
      value={selected}
      onChange={setSelected}
      fetchOptions={handleFetchOptions}
      renderOption={renderOption}
      popperWidth="400px"
      renderActivator={renderActivator}
    />
  );
};

export const Custom = TemplateCustom.bind({});
Custom.args = {};
Custom.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6016%3A6482",
  },
};

const cities = [
  {
    id: 1,
    name: "Hà Nội",
    name_transliteration: "Hà Nội",
    alias: "Ha-Noi",
    is_active: true,
    is_big_city: true,
    regional_id: 1,
    country_id: 201,
    number: 1,
  },
  {
    id: 2,
    name: "TP Hồ Chí Minh",
    name_transliteration: "TP Hồ Chí Minh",
    alias: "TP-Ho-Chi-Minh",
    is_active: true,
    is_big_city: true,
    regional_id: 3,
    country_id: 201,
    number: 2,
  },
  {
    id: 3,
    name: "An Giang",
    name_transliteration: "An Giang",
    alias: "An-Giang",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 3,
  },
  {
    id: 4,
    name: "Bà Rịa-Vũng Tàu",
    name_transliteration: "Bà Rịa-Vũng Tàu",
    alias: "Ba-Ria-Vung-Tau",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 4,
  },
  {
    id: 5,
    name: "Bắc Giang",
    name_transliteration: "Bắc Giang",
    alias: "Bac-Giang",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 5,
  },
  {
    id: 6,
    name: "Bắc Kạn",
    name_transliteration: "Bắc Kạn",
    alias: "Bac-Kan",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 6,
  },
  {
    id: 7,
    name: "Bạc Liêu",
    name_transliteration: "Bạc Liêu",
    alias: "Bac-Lieu",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 7,
  },
  {
    id: 8,
    name: "Bắc Ninh",
    name_transliteration: "Bắc Ninh",
    alias: "Bac-Ninh",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 8,
  },
  {
    id: 9,
    name: "Bến Tre",
    name_transliteration: "Bến Tre",
    alias: "Ben-Tre",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 9,
  },
  {
    id: 10,
    name: "Bình Dương",
    name_transliteration: "Bình Dương",
    alias: "Binh-Duong",
    is_active: true,
    is_big_city: true,
    regional_id: 3,
    country_id: 201,
    number: 10,
  },
  {
    id: 11,
    name: "Bình Định",
    name_transliteration: "Bình Định",
    alias: "Binh-Dinh",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 2,
  },
  {
    id: 12,
    name: "Bình Phước",
    name_transliteration: "Bình Phước",
    alias: "Binh-Phuoc",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 12,
  },
  {
    id: 13,
    name: "Bình Thuận",
    name_transliteration: "Bình Thuận",
    alias: "Binh-Thuan",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 13,
  },
  {
    id: 14,
    name: "Cà Mau",
    name_transliteration: "Cà Mau",
    alias: "Ca-Mau",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 14,
  },
  {
    id: 15,
    name: "Cao Bằng",
    name_transliteration: "Cao Bằng",
    alias: "Cao-Bang",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 16,
  },
  {
    id: 16,
    name: "Cần Thơ",
    name_transliteration: "Cần Thơ",
    alias: "Can-Tho",
    is_active: true,
    is_big_city: true,
    regional_id: 3,
    country_id: 201,
    number: 2,
  },
  {
    id: 17,
    name: "Đà Nẵng",
    name_transliteration: "Đà Nẵng",
    alias: "Da-Nang",
    is_active: true,
    is_big_city: true,
    regional_id: 2,
    country_id: 201,
    number: 1,
  },
  {
    id: 18,
    name: "Đắk Lắk",
    name_transliteration: "Đắk Lắk",
    alias: "Dak-Lak",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 18,
  },
  {
    id: 19,
    name: "Đắk Nông",
    name_transliteration: "Đắk Nông",
    alias: "Dak-Nong",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 19,
  },
  {
    id: 20,
    name: "Điện Biên",
    name_transliteration: "Điện Biên",
    alias: "Dien-Bien",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 20,
  },
  {
    id: 21,
    name: "Đồng Nai",
    name_transliteration: "Đồng Nai",
    alias: "Dong-Nai",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 21,
  },
  {
    id: 22,
    name: "Đồng Tháp",
    name_transliteration: "Đồng Tháp",
    alias: "Dong-Thap",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 22,
  },
  {
    id: 23,
    name: "Gia Lai",
    name_transliteration: "Gia Lai",
    alias: "Gia-Lai",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 23,
  },
  {
    id: 24,
    name: "Hà Giang",
    name_transliteration: "Hà Giang",
    alias: "Ha-Giang",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 24,
  },
  {
    id: 25,
    name: "Hà Nam",
    name_transliteration: "Hà Nam",
    alias: "Ha-Nam",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 25,
  },
  {
    id: 26,
    name: "Hà Tĩnh",
    name_transliteration: "Hà Tĩnh",
    alias: "Ha-Tinh",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 26,
  },
  {
    id: 27,
    name: "Hải Dương",
    name_transliteration: "Hải Dương",
    alias: "Hai-Duong",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 27,
  },
  {
    id: 28,
    name: "Hải Phòng",
    name_transliteration: "Hải Phòng",
    alias: "Hai-Phong",
    is_active: true,
    is_big_city: true,
    regional_id: 1,
    country_id: 201,
    number: 2,
  },
  {
    id: 29,
    name: "Hậu Giang",
    name_transliteration: "Hậu Giang",
    alias: "Hau-Giang",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 29,
  },
  {
    id: 30,
    name: "Hòa Bình",
    name_transliteration: "Hòa Bình",
    alias: "Hoa-Binh",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 30,
  },
  {
    id: 31,
    name: "Hưng Yên",
    name_transliteration: "Hưng Yên",
    alias: "Hung-Yen",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 31,
  },
  {
    id: 32,
    name: "Khánh Hòa",
    name_transliteration: "Khánh Hòa",
    alias: "Khanh-Hoa",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 32,
  },
  {
    id: 33,
    name: "Kiên Giang",
    name_transliteration: "Kiên Giang",
    alias: "Kien-Giang",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 33,
  },
  {
    id: 34,
    name: "Kon Tum",
    name_transliteration: "Kon Tum",
    alias: "Kon-Tum",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 34,
  },
  {
    id: 35,
    name: "Lai Châu",
    name_transliteration: "Lai Châu",
    alias: "Lai-Chau",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 35,
  },
  {
    id: 36,
    name: "Lâm Đồng",
    name_transliteration: "Lâm Đồng",
    alias: "Lam-Dong",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 36,
  },
  {
    id: 37,
    name: "Lạng Sơn",
    name_transliteration: "Lạng Sơn",
    alias: "Lang-Son",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 37,
  },
  {
    id: 38,
    name: "Lào Cai",
    name_transliteration: "Lào Cai",
    alias: "Lao-Cai",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 38,
  },
  {
    id: 39,
    name: "Long An",
    name_transliteration: "Long An",
    alias: "Long-An",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 39,
  },
  {
    id: 40,
    name: "Nam Định",
    name_transliteration: "Nam Định",
    alias: "Nam-Dinh",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 40,
  },
  {
    id: 41,
    name: "Nghệ An",
    name_transliteration: "Nghệ An",
    alias: "Nghe-An",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 41,
  },
  {
    id: 42,
    name: "Ninh Bình",
    name_transliteration: "Ninh Bình",
    alias: "Ninh-Binh",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 42,
  },
  {
    id: 43,
    name: "Ninh Thuận",
    name_transliteration: "Ninh Thuận",
    alias: "Ninh-Thuan",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 43,
  },
  {
    id: 44,
    name: "Phú Thọ",
    name_transliteration: "Phú Thọ",
    alias: "Phu-Tho",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 44,
  },
  {
    id: 45,
    name: "Phú Yên",
    name_transliteration: "Phú Yên",
    alias: "Phu-Yen",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 45,
  },
  {
    id: 46,
    name: "Quảng Bình",
    name_transliteration: "Quảng Bình",
    alias: "Quang-Binh",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 46,
  },
  {
    id: 47,
    name: "Quảng Nam",
    name_transliteration: "Quảng Nam",
    alias: "Quang-Nam",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 47,
  },
  {
    id: 48,
    name: "Quảng Ngãi",
    name_transliteration: "Quảng Ngãi",
    alias: "Quang-Ngai",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 48,
  },
  {
    id: 49,
    name: "Quảng Ninh",
    name_transliteration: "Quảng Ninh",
    alias: "Quang-Ninh",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 49,
  },
  {
    id: 50,
    name: "Quảng Trị",
    name_transliteration: "Quảng Trị",
    alias: "Quang-Tri",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 50,
  },
  {
    id: 51,
    name: "Sóc Trăng",
    name_transliteration: "Sóc Trăng",
    alias: "Soc-Trang",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 51,
  },
  {
    id: 52,
    name: "Sơn La",
    name_transliteration: "Sơn La",
    alias: "Son-La",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 52,
  },
  {
    id: 53,
    name: "Tây Ninh",
    name_transliteration: "Tây Ninh",
    alias: "Tay-Ninh",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 53,
  },
  {
    id: 54,
    name: "Thái Bình",
    name_transliteration: "Thái Bình",
    alias: "Thai-Binh",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 54,
  },
  {
    id: 55,
    name: "Thái Nguyên",
    name_transliteration: "Thái Nguyên",
    alias: "Thai-Nguyen",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 55,
  },
  {
    id: 56,
    name: "Thanh Hóa",
    name_transliteration: "Thanh Hóa",
    alias: "Thanh-Hoa",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 56,
  },
  {
    id: 57,
    name: "Thừa Thiên Huế",
    name_transliteration: "Thừa Thiên Huế",
    alias: "Thua-Thien-Hue",
    is_active: true,
    is_big_city: false,
    regional_id: 2,
    country_id: 201,
    number: 57,
  },
  {
    id: 58,
    name: "Tiền Giang",
    name_transliteration: "Tiền Giang",
    alias: "Tien-Giang",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 58,
  },
  {
    id: 59,
    name: "Trà Vinh",
    name_transliteration: "Trà Vinh",
    alias: "Tra-Vinh",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 59,
  },
  {
    id: 60,
    name: "Tuyên Quang",
    name_transliteration: "Tuyên Quang",
    alias: "Tuyen-Quang",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 60,
  },
  {
    id: 61,
    name: "Vĩnh Long",
    name_transliteration: "Vĩnh Long",
    alias: "Vinh-Long",
    is_active: true,
    is_big_city: false,
    regional_id: 3,
    country_id: 201,
    number: 61,
  },
  {
    id: 62,
    name: "Vĩnh Phúc",
    name_transliteration: "Vĩnh Phúc",
    alias: "Vinh-Phuc",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 62,
  },
  {
    id: 63,
    name: "Yên Bái",
    name_transliteration: "Yên Bái",
    alias: "Yen-Bai",
    is_active: true,
    is_big_city: false,
    regional_id: 1,
    country_id: 201,
    number: 63,
  },
];
