import styled from "styled-components";
import {Link} from "react-router-dom";

export const QuizWrapper = styled.div `
    text-align: center;
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: none;
    margin: 3px;${props => props.theme.colorPrimary};
    color: white;
    background: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.colorPrimary};
    border: 2px solid ${props => props.theme.colorPrimary};
    &:focus {
        outline: none;
    }
    &:hover {
        background: ${props => props.theme.colorPrimary};
        padding: 1rem 4rem;
        box-shadow: 0px 0px 10px ${props => props.theme.colorPrimary};
        color: white;
    }
`;

export const QuizHeader = styled.div `
    display: flex;
    font-family: 'Satisfy', cursive;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: center;
    
    & p {
        font-weight: regular;
        font-size: 3.5rem;
        text-decoration: underline;
    }
`;

export const InfoText = styled.div `
    padding-top: 5vh;
    color: ${props => props.theme.mainText};
    font-size: 1.5rem;
`;

export const StyledInput = styled.input `
    width: 50%;
    
    @media screen and (max-width: 800px) {
        width: 70%;
    }
    
    @media screen and (max-width: 576px) {
        width: 80%;
    }
    
    @media screen and (max-width: 300px) {
        width: 90%;
    }
    
    padding: 10px;
    font-size: 1.5rem;
    border: 1px solid #aaa;
    border-radius: 5px;
    
    &:focus {
        border: 1px solid ${props => props.theme.colorPrimary};
        outline: none;
        color: ${props => props.theme.colorPrimary};
    }
`;

export const WelcomeWrapper = styled.div `
    padding-top: 5vh;
`;

export const InputWrapper = styled.div `
    margin-bottom: 1rem;
`;

export const WelcomeHeading = styled.h4 `
    padding: 10px;
    color: ${props => props.theme.mainText};
    span {
        font-size: 2rem;
        color: ${props => props.theme.colorPrimary};
    }
`;