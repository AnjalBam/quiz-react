import React from "react";
import {connect} from "react-redux";
import {Wrapper, Button} from "../@mainUI";
import NavBar from "../NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";


const MainComponent = props => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Wrapper>
                <br/>
                <h1>Main component</h1>
                <Button onClick={() => console.log(props.isDarkTheme)}>Help me</Button>
            </Wrapper>
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
        isDarkTheme: state.theme.isDarkTheme,
    }
}

export default connect(mapStateToProps)(MainComponent);