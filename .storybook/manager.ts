import { addons } from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  theme: theme,
});
