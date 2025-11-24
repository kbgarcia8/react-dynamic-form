import styled from 'styled-components';
import { v } from 'styles/variables';

export const LabelAndInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    margin-bottom: ${v.spacing.small};
`;

export const EditableInputButtonContainer = styled.div`
    display: flex;
    height: 50%;
    width: 20%;
`;