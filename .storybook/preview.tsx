import { themes } from "@storybook/theming";
import React from "react";
import "./index.css";
import UIComponentProvider from "../src/theme/UIComponentProvider";
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.normal,
    },
    layout: "padded",
  },
  decorators: [
    (Story: any) => {
      return (
        <UIComponentProvider>
          <Story />
        </UIComponentProvider>
      );
    },
  ],
};

export default preview;
