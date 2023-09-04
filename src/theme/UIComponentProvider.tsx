import React, { memo, useMemo } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import createSapoTheme, { Theme } from "./index";
import { ModalProvider } from "../components/ModalProvider";
import { TooltipProvider } from "../components/Tooltip";

interface ThemeProviderProps extends React.PropsWithChildren<{}> {
  theme?: Theme;
}

const UIComponentProvider = memo(({ children, theme, ...props }: ThemeProviderProps) => {
  const _theme = useMemo(() => (theme ? theme : createSapoTheme()), [theme]);
  return (
    <SCThemeProvider {...props} theme={_theme}>
      <TooltipProvider>
        <ModalProvider>{children}</ModalProvider>
      </TooltipProvider>
    </SCThemeProvider>
  );
});

export default UIComponentProvider;
