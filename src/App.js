import React, {useEffect, useState} from 'react';
import './main.css'
import {connect} from "react-redux";
import MainComponent from "./components/MainComponent/MainComponent";

import {ThemeProvider} from "styled-components";
import * as themes from './components/@mainUI/Theme'
import {setDataFromAPI} from "./store/actions/actions";

function App({setDataFromAPI, isDarkTheme}) {

    // const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        setDataFromAPI();
    }, [])
    // const setTheme = () => {
    //     setIsDark(!isDark)
    // }
    return (
        <div>
            <ThemeProvider theme={isDarkTheme ? themes.DarkTheme : themes.LightTheme}>
                <MainComponent/>
            </ThemeProvider>
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        setDataFromAPI: () => dispatch(setDataFromAPI()),
    }
}
const mapStateToProps = state => {
    return {
        isDarkTheme: state.theme.isDarkTheme,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
