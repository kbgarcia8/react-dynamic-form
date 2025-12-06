import React from "react";
import * as Styled from './NestedEditableOption.styles';
import Input from "../..//atoms/Input";
import type { NestedEditableOptionProps } from "../../../type/propTypes";
import Button from "../../atoms/Button";

const NestedEditableOption = ({
    legend,
    fieldsetIndex=null,
    idx,
    editableInformation,
    onChangeOfEditableOption,
    onClickSaveEdit,
    onClickCancelEdit,
    onClickDeleteEntry
}:NestedEditableOptionProps) => {
    return (
        <Styled.FormFieldset className={"editable-option-fieldset"}>
            <Styled.FormLegend>{`${legend} ${idx + 1}`}</Styled.FormLegend>
            {editableInformation?.map((information, informationidx) => (
                <Styled.LabelAndInputContainer key={`${information.name}-${informationidx}`} className={"editable-option-container"}>
                    <Input
                        id={`editable-option-${informationidx}`}
                        name={`editable-option-${informationidx}`}
                        placeholderText={information['name'].charAt(0).toUpperCase() + information['name'].slice(1)}
                        onChange={onChangeOfEditableOption}
                        value={information['info']}
                        type={information['type']}
                        isRequired={true}
                        className={"editable-option"}                                       
                        dataAttributes={{
                            "data-index": informationidx,
                            "data-fieldsetindex": fieldsetIndex,
                            "data-key": information['info']
                        }}
                    />
                </Styled.LabelAndInputContainer>
            ))}                                            
            <Styled.ButtonContainer className={"editable-option-button-space"}>
                <Button id={`editable-option-${idx}-submit`} buttonType={"button"} text={"Save"} onClick={onClickSaveEdit} className={"editable-option-btn"} dataAttributes={{"data-index": idx, "data-fieldsetindex": fieldsetIndex}}/>
                <Button id={`editable-option-${idx}-cancel`} buttonType={"button"} text={"Cancel"} onClick={onClickCancelEdit} className={"editable-option-btn"} dataAttributes={{"data-index": idx, "data-fieldsetindex": fieldsetIndex}}/>
                <Button id={`editable-option-${idx}-delete`} buttonType={"button"} text={"Delete"} onClick={onClickDeleteEntry} className={"editable-option-btn"} dataAttributes={{"data-index": idx, "data-fieldsetindex": fieldsetIndex}}/>
            </Styled.ButtonContainer>
        </Styled.FormFieldset>
    )
}

export default NestedEditableOption;