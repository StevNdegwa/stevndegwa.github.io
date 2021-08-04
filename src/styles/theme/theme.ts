import { colors } from "./colors";
import { zIndices } from "./position";

export const theme = {
  colors,
  zIndices,
  phoneBreakdown: "641px",
  tabletBreakdown1: "769px",
  tabletBreakdown2: "1281px"
}

export type ThemeType = typeof theme;