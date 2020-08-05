import React from 'react';
import './main.css'
import {connect} from "react-redux";
import MainComponent from "./components/MainComponent/MainComponent";

import {ThemeProvider} from "styled-components";
import * as themes from './components/@mainUI/Theme'

function App({isDarkTheme}) {
    return (
        <div>
            <ThemeProvider theme={isDarkTheme ? themes.DarkTheme : themes.LightTheme}>
                <MainComponent/>
            </ThemeProvider>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isDarkTheme: state.theme.isDarkTheme,
    }
}

export default connect(mapStateToProps)(App);
