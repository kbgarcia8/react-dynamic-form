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
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    id: string;
    buttonType: ButtonType;
    source?: string
    svg?: React.ReactNode;
    alt?: string;
    text?: string;
    className: string;
    dataAttributes: Record<string, string|number|boolean>;
}

const InputTypes = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'file', 'hidden'] as const;

interface BaseInput {
    id: string;
    placeholderText: string;
    onChange : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isRequired: boolean;
    dataAttributes?: Record<string, string|number|boolean>;
    disabled?: boolean;
    pattern: string;
    className?: string;
}

interface TextAreaInput extends BaseInput {
    type: 'textarea';
    value: string;
    rows: number;
    cols: number;
}

interface CheckedInput extends BaseInput {
    type: 'radio' | 'checkbox';
    checked: boolean;
}

export interface GeneralInput extends BaseInput {
    type: Exclude<typeof InputTypes[number], 'textarea' | 'radio' | 'checkbox'>;
    // ? This is like traversing the array and getting the union of all its values
    // ? Exclude  means “Take all possible values from the InputTypes array, but remove 'textarea', 'radio', and 'checkbox'.”
    value: string | number;
    checked?: never;  // not allowed
    rows?: never;     // not allowed
    cols?: never;     // not allowed
}

export type InputProps = GeneralInput | TextAreaInput | CheckedInput;