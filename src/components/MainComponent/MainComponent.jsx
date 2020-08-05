import React, {useState} from "react";
import {connect} from "react-redux";
import {Wrapper, Button} from "../@mainUI";
import Switch from "../@mainUI/Components/Switch";
import {setTheme} from "../../store/actions/actions";


const MainComponent = props => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const getCheckedValue = (value) => {
        console.log({value});
        setIsDarkTheme(value)

    }
    props.setTheme(isDarkTheme);
    return (
        <Wrapper>
            <Switch getCheckedValue={getCheckedValue} />
            <br/>
            <h1>Main component</h1>
            <Button onClick={() => console.log(props.isDarkTheme)}>Help me</Button>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        isDarkTheme: state.theme.isDarkTheme,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTheme: (isDarkTheme) => dispatch(setTheme(isDarkTheme)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainComponent);