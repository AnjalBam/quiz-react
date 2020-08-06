import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Button = styled.button `
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: none;
    color: white;
    font-size: 1rem;
    background: ${props => props.theme.bgSecondary};
    color: ${props => props.theme.colorPrimary};
    border: 2px solid ${props => props.theme.colorPrimary};
    
    &:hover:enabled {
        background: ${props => props.theme.colorPrimary};
        padding: 1rem 4rem;
        box-shadow: 0px 0px 10px ${props => props.theme.colorPrimary};
        color: white;
    }
    
    &:focus {
        outline: none;
    }
`
export const Wrapper = styled.div `
    padding: 1rem;
    color: ${props => props.theme.colorPrimary};
`;

export const ContainerWrapper = styled.div `
    max-width: 1080px;
    margin: 0px auto;
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