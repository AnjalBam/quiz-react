import React from "react";
import styled from "styled-components";
// import * as styles from './MainComponent.styles'
import {Wrapper, Button} from "../@mainUI";


const MainComponent = props => {
    return (
        <Wrapper>
            <h1>Main component</h1>
            <Button>Help me</Button>
        </Wrapper>
    )
}

export default MainComponent;