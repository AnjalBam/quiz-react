import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBarWrapper = styled.nav `
    background: ${props => props.theme.bg};
    color: ${props => props.theme.colorPrimary};
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colorSecondary };
    box-shadow: 0px -10px 30px ${props => props.theme.colorSecondary };
`;

export const NavLinksWrapper = styled.div `
    max-width: 1024px;
    margin: 0px auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    @media screen and (max-width: 375px) {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;    
`;

export const StyledLink = styled(Link) `
    text-decoration: none;
    color: ${props => props.theme.colorPrimary};
    font-family: 'Satisfy', cursive;
    font-size: 3rem;
    @media screen and (max-width: 375px) {
        font-size: 2rem;
    }
    padding-left: 2rem;
    &:hover {
        text-decoration: underline;
    }
`;

export const ToggleSwitchWrapper = styled.div `
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledIcon = styled.i `
    display: block;
    color: ${props => props.theme.colorPrimary};
    padding: 0px 0.5rem;
    font-size: 1.2rem;
`;