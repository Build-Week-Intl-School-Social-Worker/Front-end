//actions

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';



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
            console.log(res.data.id)
            dispatch({ type: "LOGIN_SUCCESS", payload: userInputs})
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.user.id)
            dispatch({ type: "DATA_START_LOADING"})
        console.log('set user data to state action')
        axiosWithAuth()
        .get(`https://school-social-worker.herokuapp.com/api/users/${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: "SET_USER_DATA", payload: res.data})
            props.history.push('/')
        })
        .catch(err => {
            console.log('error on setUserDataToState running on Navigation.js: ',err)
        })
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
        localStorage.removeItem('id');
        dispatch({ type: 'SIGN_OUT'});
        props.history.push('/login')
    }
}

export const loadUserData = (props) => {
    return dispatch => {
        console.log('load user data works')
        // dispatch({ type: 'SIGN_OUT'});
        axiosWithAuth()
        .get('https://school-social-worker.herokuapp.com/api/users')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const setUserDataToState = props => {
    return dispatch => {
        dispatch({ type: "DATA_START_LOADING"})
        console.log('set user data to state action')
        axiosWithAuth()
        .get(`https://school-social-worker.herokuapp.com/api/users/${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: "SET_USER_DATA", payload: res.data})
        })
        .catch(err => {
            console.log('error on setUserDataToState running on Navigation.js: ',err)
        })
    }
}