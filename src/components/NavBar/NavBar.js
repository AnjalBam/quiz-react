import React, {useState} from "react";
import * as styles from './NavBar.styles'
import Switch from "../@mainUI/Components/Switch";
import {setTheme} from "../../store/actions/actions";
import {connect} from "react-redux";

const NavBar = props => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const getCheckedValue = (value) => {
        console.log({value});
        setIsDarkTheme(value);
    }
    props.setTheme(isDarkTheme);
    return (
        <styles.NavBarWrapper>
            <styles.NavLinksWrapper>
                <styles.StyledLink to='/'>Quiz</styles.StyledLink>

                <styles.ToggleSwitchWrapper>
                    <styles.StyledIcon className='fas fa-sun' />
                    <Switch getCheckedValue={getCheckedValue}/>
                    <styles.StyledIcon className="fas fa-moon"/>
                </styles.ToggleSwitchWrapper>

            </styles.NavLinksWrapper>
        </styles.NavBarWrapper>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setTheme: (isDarkTheme) => dispatch(setTheme(isDarkTheme)),
    }
}

export default connect(null, mapDispatchToProps)(NavBar);
