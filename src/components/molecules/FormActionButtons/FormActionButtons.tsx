import React from "react";
import * as Styled from './FormActionButtons.styles';
import Button from "../..//atoms/Button";
import type { FormActionButtonsProps } from "../../../type/propTypes";

const FormActionButtons = ({
    id,
    submitText,
    submitIcon,
    hasReset,
    resetText,
    resetIcon,
    handleReset,
    hasCancel,
    cancelText,
    cancelIcon,
    handleCancel,
}:FormActionButtonsProps) => {
    return(
        <Styled.ButtonContainer className={"form-main-button-container"}>
            <Button id={`form-${id}-submit`} startIcon={submitIcon} buttonType={"submit"} text={submitText ?? "Submit"} className={"submit-form-btn"}/>
            {hasReset && <Button id={`form-${id}-edit`} startIcon={resetIcon} buttonType={"button"} text={resetText ?? "Reset"} onClick={handleReset} className={"reset-form-btn"}/>}
            {hasCancel && <Button id={`form-${id}-cancel`} startIcon={cancelIcon} buttonType={"button"} text={cancelText ?? "Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}                
        </Styled.ButtonContainer>
    )
};

export default FormActionButtons;