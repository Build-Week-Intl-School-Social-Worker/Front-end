import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'; //HOC
import { fetchStudents } from '../actions';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { ChildCard } from './StudentCard';
import { StudentCard } from './StudentCard';

const StudentList = props => {
const [students, setStudents] = useState([{}]);
    useEffect(() => {
        axiosWithAuth()
        .get('https://school-social-worker.herokuapp.com/api/students')
        .then(response => {
            setStudents(response.data);
            console.log('Students: ', response.data);
        })
        .catch(err => {
            console.log('StudentsListError: ', err)
        })
    }, [])


    return (
        <div>
            <h1>Student List: </h1>
            {
            students.map( student => (
                // <StudentCard child={student}/>
                <div>{student.name}</div>
            ))
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        title: state.title,
        studentList: state.studentList
    }
}

export default connect(
    mapStateToProps
)(StudentList);