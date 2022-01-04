import { useState, useCallback } from "react";
import { ThemeMode } from "../../../styles";

export default function useThemeMode() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("LIGHT");

  const toggleThemeMode = useCallback(() => {
    setThemeMode(themeMode === "DARK" ? "LIGHT" : "DARK");
  }, [themeMode]);

  return {
    themeMode,
    toggleThemeMode,
    setThemeMode,
  }
}