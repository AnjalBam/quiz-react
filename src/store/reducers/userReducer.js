import {COMPLETE_QUIZ, INCREASE_USER_SCORE, RESET_STATS, RESET_USER_SCORE, USER_REGISTER} from "../actions/actionTypes";

const initialState = {
    isUserRegistered: false,
    name: '',
    score: 0,
    isQuizCompleted: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return{
                ...state,
                name: action.name,
                isUserRegistered: true,
            };
        case INCREASE_USER_SCORE:
            return {
                ...state,
                score: state.score + 1,
            }
        case RESET_STATS:
            return  {
                ...state,
                name: '',
                isUserRegistered: false,
                isQuizCompleted: false,
                score: 0,
            }
        case COMPLETE_QUIZ:
            return  {
                ...state,
                isQuizCompleted: true,
            }
        case RESET_USER_SCORE:
            return {
                ...state,
                isQuizCompleted: false,
                score: 0,
            }
        default:
            return state;
    }

}

export default userReducer;