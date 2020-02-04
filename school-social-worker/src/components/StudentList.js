import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'; //HOC
import { fetchStudents } from '../actions';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const StudentList = props => {
const [students, setStudents] = useState([{}]);
    useEffect(()=> {
        axiosWithAuth()
        .get('https://school-social-worker.herokuapp.com/api/students')
        .then(response => {
            console.log('Students: ', response);
        })
        .catch(err => {
            console.log('StudentsListError: ', err)
        })
    })


    return (
        <>
        <h2>Student List  Component</h2>
  
        </>
    )
}


const mapStateToProps = state => {
    return {
        title: state.title,
        studentList: state.studentList
    }
}

export default connect(
    mapStateToProps,
    {fetchStudents}
)(StudentList);