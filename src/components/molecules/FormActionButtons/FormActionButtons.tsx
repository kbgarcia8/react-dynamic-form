import React from "react";
import * as Styled from './FormActionButtons.styles';
import Button from "../..//atoms/Button";
import type { FormActionButtonsProps } from "../../../type/propTypes";

const FormActionButtons = ({
    id,
    hasSubmit,
    submitText,
    handleSubmit,
    hasReset,
    resetText,
    handleReset,
    hasCancel,
    cancelText,
    handleCancel,
}:FormActionButtonsProps) => {
    return(
        <Styled.ButtonContainer className={"form-main-button-container"}>
            {hasSubmit && <Button id={`form-${id}-submit`} buttonType={"submit"} text={submitText ?? "Submit"} onClick={handleSubmit} className={"submit-form-btn"}/>}
            {hasReset && <Button id={`form-${id}-edit`} buttonType={"button"} text={resetText ?? "Reset"} onClick={handleReset} className={"reset-form-btn"}/>}
            {hasCancel && <Button id={`form-${id}-cancel`} buttonType={"button"} text={cancelText ?? "Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}                
        </Styled.ButtonContainer>
    )
};

export default FormActionButtons;