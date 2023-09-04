import { create } from "@storybook/theming";

export default create({
  base: "light",

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#0F1824",

  brandTitle: "Sapo Storybook",
  brandUrl: "https://sapo.vn",
  brandImage: "https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/logo/Sapo-logo.svg?v=202207150300",
  brandTarget: "_blank",
});
