import React from "react";
import * as Styled from './LabeledInput.styles';
import Label from "@components/atoms/Label";
import Input from "@components/atoms/Input";
import type { LabeledInputProps, InputProps } from "@type/propTypes";

const LabeledInput = ({
    className,
    type,
    id,
    textLabel,
    additionalInfo,
    $labelFlexDirection,
    svg,
    labelClass,
    placeholderText,
    onChange,
    isRequired,
    dataAttributes,
    inputClass,
    ref, 
    disabled,
    pattern,
    isEditable,
    editIcon,
    onClickEdit,
    deleteIcon,
    onClickDelete,
    idx,
    children
}:React.PropsWithChildren<LabeledInputProps>) => {
    return(
        <Styled.LabelAndInputContainer className={`${className} ${id.replace('#','')}-label-input-container ${checked ? "selected" : ""}`}>
            {type !== 'radio' && 
            <Label htmlFor={id} textLabel={textLabel} additionalInfo={additionalInfo} $labelFlexDirection={$labelFlexDirection} svg={icon} className={labelClass} />}
            <Input
                id={id}
                placeholderText={placeholderText}
                onChange={onchange}
                value={value}
                type={type}
                isRequired={isRequired}
                dataAttributes={dataAttributes}
                className={`${inputClass || ""}`}
                ref={ref}
                checked={!!checked}
                disabled={!!disabled}
                pattern={pattern}
                rows={rows}
                cols={cols}
            />
            {type === 'radio' && <Label htmlFor={id} textLabel={label} addtionalInfo={additionalInfo} $labelDirection={direction} svg={icon} className={labelClass} />}
            {/* If input (usually radio) acting as selection/option */}
            {isEditable && <Styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                    <Button id={`editable-${id}-edit-btn`} svg={editIcon} buttonType={"button"} onClick={onClickEdit} className={`edit-radio-${idx}`} dataAttributes={dataAttributes}/>
                    <Button id={`editable-${id}-delete-btn`} svg={deleteIcon} buttonType={"button"} onClick={onClickDelete} className={`delete-radio-${idx}`} dataAttributes={dataAttributes}/>
                </Styled.EditableInputButtonContainer>}
            {children}
        </Styled.LabelAndInputContainer>
    )
}

export default LabeledInput;