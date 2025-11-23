import React from "react";
import * as Styled from "./Button.styles";
import type { ButtonProps } from "@type/propTypes";

const Button: React.FC<ButtonProps> = ({
    onClick,
    id,
    buttonType,
    source,
    svg,
    alt = "alt-button-icon", 
    text = "",
    className = "",
    dataAttributes = {}
})=> {

    return (
        <Styled.DefaultButton
            onClick={onClick}
            id={id}
            type={buttonType}
            className={className}
            {...dataAttributes}
        >
            <Styled.ButtonTextAndIconSpace className={"button-icon-text-space"}>
                {source ? <Styled.ButtonIcon src={source} alt={alt} /> : svg ? svg : ''}
                {text && <Styled.ButtonText id={id} >{text}</Styled.ButtonText>}
            </Styled.ButtonTextAndIconSpace>
        </Styled.DefaultButton>
    )
}

export default Button;