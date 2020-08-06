import styled, {keyframes} from "styled-components";

export const QuestionWrapper = styled.div`
    max-width: 800px;
    margin: 0px auto;
    padding-top: 2rem;
`

export const LoaderWrapper = styled.div `
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NotRegisteredWrapper = styled.div `
    text-align: center;
    & h1 {
        padding: 10px;
    }
    & h4 {
        color: ${props => props.theme.mainText};
    }
`;

const spin = keyframes `
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledIcon = styled.i `
    font-size: 3.5rem;
`;

export const StyledIconSpinning = styled(StyledIcon) `
    animation: ${spin} 3s infinite;
`;

export const StyledQuestionTitle = styled.p `
    font-size: 2rem;
`;

export const AnswerWrapper = styled.div `
    margin: 10px;
    margin-top: 16px;
    padding: 1rem;
    border-radius: 10px;    
`;

export const StyledListItem = styled.li `
    display: block;
    padding: 1rem 0.5rem;
    border: 2px solid ${props => props.theme.colorPrimary};
    border-radius: 10px;
    font-size: 1.5rem;
    margin: 5px;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.mainText};
        border: 2px solid ${props => props.theme.mainText};
    }
`;