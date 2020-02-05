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
            dispatch({ type: "REGISTER_SUCCESS", payload: res.data})
            props.history.push('/login')
        })
        .catch( err => {
            dispatch ({ type: "LOGIN_FAILED"})
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
            console.log(res)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.results})
            localStorage.setItem('token', res.data.token)
            props.history.push('/')
        })
        .catch( err => {
            dispatch({ type: "LOGIN_FAILED"})
            console.log(err)
        })
    }
}

export const signOut = (props) => {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({ type: 'SIGN_OUT'});
        props.history.push('/login')
    }
}