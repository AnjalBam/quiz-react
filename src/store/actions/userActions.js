import {COMPLETE_QUIZ, INCREASE_USER_SCORE, RESET_STATS, USER_REGISTER} from "./actionTypes";

export const increaseUserScore = () => {
    return {
        type: INCREASE_USER_SCORE,
    }
}

export const registerUser = (name) => {
    return {
        type: USER_REGISTER,
        name
    }
}
export const resetUserData = () => {
    return {
        type: RESET_STATS,
    }
}

export const completeQuiz = () => {
    return {
        type: COMPLETE_QUIZ,
    }
}
