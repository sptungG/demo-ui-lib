import { addons } from '@storybook/manager-api';
import theme from "./theme";

addons.setConfig({
  showNav: true,
  showPanel: true,
  panelPosition: "right",
  theme: theme,
});
