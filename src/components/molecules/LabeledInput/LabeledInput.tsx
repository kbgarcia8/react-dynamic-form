import React from "react";
import * as Styled from './LabeledInput.styles';
import Label from "@components/atoms/Label";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";
import type { LabeledInputProps, GeneralInput } from "@type/propTypes";

const LabeledInput = (props:React.PropsWithChildren<LabeledInputProps>) => {
    const { className,
    type,
    id,
    textLabel,
    additionalInfo,
    $labelFlexDirection,
    svg,
    labelClass,
    onChange,
    isRequired,
    dataAttributes,
    inputClass,
    ref, 
    disabled,
    isEditable,
    editIcon,
    onClickEdit,
    deleteIcon,
    onClickDelete,
    idx,
    children} = props;
    return(
        <Styled.LabelAndInputContainer className={`${className} ${id.replace('#','')}-label-input-container`}>
            {(type !== 'radio' && type !== 'checkbox') && <Label htmlFor={id} textLabel={textLabel} additionalInfo={additionalInfo} $labelFlexDirection={$labelFlexDirection} svg={svg} className={labelClass} />}
            {((type !== 'radio' && type !== 'checkbox') && type === 'textarea') && (() => {
                //? Conditional prop destructuring / discriminated narrowing - Extract props AFTER receiving them since not all props are present
                //? Inside component (your destructuring)
                const {rows = 5, cols = 30, value, ...rest } = props;
                return (
                    <Input
                        id={id}
                        name={id}
                        type={"textarea"}
                        isRequired={isRequired}
                        onChange={onChange}
                        value={value}
                        rows={rows}
                        cols={cols}
                        {...dataAttributes}
                        className={inputClass}
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        disabled={disabled}
                    />
                );
            })()}
            {(type !== 'radio' && type !== 'checkbox' && type !== 'textarea') && (() => {
                const generalProps = props as GeneralInput;
                const { value, pattern, placeholderText, ...rest } = generalProps;
                return(
                    <Input
                        id={id}
                        name={id}
                        placeholderText={placeholderText}
                        onChange={onChange}
                        value={value}
                        type={type}
                        isRequired={isRequired}
                        {...dataAttributes}
                        className={inputClass}
                        ref={ref as React.Ref<HTMLInputElement>}
                        disabled={disabled}
                        pattern={pattern}
                    />
                )
            })()}
            {(type === 'radio' || type === 'checkbox') && (() => {
                const { checked, ...rest} = props;
                    return (
                    <>
                    <Input
                    ref={ref as React.Ref<HTMLInputElement>}
                    type="checkbox"
                    name={id}
                    id={id}
                    isRequired={isRequired}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className={inputClass}
                    {...dataAttributes}
                    />
                    <Label htmlFor={id} textLabel={textLabel} additionalInfo={additionalInfo} $labelFlexDirection={$labelFlexDirection} svg={svg} className={labelClass} />
                    </>
                )
            })()}
            // * Radio inputs usually have labels next to them
            {isEditable && <Styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                    <Button id={`editable-${id}-edit-btn`} svg={editIcon} buttonType={"button"} onClick={onClickEdit} className={`edit-radio-${idx}`} dataAttributes={dataAttributes}/>
                    <Button id={`editable-${id}-delete-btn`} svg={deleteIcon} buttonType={"button"} onClick={onClickDelete} className={`delete-radio-${idx}`} dataAttributes={dataAttributes}/>
                </Styled.EditableInputButtonContainer>}
            {children}
        </Styled.LabelAndInputContainer>
    )
}

export default LabeledInput;