import React from "react";
import * as Styled from "./Button.styles";
import type { ButtonProps } from "../../../type/propTypes";

const Button = ({
    onClick,
    id,
    buttonType,
    source,
    svg,
    alt = "alt-button-icon",
    text = "",
    className = "",
    dataAttributes = {},
    ...rest
}: ButtonProps) => {
    return (
        <Styled.DefaultButton
            id={id}
            type={buttonType}
            onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
            className={className}
            {...rest}
            {...dataAttributes} // <-- flattened here
        >
            <Styled.ButtonTextAndIconSpace className="button-icon-text-space">
                {source ? <Styled.ButtonIcon src={source} alt={alt} /> : svg || ''}
                {text && <Styled.ButtonText id={id}>{text}</Styled.ButtonText>}
            </Styled.ButtonTextAndIconSpace>
        </Styled.DefaultButton>
    );
};


export default Button;