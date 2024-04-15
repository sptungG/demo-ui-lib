import { themes } from "@storybook/theming";
import React from "react";
import "./index.css";
import UIComponentProvider from "../src/theme/UIComponentProvider";

export const parameters = {
  docs: {
    theme: themes.normal,
  },
  layout: "fullscreen",
};
export const decorators = [
  (Story: any) => {
    return (
      <UIComponentProvider>
        <Story />
      </UIComponentProvider>
    );
  },
];
