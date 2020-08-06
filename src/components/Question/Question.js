import React, {useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import * as styles from './Question.styles'
import {setDataFromAPI} from "../../store/actions/actions";
import {StyledLink} from "../@mainUI";
import {completeQuiz, increaseUserScore} from "../../store/actions/userActions";

export const getIfUserNotRegistered = () => {
    return (
        <styles.NotRegisteredWrapper>
            <styles.StyledIcon className='far fa-question-circle'/>
            <h1>Oops...</h1>
            <h4>Seems like you are not registered... <br/> Please Proceed to registration</h4>
            <Link to={'/'}>Here...</Link>
        </styles.NotRegisteredWrapper>
    )
}

const Question = props => {
    // console.log('question', props.questionData);
    const {results, next, count} = props.questionData;
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [questionAttempted, setQuestionAttempted] = useState(false);

    const checkAnswerChoice = (isCorrect) => {
        setIsAnswerCorrect(isCorrect);
        setQuestionAttempted(true);
    }

    const getAnswers = (answers) => {
        return (
            <styles.AnswerWrapper>
                {answers && answers.map(answer => {
                    return (
                        <styles.StyledListItem
                            key={answer.answer_no}
                            onClick={!questionAttempted ? () => checkAnswerChoice(answer.is_correct) : null}
                            style={questionAttempted ? {
                                color: answer.is_correct ? 'green' : 'red',
                                border: `2px solid ${answer.is_correct ? 'green' : 'red'}`
                            } : null}
                        >
                            {answer.choice_answer}
                        </styles.StyledListItem>
                    )
                })}
            </styles.AnswerWrapper>
        )
    }

    const getNextQuestion = () => {
        //console.log('next question is here!!');
        setQuestionAttempted(false);
        props.setDataFromAPI(next);
        if (isAnswerCorrect) {
            props.increaseUserScore();
        }
    }
    const quizComplete = () => {
        props.completeQuiz();
        if (isAnswerCorrect) {
            props.increaseUserScore();
        }
    }

    const getIfUserRegistered = () => {
        // console.log(results);
        return (
            <div>
                {results.map(question => {
                    return (
                        <div key={question.id}>
                            <styles.StyledQuestionTitle>Q. {question.q_title}</styles.StyledQuestionTitle>
                            <ul>
                                {getAnswers(question.answers)}
                            </ul>

                            <styles.QuestionBottomWrapper>
                                <p>Score: <strong>{props.score}/{count}</strong></p>
                                {next
                                    ? (<styles.ButtonWithDisabledStyle
                                        disabled={!questionAttempted}
                                        onClick={getNextQuestion}
                                    >
                                        Next
                                    </styles.ButtonWithDisabledStyle>)
                                    : questionAttempted
                                        ? <StyledLink to='/result/' onClick={quizComplete}>Submit</StyledLink>
                                        : null}
                            </styles.QuestionBottomWrapper>
                        </div>
                    )
                })}
            </div>
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

            {/*<button disabled={!questionAttempted} onClick={() => console.log({isAnswerCorrect})}>IsCorrect?</button>*/}
        </styles.QuestionWrapper>
    )

}


const mapStateToProps = state => {
    return {
        isUserRegistered: state.user.isUserRegistered,
        questionData: state.questions.questions,
        isQuestionLoading: state.questions.isLoading,
        score: state.user.score,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setDataFromAPI: (apiUrl) => dispatch(setDataFromAPI(apiUrl)),
        increaseUserScore: () => dispatch(increaseUserScore()),
        completeQuiz: () => dispatch(completeQuiz()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);