import * as actionTypes from '../actions/actionTypes';

const initialState = {questions: [], isLoading: true, errors: ''}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_DATA_LOADING:
            return  {
                ...state,
                isLoading: true,

            }
        case actionTypes.DATA_LOADING_SUCCESS:
            return  {
                ...state,
                isLoading: false,
                questions: action.data
            }
        case actionTypes.DATA_LOADING_FAILURE:
            return  {
                ...state,
                isLoading: false,
                errors: action.error,
            }
        default:
            return state;
    }
}
export default questionReducer;