/*
 * Copyright (c) 2024 By github.com/StevNdegwa
 */

declare module "*.png" {
  const value: string;
  export default value;
}


declare module "*.svg" {
  const value: string;
  export default value;
}


declare module "*.ttf" {
  const value: import("expo-font").FontSource;
  export default value;
}