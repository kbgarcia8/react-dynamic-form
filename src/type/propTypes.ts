import type { Theme } from './constantTypes';
import type React from 'react';
import { COLORS, SIZES, RADIUS } from "../components/atoms/Button/Button.styles";
export interface themeContextValue {
    currentTheme: Theme;
    toggleTheme: () => void;
}
export type ChildrenProp = {
    children: React.ReactNode;
};

type dataAttributesType = Record<string, string | number | boolean | undefined> | undefined;

interface hasOnClickButton { 
    buttonType: 'button' | 'reset';
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

interface hasNoOnClickButton { 
    buttonType: 'submit';
    onClick?: never;
};

export interface GeneralButtonProps {
    id?: string;
    source?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    text?: string;
    className?: string;
    pattern?: string | number | undefined;
    color?: keyof typeof COLORS;
    size?: keyof typeof SIZES;
    radius?: keyof typeof RADIUS;
    dataAttributes?: dataAttributesType;
};

export type ButtonTypeButton = GeneralButtonProps & hasOnClickButton;
export type SubmitOrResetTypeButton = GeneralButtonProps & hasNoOnClickButton;

export type ButtonProps = ButtonTypeButton | SubmitOrResetTypeButton;

declare const InputTypes: readonly ["text", "password", "email", "number", "tel", "url", "search", "date", "file", "hidden"];
export interface BaseInput {
    id: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    isRequired: boolean;
    dataAttributes?: dataAttributesType;
    disabled?: boolean | undefined;
    className?: string;
    name: string;
}
export interface TextAreaInput extends BaseInput {
    type: 'textarea';
    value: string;
    rows: number;
    cols: number;
}
export interface CheckedInput extends BaseInput {
    type: 'radio' | 'checkbox';
    checked: boolean;
    placeholderText?: never;
}
export interface GeneralInput extends BaseInput {
    type: Exclude<typeof InputTypes[number], 'textarea' | 'radio' | 'checkbox'>;
    value: string;
    pattern?: string;
    placeholderText?: string;
    checked?: never;
    rows?: never;
    cols?: never;
}
export type InputProps = GeneralInput | TextAreaInput | CheckedInput;

export interface LabelProps {
    htmlFor?: string;
    textLabel?: string | undefined;
    additionalInfo?: string | undefined;
    $labelFlexDirection?: React.CSSProperties['flexDirection'];
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
}
export type EditableInputProps = {
    labelClass?: string | undefined;
    inputClass?: string | undefined;
    isEditable?: boolean;
    editIcon?: React.ReactNode;
    onClickEdit?: React.MouseEventHandler<HTMLButtonElement>;
    deleteIcon?: React.ReactNode;
    onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
    idx?: number;
    ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
};
export type LabeledCheckboxOrRadio = LabelProps & CheckedInput & EditableInputProps;
export type LabeledTextLike = (LabelProps & TextAreaInput & EditableInputProps) | (LabelProps & GeneralInput & EditableInputProps);
export interface FormActionButtonsProps {
    id: string;
    formActionButtonSize: keyof typeof SIZES;
    formActionButtonColor: keyof typeof COLORS;
    formActionButtonRadius: keyof typeof RADIUS;
    submitText: string | undefined;
    submitIcon?: React.ReactNode;
    hasReset?: boolean | undefined;
    resetText?: string | undefined;
    resetIcon?: React.ReactNode;
    handleReset?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    hasCancel?: boolean | undefined;
    cancelText?: string | undefined;
    cancelIcon?: React.ReactNode;
    handleCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export interface EditableInformation {
    name: string;
    info: string;
    type: typeof InputTypes[number];
}
export interface NestedEditableOptionProps {
    editableButtonSize: keyof typeof SIZES;
    editableButtonColor: keyof typeof COLORS;
    editableButtonRadius: keyof typeof RADIUS;
    legend?: string;
    fieldsetIndex?: number;
    idx: number;
    saveText?: string;
    saveButtonStartIcon?: React.ReactNode;
    saveButtonEndIcon?: React.ReactNode;
    cancelText?: string;
    cancelButtonStartIcon?: React.ReactNode;
    cancelButtonEndIcon?: React.ReactNode;
    deleteText?: string;
    deleteButtonStartIcon?: React.ReactNode;
    deleteButtonEndIcon?: React.ReactNode;
    editableInformation: EditableInformation[];
    onChangeOfEditableOption: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onClickSaveEdit?: React.MouseEventHandler<HTMLButtonElement>;
    onClickCancelEdit?: React.MouseEventHandler<HTMLButtonElement>;
    onClickDeleteEntry?: React.MouseEventHandler<HTMLButtonElement>;
}
export type inputEntryShape<T extends boolean, P extends LabeledCheckboxOrRadio | LabeledTextLike> = P & {
    uniqueClass?: string;
    isEditable: T;
} & (T extends true ? P extends LabeledCheckboxOrRadio ? {
    editableButtonSize: keyof typeof SIZES;
    editableButtonColor: keyof typeof COLORS;
    editableButtonRadius: keyof typeof RADIUS;
    editableInformation: EditableInformation[];
    editing: boolean;
    onClickEdit?: React.MouseEventHandler<HTMLButtonElement>;
    editIcon: React.ReactNode;
    onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
    deleteIcon: React.ReactNode;
    onClickSave?: React.MouseEventHandler<HTMLButtonElement>;
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement>;
} : {
    editableButtonSize?:never;
    editableButtonColor?:never;
    editableButtonRadius?:never;
    editableInformation?: never;
    editing?: never;
    onClickEdit?: never;
    editIcon?: never;
    onClickDelete?: never;
    deleteIcon?: never;
    onClickSave?: never;
    onClickCancel?: never;
} : {
    editableButtonSize?:never;
    editableButtonColor?:never;
    editableButtonRadius?:never;
    editableInformation?: never;
    editing?: never;
    onClickEdit?: never;
    editIcon?: never;
    onClickDelete?: never;
    deleteIcon?: never;
    onClickSave?: never;
    onClickCancel?: never;
});
export interface FieldsetShape {
    legend: string;
    inputs: Array<inputEntryShape<true, LabeledCheckboxOrRadio | LabeledTextLike> | inputEntryShape<false, LabeledCheckboxOrRadio | LabeledTextLike>>;
    isExpandable: boolean;
}
type ConditionalEditable<P> = P extends Array<infer Item> ? Item extends {
    isEditable: true;
} ? {
    onChangeOfEditableOption?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
} : {
    onChangeOfEditableOption?: never;
} : {
    onChangeOfEditableOption?: never;
};
export type DynamicFormProps = FormActionButtonsProps & (({
    fieldsets: FieldsetShape[];
    formInputs?: never;
    legendText?: never;
} & ConditionalEditable<Array<inputEntryShape<true, LabeledCheckboxOrRadio | LabeledTextLike> | inputEntryShape<false, LabeledCheckboxOrRadio | LabeledTextLike>>>) | ({
    fieldsets: null;
    formInputs: Array<inputEntryShape<true, LabeledCheckboxOrRadio | LabeledTextLike> | inputEntryShape<false, LabeledCheckboxOrRadio | LabeledTextLike>>;
    legendText?: string;
    labelAndInputContainerClass?: string;
} & ConditionalEditable<Array<inputEntryShape<true, LabeledCheckboxOrRadio | LabeledTextLike> | inputEntryShape<false, LabeledCheckboxOrRadio | LabeledTextLike>>>)) & ({
    isExpandable: true;
    handleAddingInputEntry: React.MouseEventHandler<HTMLButtonElement>;
} | {
    isExpandable: false;
    handleAddingInputEntry?: never;
}) & {
    id: string;
    handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
    className?: string;
    labelClass?: string;
    inputClass?: string;
    labelAndInputContainerClass?: string;
};