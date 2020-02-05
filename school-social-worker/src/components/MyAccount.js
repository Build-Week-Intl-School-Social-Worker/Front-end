import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { loadUserData } from '../actions';

const MyAccount =  (props) => {
    const [ userList, setUserList ] = useState([]);
    const [ currentUser, setCurrentUser ] = useState({
        id: null,
        role_id: null,
        name: "",
        email: "",
        phone: "",
        password: "",
        org_name: ""
    })


     useEffect(()=>{
        axiosWithAuth()
        .get('https://school-social-worker.herokuapp.com/api/users')
        .then(async res =>  {
            console.log(res.data.find(item => item.email === props.email))
            // let newData = await res.data.find(user => user.email === props.email)
            // console.log(newData)
            setCurrentUser(res.data.find(item => item.email === props.email))
            //  setUserList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])


    

    return (
        <>
        <h2>My Account Component</h2>
         <h3>{props.email}</h3> 
        {/* {userList.map(item => {
            return ( 
                 <div>
                    <p>{item.name}</p>
                    <h2>Account type: {(item.role_id === 1) ? <span>Admin</span> : <span>Social Worker</span>}</h2>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                    <p>{item.org_name}</p>
                </div> 
         )
        })}  */}
        <h1>{currentUser.name}</h1>
        <h2>Account type: {(currentUser.role_id === 1) ? <span>Admin</span> : <span>Social Worker</span>}</h2>
        <h1>{currentUser.phone}</h1>
        <h1>{currentUser.org_name}</h1>

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

