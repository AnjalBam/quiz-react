import React from "react";
import {connect} from "react-redux";
import * as styles from './Result.styles'
import {StyledLink} from "../@mainUI";

const Result = props => {

    const showResults = () => {
        return (
            <styles.ResultWrapper>
                <styles.StyledIcon className='fas fa-thumbs-up'/>
                <styles.Header>Congratulations {props.name}!</styles.Header>
                <styles.ScoreWrapper>You Scored: {props.score}/{props.question?.count}</styles.ScoreWrapper>
                <StyledLink to='/'>Return Home</StyledLink>
            </styles.ResultWrapper>
        )
    }

    const showQuizNotComplete = () => {
        return (
            <styles.ResultWrapper>
                <styles.StyledIcon className='far fa-question-circle'/>
                <styles.Header>Oops!!</styles.Header>
                <styles.ScoreWrapper>
                    You haven't completed the quiz! <br/>Please Complete the quiz!
                </styles.ScoreWrapper>
                <StyledLink to='/'>Return Home</StyledLink>
            </styles.ResultWrapper>
        )
    }

    return (
        <div>
            {props.isQuizCompleted ? showResults() : showQuizNotComplete()}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        score: state.user.score,
        name: state.user.name,
        isQuizCompleted: state.user.isQuizCompleted,
        question: state.questions.questions,
    }
}

export default connect(mapStateToProps)(Result);