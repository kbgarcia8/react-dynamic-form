import React from "react";
import * as Styled from './NestedEditableOptopn.styles';
import Input from "../..//atoms/Input";
import type { NestedEditableOptionProps } from "../../../type/propTypes";
import Button from "../../atoms/Button";

const NestedEditableOption = ({
    legend,
    idx,
    editableInformation,
    onChangeOfEditableOption,
    onClickSaveEdit,
    onClickCancelEdit,
    onClickDeleteEntry
}:NestedEditableOptionProps) => {
    return (
        <Styled.FormFieldset className={"editable-selection-fieldset"}>
            <Styled.FormLegend>{`${legend} ${idx + 1}`}</Styled.FormLegend>
            {editableInformation.map((information, informationidx) => (
                <Styled.LabelAndInputContainer key={`${information.name}-${informationidx}`} className={"editable-selection-container"}>
                    <Input
                        id={`editable-selection-${informationidx}`}
                        name={`editable-selection-${informationidx}`}
                        placeholderText={information['name'].charAt(0).toUpperCase() + information['name'].slice(1)}
                        onChange={onChangeOfEditableOption}
                        value={information['info']}
                        type={information['type']}
                        isRequired={true}
                        className={"editable-selection"}                                       
                        dataAttributes={{
                            "data-index": informationidx, //* should be idx to correspond to radio button index and not with input increment
                            "data-key": information['info']
                        }}
                    />
                </Styled.LabelAndInputContainer>
            ))}                                            
            <Styled.ButtonContainer className={"editable-selection-button-space"}>
                <Button id={`editable-selection-${idx}-submit`} buttonType={"submit"} text={"Save"} onClick={onClickSaveEdit} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
                <Button id={`editable-selection-${idx}-cancel`} buttonType={"button"} text={"Cancel"} onClick={onClickCancelEdit} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
                <Button id={`editable-selection-${idx}-delete`} buttonType={"button"} text={"Delete"} onClick={onClickDeleteEntry} className={"editable-selection-btn"} dataAttributes={{"data-index": idx}}/>
            </Styled.ButtonContainer>
        </Styled.FormFieldset>
    )
}

export default NestedEditableOption;