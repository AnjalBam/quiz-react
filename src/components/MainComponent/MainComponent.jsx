import React from "react";
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";


import NavBar from "../NavBar/NavBar";
import Routes from "../Routes/Routes";
import {ContainerWrapper, Wrapper} from "../@mainUI";
import Footer from "../Footer/Footer";
import {MainComponentWrapper} from "./MainComponent.styles";


const MainComponent = props => {

    return (
        <BrowserRouter>
            <MainComponentWrapper>

                <NavBar/>
                <Wrapper>
                    <ContainerWrapper>
                        <Routes/>
                    </ContainerWrapper>
                </Wrapper>
                <Footer/>

            </MainComponentWrapper>
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
        isDarkTheme: state.theme.isDarkTheme,
    }
}

export default connect(mapStateToProps)(MainComponent);