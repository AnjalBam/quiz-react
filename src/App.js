import React, {useEffect, useState} from 'react';
import './main.css'
import {connect} from "react-redux";
import MainComponent from "./components/MainComponent/MainComponent";

import {ThemeProvider} from "styled-components";
import * as themes from './components/@mainUI/Theme'
import {setDataFromAPI} from "./store/actions/actions";

function App(props) {

    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        props.setDataFromAPI();
    }, [])

    return (
        <ThemeProvider theme={isDark ? themes.DarkTheme : themes.LightTheme}>
            <h1>Hello World!</h1>

            <button onClick={() => setIsDark(!isDark)}>Toggle theme</button>
            <button onClick={() => console.log(props.questions)}>View state</button>
            <MainComponent />
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        questions: state.questions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDataFromAPI: () => dispatch(setDataFromAPI()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
