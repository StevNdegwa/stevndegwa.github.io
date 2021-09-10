import { colors } from "./colors";
import { zIndices } from "./position";

export const theme = {
  colors,
  zIndices,
  phoneBreakdown: "641px",
  tabletBreakdown1: "769px",
  tabletBreakdown2: "1024px",
  desktop1: "1280px",
  desktop2: "1440px",
  desktop3: "1600px",
  desktop4: "1920px"
}

export type ThemeType = typeof theme;