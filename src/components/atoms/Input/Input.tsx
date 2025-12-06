import React, { forwardRef } from "react";
import * as Styled from "./Inputs.styles";
import type { InputProps, GeneralInput } from "../../../type/propTypes";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(( props, ref) => {
    const { type, id, onChange, isRequired, dataAttributes={}, disabled, className } = props;
    if (type === 'textarea') {
        const {rows = 5, cols = 30, value, ...rest } = props;
        return (
            <Styled.TextArea
                onChange={onChange}
                value={value}
                rows={rows}
                cols={cols}
                className={className}
                ref={ref as React.Ref<HTMLTextAreaElement>}
                disabled={disabled}
                required={isRequired}
                {...rest}
                {...dataAttributes}
            />
        );
    }

    if (type === 'radio' || type === 'checkbox') {
        const { checked, ...rest} = props;
        return (
        <Styled.DefaultInput
            ref={ref as React.Ref<HTMLInputElement>}
            checked={checked}
            onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
            disabled={disabled}
            className={className}
            {...rest}
            {...dataAttributes}
        />
      );
    }
    const generalProps = props as GeneralInput;
    const { value, pattern, placeholderText, ...rest } = generalProps;
    return(
        <Styled.DefaultInput
            placeholder={placeholderText}
            onChange={onChange}
            value={value}
            required={isRequired}
            className={className}
            ref={ref as React.Ref<HTMLInputElement>}
            disabled={disabled}
            pattern={pattern}
            {...rest}
            {...dataAttributes}
        />
    )
    
});

export default Input;