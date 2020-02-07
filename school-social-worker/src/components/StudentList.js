import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; //HOC
import { fetchStudents } from '../actions';

import {axiosWithAuth} from '../utils/axiosWithAuth'
import  {StudentCard}  from './StudentCard';
import { StudentBox } from './StudentListStyles';


const StudentList = props => {
    const [students, setStudents] = useState([{}]);
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get('https://school-social-worker.herokuapp.com/api/students')
            .then(response => {
                setStudents(response.data);
                setFiltered(response.data)
                console.log('Students: ', response.data);
            })
            .catch(err => {
                console.log('StudentsListError: ', err)
            })
    }, [])





    const filterHandler = e => {
        console.log(e.target.value)
        if (e.target.value == 0) {
            setFiltered(students);
        } else {
            setFiltered(students.filter(student => student.grade == e.target.value));
        }
    }


    return (
        <div>
            <StudentBox>

            <label > Filter By Grade: 
                <select onChange={filterHandler} >
                    <option value='0'>All</option>
                    <option>k</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
            </label>
            <h1>Student List: </h1>

            {
                filtered.map(student => (

                    <StudentCard students={students} setFiltered={setFiltered} setStudents={setStudents} key={student.id} child={student} />




                ))


            }
        </StudentBox >
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