import React from "react";
import Button from "../../atoms/Button";
import LabeledInput from "../../molecules/LabeledInput";
import NestedEditableOption from "../..//molecules/NestedEditableOption";
import FormActionButtons from "../../molecules/FormActionButtons";
import * as Styled from "./DynamicForm.styles";
import type { CheckedInput, DynamicFormProps, GeneralInput, inputEntryShape, TextAreaInput, FieldsetShape } from "../../../type/propTypes";

const DynamicForm = ({
    fieldsets = null, 
    legendText, 
    isExpandable, 
    id,
    formInputs, 
    labelAndInputContainerClass,
    labelClass,
    inputClass,
    handleEditableInputEntryChange, 
    handleAddingInputEntry,
    hasSubmit = false,
    submitText,
    handleSubmit,
    hasReset = false,
    resetText,
    handleReset,
    hasCancel = false,
    cancelText,
    handleCancel,
    handleSubmitForm,
    className,
    children 
}:React.PropsWithChildren<DynamicFormProps>) => {
    return (
        <Styled.Form id={`${id}-form`} className={className} onSubmit={handleSubmitForm}>
            {fieldsets
                ? fieldsets.map((fieldset, fieldsetIdx) => (
                    <Styled.FieldsetWrapper key={`${fieldset.legend}-${fieldsetIdx}`} className={`${id}-fieldset-wrapper`}>
                        <Styled.FormFieldset id={`${id}-form-fieldset-${fieldsetIdx}`} className={`${fieldset.legend}-fieldset`}>
                            {fieldset.legend && <Styled.FormLegend className={`${fieldset.legend}-legend`}>{fieldset.legend}</Styled.FormLegend>}
                            {fieldset['inputs'].length !== 0
                            ? fieldset['inputs'].map((input, inputIndex) => (
                                <React.Fragment key={`form-${id}-${inputIndex}`}>
                                {input.type === "textarea" && (
                                <LabeledInput
                                    {...input}
                                    id={input.id ?? `${fieldset.legend}-input`}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    idx={inputIndex}
                                    className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                />
                                )}

                                {input.type !== "textarea" &&
                                input.type !== "radio" &&
                                input.type !== "checkbox" && (
                                <LabeledInput
                                    {...input}
                                    id={input.id ?? `${fieldset.legend}-input`}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    idx={inputIndex}
                                    className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                />
                                )}

                                {(input.type === "radio" || input.type === "checkbox") && (
                                <>
                                    <LabeledInput
                                        {...input}
                                        id={input.id ?? `${fieldset.legend}-input`}
                                        labelClass={labelClass}
                                        inputClass={inputClass}
                                        idx={inputIndex}
                                        className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                    />
                                    {(input.editing && input.isEditable) && <NestedEditableOption
                                        legend={`${fieldset.legend}`}
                                        idx={inputIndex}
                                        editableInformation={input?.editableInformation}
                                        onChangeOfEditableOption={handleEditableInputEntryChange}
                                        onClickSaveEdit={input?.onClickSave}
                                        onClickCancelEdit={input?.onClickCancel}
                                        onClickDeleteEntry={input?.onClickDelete}
                                    />}
                                </>
                                )}
                                </React.Fragment>
                            ))
                            : (fieldset.isExpandable ? <Styled.FieldsetNoEntryMessage>{`No entry yet on ${fieldset.legend}. Click "+" button to add entry.`}</Styled.FieldsetNoEntryMessage> : "")
                            }
                        </Styled.FormFieldset>
                        {fieldset.isExpandable && 
                            <Styled.ButtonContainer className={"add-input-button-space"}>
                                <Button id={`expand-${fieldset.legend}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                            </Styled.ButtonContainer>
                        }
                    </Styled.FieldsetWrapper>
                ))
                : <Styled.FieldsetWrapper className={`${id}-fieldset-wrapper`}>
                    <Styled.FormFieldset id={`${id}-form-fieldset`} className={`${legendText}-fieldset`}>
                        {legendText && <Styled.FormLegend className={`${legendText}-legend`}>{legendText}</Styled.FormLegend>}
                        {!fieldsets && formInputs && formInputs.length !== 0
                        ? formInputs.map((input, inputIndex) => (
                            <React.Fragment key={`form-${id}-${inputIndex}`}>
                                {input.type === "textarea" && (
                                <LabeledInput
                                    {...input}
                                    id={input.id ?? `${legendText}-input`}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    idx={inputIndex}
                                    className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                />
                                )}

                                {input.type !== "textarea" &&
                                input.type !== "radio" &&
                                input.type !== "checkbox" && (
                                <LabeledInput
                                    {...input}
                                    id={input.id ?? `${legendText}-input`}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    idx={inputIndex}
                                    className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                />
                                )}
                                
                                {(input.type === "radio" || input.type === "checkbox") && (
                                <>
                                    <LabeledInput
                                        {...input}
                                        id={input.id ?? `${legendText}-input`}
                                        labelClass={labelClass}
                                        inputClass={inputClass}
                                        idx={inputIndex}
                                        className={`${labelAndInputContainerClass} ${input?.uniqueClass}`}
                                    />
                                    {(input.editing && input.isEditable) && <NestedEditableOption
                                        legend={`${legendText}`}
                                        idx={inputIndex}
                                        editableInformation={input?.editableInformation}
                                        onChangeOfEditableOption={handleEditableInputEntryChange}
                                        onClickSaveEdit={input?.onClickSave}
                                        onClickCancelEdit={input?.onClickCancel}
                                        onClickDeleteEntry={input?.onClickDelete}
                                    />}
                                </>
                                )}
                            </React.Fragment>
                        ))
                        : (isExpandable ? (<Styled.FieldsetNoEntryMessage>{`No entry yet on ${legendText}. Please click "+" button to add`}</Styled.FieldsetNoEntryMessage>) : "")
                        }
                    </Styled.FormFieldset>
                    {isExpandable && <Styled.ButtonContainer className={"add-input-button-space"}>
                        <Button id={`expand-${legendText}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                    </Styled.ButtonContainer>}
                </Styled.FieldsetWrapper>
            }
            <FormActionButtons
                id={id}
                hasSubmit={hasSubmit}
                submitText={submitText}
                handleSubmit={handleSubmit}
                hasReset={hasReset}
                resetText={resetText}
                handleReset={handleReset}
                hasCancel={hasCancel}
                cancelText={cancelText}
                handleCancel={handleCancel}
            />
            <Styled.ChildrenContainer className={"children-container"}>
                {children}
            </Styled.ChildrenContainer>
        </Styled.Form>
    );
}


export default DynamicForm;