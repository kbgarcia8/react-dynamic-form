import type { ColorString } from "../utils/utils";

export interface ThemeColors {
  [key: string]: ColorString;
}

export interface GeneralTheme {
    name: string;
    colors: Record<string,ColorString>;
};

export type Theme =  {
    anchorTheme: Record<string,ColorString>;
    notificationPalette: Record<string,ColorString>;
    footerTheme: Record<string,ColorString>;
} & GeneralTheme;

export type dataAttributesType = Record<string, string | number | boolean | undefined> | undefined;