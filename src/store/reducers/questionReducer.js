import * as actionTypes from '../actions/actionTypes';

const initialState = {questions: [], isLoading: false, errors: ''}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                questions: action.data
            }
        case actionTypes.START_DATA_LOADING:
            return  {
                ...state,
                isLoading: true,

            }
        default:
            return state;
    }
}
export default questionReducer;