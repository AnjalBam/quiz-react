import React from "react";
import {connect} from "react-redux";


const Question = props => {
    console.log('question', props.questionData);
    return (
        <div>
            {props.isUserRegistered ? <h1>I am a Question</h1> : <h1>Please register</h1>}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserRegistered: state.user.isUserRegistered,
        questionData: state.questions.questions
    }
}

export default connect(mapStateToProps)(Question);