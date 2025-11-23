import type { Theme } from '@type/ConstantTypes';

export interface themeContextValue {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export type ChildrenProp = {
  children: React.ReactNode;
};

type ButtonType = 'button' | 'submit';

export interface ButtonProps {
    onClick: () => void;
    id: string;
    buttonType: ButtonType;
    source?: string
    svg?: React.ReactNode;
    alt?: string;
    text?: string,
    className: string,
    dataAttributes: Record<string, string>;
}