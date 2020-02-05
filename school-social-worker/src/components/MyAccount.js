import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { loadUserData } from '../actions';

const MyAccount = (props) => {
    const [ userList, setUserList ] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
        .get('https://school-social-worker.herokuapp.com/api/users')
        .then(res => {
            setUserList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    

    return (
        <>
        <h2>My Account Component</h2>
        <h3>{props.email}</h3>
        {userList.map(item => {
            return (
                <p>{item.name}</p>
                
        )
        })}
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

