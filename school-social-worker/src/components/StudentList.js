import React from 'react';
import { connect } from 'react-redux'; //HOC
import { fetchStudents } from '../actions';

const StudentList = props => {

 const apiCall = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=burger&p=3';

    return (
        <>
        <h2>Student List  Component</h2>
        <button onClick={() => props.fetchStudents(apiCall)}> get the data </button>
        </>
    )
}


const mapStateToProps = state => {
    return {
        title: state.title,
        editing: state.editing
    }
}

export default connect(
    mapStateToProps,
    {fetchStudents}
)(StudentList);