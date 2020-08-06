import {COMPLETE_QUIZ, INCREASE_USER_SCORE, RESET_STATS, USER_REGISTER} from "../actions/actionTypes";

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
        default:
            return state;
    }

}

export default userReducer;