import * as actions from './actionTypes';
import axios from 'axios';

export const setData = (data) => ({
    type: actions.SET_DATA,
    data
})

export const setDataFromAPI = () => {
    return (dispatch) => {
        let data = []
        return axios.get('http://127.0.0.1:8000/list/').then(response => {
            data = response.data
            console.log(data)
            dispatch(setData(data));
        })
    }
}

export const setTheme = isDarkTheme => {
    return {
        type: actions.SET_THEME,
        payload: isDarkTheme
    }
}