import styled from 'styled-components';
import {StyledIcon} from '../NavBar/NavBar.styles'

export const FooterWrapper = styled.footer `
    background: ${props => props.theme.footerBg};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.mainText};
    padding: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const StyledIconFooter = styled(StyledIcon) `
    display: inline-block;
`

export const FooterHead = styled.p `
    display: block;
    padding-bottom: 10px;
    font-weight: regular;
`;

export const StyledLink = styled.a `
    display: inline-block;
    color: ${props => props.theme.mainText};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;