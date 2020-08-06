import React, {useState} from "react";
import {connect} from 'react-redux';

import {Button, StyledLink} from "../@mainUI";
import * as styles from './Quiz.styles';
import {registerUser, resetUserData} from "../../store/actions/userActions";
import {setDataFromAPI} from "../../store/actions/actions";

const Quiz = props => {
    const [name, setName] = useState('');

    const handleChange = event => {
        setName(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.registerUser(name);
        setName('')
    }

    const baseAPIUrl = 'http://quiz-app-backend-2020.herokuapp.com/list/';

    const fetchAPIData = (apiUrl) => {
        props.setDataFromAPI(apiUrl);
    }

    return (
        <styles.QuizWrapper>
            <styles.QuizHeader>
                <p>Quiz</p>
            </styles.QuizHeader>
            {props.isUserRegistered
                ?
                <styles.WelcomeWrapper>
                    <styles.WelcomeHeading>
                        <span>Hello {props.name}</span>
                    </styles.WelcomeHeading>

                    <styles.WelcomeHeading>
                        Thank you for registering! <br/>
                        You can proceed to the quiz now.
                    </styles.WelcomeHeading>

                    <StyledLink to='/question/' onClick={() => fetchAPIData(baseAPIUrl)}>StartQuiz</StyledLink>
                    <br/>
                    <br/>
                    <Button onClick={() => props.resetUserData()}>Register as a new user</Button>
                </styles.WelcomeWrapper>
                :
                <>
                    <styles.InfoText>
                        <p>Please register here...</p>
                    </styles.InfoText>
                    <form onSubmit={handleSubmit}>

                        <styles.InputWrapper>
                            <styles.StyledInput required type="text" name='userName' onChange={handleChange}
                                                placeholder='Name'/>
                        </styles.InputWrapper>

                        <Button type='submit'>Submit</Button>
                    </form>
                </>}

        </styles.QuizWrapper>
    )
}

const mapStateToProps = state => {
    return {
        name: state.user.name,
        score: state.user.score,
        isUserRegistered: state.user.isUserRegistered,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDataFromAPI: (apiUrl) => dispatch(setDataFromAPI(apiUrl)),
        registerUser: (name) => dispatch(registerUser(name)),
        resetUserData: () => dispatch(resetUserData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);