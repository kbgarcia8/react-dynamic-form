import React from "react";
import * as Styled from "./Label.styles";
import type { LabelProps } from "../../../type/propTypes";

const Label = ({
    htmlFor, 
    textLabel, 
    additionalInfo, 
    $labelFlexDirection, 
    startIcon, 
    endIcon,
    className,
    children
}: React.PropsWithChildren<LabelProps>) => {
    return(
        <Styled.DefaultLabel htmlFor={htmlFor} className={className} $labelFlexDirection={$labelFlexDirection}>
            {startIcon && <Styled.LabelIconContainer className={"label-icon-container"}>
                {startIcon}
            </Styled.LabelIconContainer>}
            <Styled.LabelTextContainer className={"label-text-container"}>
                <Styled.MainLabelText className={"main-label"}>{textLabel}</Styled.MainLabelText>
                {additionalInfo && <Styled.LabelAdditionalInfo className={"additional-info"} >{additionalInfo}</Styled.LabelAdditionalInfo>}
            </Styled.LabelTextContainer>
            {endIcon && <Styled.LabelIconContainer className={"label-icon-container"}>
                {endIcon}
            </Styled.LabelIconContainer>}
            {children}
        </Styled.DefaultLabel>
    )
}

export default Label;