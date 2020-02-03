//actions

import axios from 'axios';

export const test = () => {
    return { type: 'TEST'};
}

export const fetchStudents = apiCall => {
    return dispatch => {
        dispatch({ type: 'FETCHING_DATA_START'});
        axios
        .get(apiCall)
        .then(res => {
            console.log(res);
            dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data.results})
        })
        .catch( err => {
            console.log(err)
        })
    }
}