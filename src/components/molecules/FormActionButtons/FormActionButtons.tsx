import React from "react";
import * as Styled from './FormActionButtons.styles';
import Button from "../..//atoms/Button";
import type { FormActionButtonsProps } from "../../../type/propTypes";

const FormActionButtons = ({
    id,
    hasSubmit,
    submitText,
    handleSubmit,
    hasEdit,
    editText,
    handleEdit,
    hasCancel,
    cancelText,
    handleCancel,
    hasDelete,
    deleteText,
    handleDelete,
}:FormActionButtonsProps) => {
    return(
        <Styled.ButtonContainer className={"form-main-button-container"}>
            {hasSubmit && <Button id={`form-${id}-submit`} buttonType={"submit"} text={submitText ?? "Submit"} onClick={handleSubmit} className={"submit-form-btn"}/>}
            {hasEdit && <Button id={`form-${id}-edit`} buttonType={"button"} text={editText ?? "Edit"} onClick={handleEdit} className={"edit-form-btn"}/>}
            {hasCancel && <Button id={`form-${id}-cancel`} buttonType={"button"} text={cancelText ?? "Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}                
            {hasDelete && <Button id={`form-${id}-delete`} buttonType={"button"} text={deleteText ?? "Delete"} onClick={handleDelete} className={"delete-form-btn"}/>}
        </Styled.ButtonContainer>
    )
};

export default FormActionButtons;