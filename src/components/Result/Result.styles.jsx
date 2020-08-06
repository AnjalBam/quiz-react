import styled from "styled-components";

export const ResultWrapper = styled.div `
    text-align: center;
    margin-top: 2rem;
`;

export const Header = styled.h1 `
    font-weight: regular;
`;

export  const ScoreWrapper = styled.p `
    font-size: 1.5rem;
    color: ${props => props.theme.mainText};
    margin-top: 1rem;
    margin-bottom: 10px;
`;

export const StyledIcon = styled.i `
    font-size: 3.5rem;
    padding: 1rem;
`;
