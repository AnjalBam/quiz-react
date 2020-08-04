import styled from 'styled-components';

export const Button = styled.button `
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: none;
    background: blue;
    color: white;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.mainText};
    &:focus {
        outline: none;
    }
`
export const Wrapper = styled.div `
    background: ${props => props.theme.bgPrimary};
    padding: 1rem;
`