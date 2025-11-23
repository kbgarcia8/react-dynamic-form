import type { ColorString } from "@utils/utils";

export interface constants {
  fonts: {
    primary: string;
    secondary: string;
    tertiary: string;
    additional: string;
    fallback: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
    bolder: number;
  };
  fontSize: Record<string, string>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  borderThickness: Record<string, string>;
  width: Record<string, string>;
}

export interface ThemeColors {
  [key: string]: ColorString;
}

export interface Theme {
  name: 'light' | 'dark' | string;
  colors: ThemeColors;
}