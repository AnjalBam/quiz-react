import React, {useLayoutEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import * as styles from './Question.styles'


const Question = props => {
    console.log('question', props.questionData);
    const {results, previous, next} = props.questionData;

    const getAnswers = (answers) => {
        return (
            <styles.AnswerWrapper>
                {answers && answers.map(answer => {
                    return <styles.StyledListItem>{answer.choice_answer}</styles.StyledListItem>
                })}
            </styles.AnswerWrapper>
        )
    }

    const getIfUserRegistered = () => {
        console.log(results);
        return (
            <div>
                {results.map(question => {
                    return (
                        <>
                            <styles.StyledQuestionTitle>Q. {question.q_title}</styles.StyledQuestionTitle>
                            <ul>
                                {getAnswers(question.answers)}
                            </ul>
                        </>
                    )
                })}
            </div>
        )
    }

    const getIfUserNotRegistered = () => {
        return (
            <styles.NotRegisteredWrapper>
                <styles.StyledIcon className='far fa-question-circle'/>
                <h1>Oops...</h1>
                <h4>Seems like you are not registered... <br/> Please Proceed to registration</h4>
                <Link to={'/'}>Here...</Link>
            </styles.NotRegisteredWrapper>
        )
    }

    const getLoader = () => {
        return (
            <styles.LoaderWrapper>
                <styles.StyledIconSpinning className="fas fa-fan"/>
                <h1>Loading...</h1>
            </styles.LoaderWrapper>
        )
    }

    return (
        <styles.QuestionWrapper>
            {!props.isUserRegistered
                ? getIfUserNotRegistered()
                : props.isQuestionLoading
                    ? getLoader()
                    : getIfUserRegistered()}
        </styles.QuestionWrapper>
    )
}


const mapStateToProps = state => {
    return {
        isUserRegistered: state.user.isUserRegistered,
        questionData: state.questions.questions,
        isQuestionLoading: state.questions.isLoading,
    }
}

export default connect(mapStateToProps)(Question);