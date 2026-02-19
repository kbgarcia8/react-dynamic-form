import React from "react";
import * as Styled from "./Button.styles";
import type { ButtonProps } from "../../../type/propTypes";

const Button = ({
    onClick,
    id,
    buttonType,
    startIcon,
    endIcon,
    alt = "alt-button-icon", 
    text = "",
    className = "",
    dataAttributes = {}
}:ButtonProps) => {
    if(buttonType === 'button') {
        return (
            <Styled.DefaultButton
                onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
                id={id}
                type={buttonType}
                className={className}
                {...dataAttributes}
            >
                <Styled.ButtonTextAndIconSpace className={"button-icon-text-space"}>
                    {startIcon ? startIcon : ''}
                    {text && <Styled.ButtonText id={id} >{text}</Styled.ButtonText>}
                    {endIcon ? endIcon : ''}
                </Styled.ButtonTextAndIconSpace>
            </Styled.DefaultButton>
        )
    }
    
    if(buttonType === 'submit') {
        return (
            <Styled.DefaultButton
                id={id}
                type={buttonType}
                className={className}
                {...dataAttributes}
            >
                <Styled.ButtonTextAndIconSpace className={"button-icon-text-space"}>
                    {startIcon ? startIcon : ''}
                    {text && <Styled.ButtonText id={id} >{text}</Styled.ButtonText>}
                    {endIcon ? endIcon : ''}
                </Styled.ButtonTextAndIconSpace>
            </Styled.DefaultButton>
        )
    }
}

export default Button;