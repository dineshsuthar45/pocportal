import { themes } from "@jp/material-core-master";
import { Theme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export interface IColorContext {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): (Theme | IColorContext)[] => {
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );
  const theme = useMemo(() => themes[mode as "light" | "dark"], [mode]);
  return [theme, colorMode];
};
