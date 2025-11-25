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

type dataAttributesType = Record<string, string|number|boolean> | undefined

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
    dataAttributes?: dataAttributesType;
}

const InputTypes = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'file', 'hidden'] as const;

interface BaseInput {
    id: string;
    onChange : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isRequired: boolean;
    dataAttributes?: dataAttributesType;
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
    placeholderText?: never;  // not allowed
}

export interface GeneralInput extends BaseInput {
    type: Exclude<typeof InputTypes[number], 'textarea' | 'radio' | 'checkbox'>;
    // ? typeof InputTypes[number] : is like traversing the array and getting the union of all its values
    // ? Exclude  means “Take all possible values from the InputTypes array, but remove 'textarea', 'radio', and 'checkbox'.”
    value: string;
    pattern?: stringType;
    placeholderText?: stringType;
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
    onClickEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    deleteIcon?: React.ReactNode;
    onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
    idx?: number;
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
};

export interface FormActionButtonsProps extends ButtonProps {
    hasSubmit: boolean;
    submitText: string;
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    hasEdit: boolean;
    editText: string;
    handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    hasCancel: boolean;
    cancelText: string;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    hasDelete: boolean;
    deleteText: string;
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
}

interface EditableInformation {
    name: string;
    info: string;
    type: typeof InputTypes[number];
}

export interface NestedEditableOptionProps {
    legend: string;
    idx: number;
    editableInformation: EditableInformation[];
    onChangeOfEditableOption: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClickSaveEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClickCancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClickDeleteEntry: (e: React.MouseEvent<HTMLButtonElement>) => void;
}