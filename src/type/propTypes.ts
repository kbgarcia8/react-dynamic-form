import type { Theme } from './constantTypes';
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
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    id: string;
    buttonType: ButtonType;
    source?: string
    svg?: React.ReactNode;
    alt?: string;
    text?: string;
    className?: stringType;
    pattern?: string | number | undefined;
    dataAttributes?: dataAttributesType;
}

const InputTypes = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'file', 'hidden'] as const;

export interface BaseInput {
    id: string;
    onChange : React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    isRequired: boolean;
    dataAttributes?: dataAttributesType;
    disabled?: boolean | undefined;
    className?: stringType;
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
    htmlFor?: string;
    textLabel: string;
    additionalInfo: string;
    $labelFlexDirection?: React.CSSProperties['flexDirection'];
    source?: string, 
    svg?: React.ReactNode;
    className?: stringType;
}

export type EditableInputProps = {
    labelClass?: string | undefined;
    inputClass?: string | undefined;
    isEditable?: boolean;
    editIcon?: React.ReactNode;
    onClickEdit: React.MouseEventHandler<HTMLButtonElement>;
    deleteIcon?: React.ReactNode;
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
    idx?: number;
    ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
};

export type LabeledCheckboxOrRadio =
  LabelProps & CheckedInput & EditableInputProps;

export type LabeledTextLike =
  | (LabelProps & TextAreaInput & EditableInputProps)
  | (LabelProps & GeneralInput & EditableInputProps);

export interface FormActionButtonsProps {
    id: string;
    hasSubmit: boolean;
    submitText: string;
    handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
    hasReset: boolean;
    resetText: string;
    handleReset: React.MouseEventHandler<HTMLButtonElement>;
    hasCancel: boolean;
    cancelText: string;
    handleCancel: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditableInformation {
    name: string;
    info: string;
    type: typeof InputTypes[number];
}

export interface NestedEditableOptionProps {
    legend: string;
    idx: number;
    editableInformation: EditableInformation[];
    onChangeOfEditableOption: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onClickSaveEdit: React.MouseEventHandler<HTMLButtonElement>;
    onClickCancelEdit: React.MouseEventHandler<HTMLButtonElement>;
    onClickDeleteEntry: React.MouseEventHandler<HTMLButtonElement>;
}

export type inputEntryShape<
T extends boolean,
P extends LabeledCheckboxOrRadio | LabeledTextLike
> = P & {
uniqueClass?: string;
isEditable: T;
} & (
T extends true
? P extends LabeledCheckboxOrRadio
    ? {
        editableInformation: EditableInformation[];
        editing: boolean;
        onClickEdit: React.MouseEventHandler<HTMLButtonElement>;
        editIcon: React.ReactNode;
        onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
        deleteIcon: React.ReactNode;
        onClickSave: React.MouseEventHandler<HTMLButtonElement>;
        onClickCancel: React.MouseEventHandler<HTMLButtonElement>;
    }
    : {
        editableInformation?: never;
        editing?: never;
        onClickEdit?: never;
        editIcon?: never;
        onClickDelete?: never;
        deleteIcon?: never;
        onClickSave?: never;
        onClickCancel?: never;
    }
: {
    editableInformation?: never;
    editing?: never;
    onClickEdit?: never;
    editIcon?: never;
    onClickDelete?: never;
    deleteIcon?: never;
    onClickSave?: never;
    onClickCancel?: never;
    }
);



export interface FieldsetShape {
    legend: string;
    inputs: inputEntryShape<true,LabeledCheckboxOrRadio | LabeledTextLike>[];
    isExpandable: boolean;
}

type ConditionalEditable<P> = //? This can be technique to know a specific property value that will make other props required
    P extends { isEditable: true }
    ? {
        handleEditableInputEntryChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    }
    : {
        handleEditableInputEntryChange?: never;
    };

export type DynamicFormProps =
  FormActionButtonsProps &
  (
    | ({
        fieldsets: FieldsetShape[];
        formInputs?: never;
        legendText?: never;
      } & ConditionalEditable<inputEntryShape<true,LabeledCheckboxOrRadio | LabeledTextLike>[]>)
    | ({
        fieldsets: null;
        formInputs: inputEntryShape<true,LabeledCheckboxOrRadio | LabeledTextLike>[];
        legendText?: string;
        labelAndInputContainerClass?: string;
      } & (LabeledCheckboxOrRadio | LabeledTextLike) & ConditionalEditable<inputEntryShape<true,LabeledCheckboxOrRadio | LabeledTextLike>[]>)
  ) &
  (
    | { isExpandable: true; handleAddingInputEntry: React.MouseEventHandler<HTMLButtonElement> }
    | { isExpandable: false; handleAddingInputEntry?: never }
  ) & {
    id: string;
    handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
    className?: string;
    labelClass?: string;
    inputClass?: string;
    labelAndInputContainerClass?: string;
  };
