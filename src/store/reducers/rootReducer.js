import * as actionTypes from '../actions/actionTypes';

const initialState = {questions: []}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                questions: action.data
            }
        default:
            return state;
    }
}
export default rootReducer;