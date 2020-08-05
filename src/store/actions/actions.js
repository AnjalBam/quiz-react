import * as actions from './actionTypes';
import axios from 'axios';


const startDataLoading = () => {
    return {
        type: actions.START_DATA_LOADING
    }
}

const dataLoadingSuccess = (data) => {
    return {
        type: actions.DATA_LOADING_SUCCESS,
        data
    }
}

const dataLoadingFailure = () => {
    return {
        type: actions.DATA_LOADING_FAILURE
    }
}

export const setDataFromAPI = (apiUrl) => {
    return (dispatch) => {
        dispatch(startDataLoading());
        return axios.get(apiUrl).then(response => {
            console.log(response.data)
            dispatch(dataLoadingSuccess(response.data));
        }).catch(err => {
            console.error({err});
            dispatch(dataLoadingFailure())
        })
    }
}

export const setTheme = isDarkTheme => {
    return {
        type: actions.SET_THEME,
        payload: isDarkTheme
    }
}