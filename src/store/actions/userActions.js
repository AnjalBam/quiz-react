import {COMPLETE_QUIZ, INCREASE_USER_SCORE, RESET_STATS, RESET_USER_SCORE, USER_REGISTER} from "./actionTypes";

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

export const resetUserScore = () => {
    return {
        type: RESET_USER_SCORE,
    }
}

export const completeQuiz = () => {
    return {
        type: COMPLETE_QUIZ,
    }
}
