import { addons } from '@storybook/manager-api';
import theme from "./theme";

addons.setConfig({
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  theme: theme,
});
