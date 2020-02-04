//actions

import axios from 'axios';
import { useHistory } from 'react-router-dom';



export const test = () => {
    return { type: 'TEST'};
}

export const createUser = (apiCall, userInputs, props) => {
    return dispatch => {
        dispatch({ type: 'DATA_START_LOADING'});
        axios
        .post(apiCall, userInputs)
        .then(res => {
            console.log('it worked on actions')
            console.log(res);
            dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data.results})
            props.history.push('/login')
        })
        .catch( err => {
            console.log(err)
        })
    }
}

export const logInAction = (apiCall, userInputs, props) => {
    return dispatch => {
        dispatch({ type: 'DATA_START_LOADING'});
        axios
        .post(apiCall, userInputs)
        .then(res => {
            console.log('it worked on logInAction')
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.results})
            localStorage.setItem('token', res.data.token)
            props.history.push('/')
        })
        .catch( err => {
            console.log(err)
        })
    }
}