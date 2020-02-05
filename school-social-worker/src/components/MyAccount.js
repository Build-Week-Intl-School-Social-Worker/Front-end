import React, { useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios'
import { loadUserData } from '../actions';

const MyAccount = (props) => {

    

    return (
        <>
        <h2>My Account Component</h2>
        <h3>{props.email}</h3>
        <button onClick={props.loadUserData}> click it</button>
        </>
    )
}



const mapStateToProps = state => {
    return {
        id: state.id,
        email: state.email
    }
}

export default connect(
    mapStateToProps,
    {loadUserData}
)(MyAccount)

