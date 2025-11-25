import React, { forwardRef } from "react";
import * as Styled from "./Inputs.styles";
import type { InputProps, GeneralInput } from "@type/propTypes";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(( props, ref) => {
    const { type, id, placeholderText, onChange, isRequired, dataAttributes, disabled, className } = props;
    if (type === 'textarea') {
        const {rows = 5, cols = 30, value, ...rest } = props;
        return (
            <Styled.TextArea
                id={id}
                placeholder={placeholderText}
                onChange={onChange}
                value={value}
                rows={rows}
                cols={cols}
                {...dataAttributes}
                className={className}
                ref={ref as React.Ref<HTMLTextAreaElement>}
                disabled={disabled}
                required={isRequired}
            />
        );
    }

    if (type === 'radio' || type === 'checkbox') {
        const { checked, ...rest} = props;
        return (
        <Styled.DefaultInput
        ref={ref as React.Ref<HTMLInputElement>}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        disabled={disabled}
        className={className}
        {...dataAttributes}
        />
      );
    }
    const generalProps = props as GeneralInput;
    const { value, pattern, ...rest } = generalProps;
    return(
        <Styled.DefaultInput
            id={id}
            name={id}
            placeholder={placeholderText}
            onChange={onChange}
            value={value}
            type={type}
            required={isRequired}
            {...dataAttributes}
            className={className}
            ref={ref as React.Ref<HTMLInputElement>}
            disabled={disabled}
            pattern={pattern}
        />
    )
    
});

export default Input;