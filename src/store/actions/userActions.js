import {INCREASE_USER_SCORE, RESET_STATS, SET_USER_NAME, USER_REGISTER} from "./actionTypes";


// export const setUserName = name => {
//     return {
//         type: SET_USER_NAME,
//         name,
//     }
// }

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

