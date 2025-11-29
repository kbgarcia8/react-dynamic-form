import React from "react";
import Button from "../../atoms/Button";
import LabeledInput from "../../molecules/LabeledInput";
import NestedEditableOption from "../..//molecules/NestedEditableOption";
import FormActionButtons from "../../molecules/FormActionButtons";
import * as Styled from "./DynamicForm.styles";
import type { CheckedInput, DynamicFormProps, GeneralInput, inputEntryShape, TextAreaInput } from "../../../type/propTypes";

const DynamicForm = ({
    fieldsets = null, //* if a form has differrent fieldsets
    legendText, //* if form has no fieldsets, depends if you have fieldset for solo form
    isExpandable = false, //* if form has no fieldsets this is default to false - to add inputs
    id,
    formInputs, //* object that contains the input fields information to make it reusable
    labelAndInputContainerClass,
    labelClass,
    inputClass,
    handleEditableInputEntryChange, //* handles change on editable inputs
    handleAddingInputEntry,
    hasSubmit = false,
    hasCancel = false,
    hasDelete = false,
    hasEdit = false,
    submitText,
    handleSubmitForm,
    handleSubmit,
    cancelText,
    handleCancel,
    deleteText,
    handleDelete,
    editText,
    handleEdit,
    className,
    children //* if there are nodes to be inserted after submit/edit/cancel buttons usually in login or signup forms
}:React.PropsWithChildren<DynamicFormProps>) => {
    return (
        <Styled.Form id={`${id}-form`} className={className} onSubmit={handleSubmitForm}>
            {fieldsets
                ? fieldsets.map((fieldset, fieldsetIdx) => (
                    <Styled.FieldsetWrapper key={`${fieldset.legend}-${fieldsetIdx}`} >
                        <Styled.FormFieldset id={`${id}-form-fieldset-${fieldsetIdx}`} className="form-fieldset">
                            {fieldset.legend && <Styled.FormLegend>{fieldset.legend}</Styled.FormLegend>}
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
                                />
                                )}

                                {(input.type === "radio" || input.type === "checkbox") && (
                                <LabeledInput
                                    {...input}
                                    id={input.id ?? `${fieldset.legend}-input`}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    idx={inputIndex}
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
                                />
                                )}
                                {/* For editable data e.g. address entry, education entry */}
                                {(input.editable && input.editing) && <NestedEditableOption
                                    legend={`${fieldset.legend} ${inputIndex+1}`}
                                    idx={inputIndex}
                                    editableInformation={input?.editableInformation}
                                    onChangeOfEditableOption={handleEditableInputEntryChange}
                                    onClickSaveEdit={input?.onClickSave}
                                    onClickCancelEdit={input?.onClickCancel}
                                    onClickDeleteEntry={input?.onClickDelete}
                                />}
                                </React.Fragment>
                            ))
                            : (fieldset.expandable ? <Styled.FieldsetNoEntryMessage>{`No entry yet on ${fieldset.legend}. Click "+" button to add entry.`}</Styled.FieldsetNoEntryMessage> : "")
                            }
                        </Styled.FormFieldset>
                        {fieldset.expandable && 
                            <Styled.ButtonContainer className={"add-input-button-space"}>
                                <Button id={`expand-${fieldset.legend}-inputs`} buttonType={"button"} text={"+"} onClick={handleAddingInputEntry} className={`add-input-entry`}/>
                            </Styled.ButtonContainer>
                        }
                    </Styled.FieldsetWrapper>
                ))
                : <Styled.FieldsetWrapper>
                    <Styled.FormFieldset id={`${id}-form-fieldset`} className="form-fieldset">
                        {legendText && <Styled.FormLegend>{legendText}</Styled.FormLegend>}
                        {formInputs.length !== 0
                        ? formInputs.map((input, inputIndex) => (
                            <React.Fragment key={`form-${id}-${inputIndex}`}>
                                {input.type === "textarea" && (
                                <LabeledInput
                                    {...input}
                                    id={input.id ?? `${legendText}-input`}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    idx={inputIndex}
                                />
                                )}

                                {(input.type === "radio" || input.type === "checkbox") && (
                                <LabeledInput
                                    {...input}
                                    id={input.id ?? `${legendText}-input`}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    idx={inputIndex}
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
                                />
                                )}
                                {/*For editable data e.g. address entry, education entry*/}
                                {(input.editable && input.editing) && <NestedEditableOption
                                    legend={`${legendText} ${inputIndex+1}`}
                                    idx={inputIndex}
                                    editableInformation={input?.editableInformation}
                                    onChangeOfEditableOption={handleEditableInputEntryChange}
                                    onClickSaveEdit={input?.onClickSave}
                                    onClickCancelEdit={input?.onClickEdit}
                                    onClickDeleteEntry={input?.onClickDelete}
                                />}
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
                hasEdit={hasEdit}
                editText={editText}
                handleEdit={handleEdit}
                hasCancel={hasCancel}
                cancelText={cancelText}
                handleCancel={handleCancel}
                hasDelete={hasDelete}
                deleteText={deleteText}
                handleDelete={handleDelete}
            />
            <Styled.ChildrenContainer className={"children-container"}>
                {children}
            </Styled.ChildrenContainer>
        </Styled.Form>
    );
}


export default DynamicForm;