import type { Theme } from '@type/constantTypes';
import type React from 'react';

export interface themeContextValue {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export type ChildrenProp = {
  children: React.ReactNode;
};

type stringType = string | undefined;

type ButtonType = 'button' | 'submit';

export interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    id: string;
    buttonType: ButtonType;
    source?: string
    svg?: React.ReactNode;
    alt?: string;
    text?: string;
    className: stringType;
    pattern?: string | number | undefined;
    dataAttributes: Record<string, string|number|boolean>;
}

const InputTypes = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'file', 'hidden'] as const;

interface BaseInput {
    id: string;
    placeholderText: stringType;
    onChange : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isRequired: boolean;
    dataAttributes?: Record<string, string|number|boolean>;
    disabled?: boolean | undefined;
    className?: stringType;
    name: string;
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
    value: string;
    pattern?: stringType;
    checked?: never;  // not allowed
    rows?: never;     // not allowed
    cols?: never;     // not allowed
}

export type InputProps = GeneralInput | TextAreaInput | CheckedInput;

export interface LabelProps {
    htmlFor: string;
    textLabel: string;
    additionalInfo: string;
    $labelFlexDirection?: React.CSSProperties['flexDirection'];
    source?: string, 
    svg?: React.ReactNode;
    className: stringType;
}

export type LabeledInputProps = LabelProps & InputProps & {
    labelClass?: string;
    inputClass?: string;
    isEditable?: boolean;
    editIcon?: React.ReactNode;
    onClickEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    deleteIcon?: React.ReactNode;
    onClickDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    idx?: number;
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
};