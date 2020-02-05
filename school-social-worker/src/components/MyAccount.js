import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { loadUserData } from '../actions';
import { ScaleLoader } from "react-spinners";

const initialState = {
    id: 21,
role_id: 1,
name: "shawn initial state",
email: "shawn@test.com",
phone: "1231231234",
password: "$2a$12$FxDqJN9GMfulDUUmhEARbe3OOiSbamZSRnMoZhuCYXBMG9BqCxw5a",
org_name: "cashmere"
}

const MyAccount =  (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState(initialState);



            useEffect(()=>{
                   setLoading(true)
               axiosWithAuth()
               .get('https://school-social-worker.herokuapp.com/api/users')
               .then( res =>  {
                   console.log(res.data.find(item => item.email === props.email))
                   // let newData = await res.data.find(user => user.email === props.email)
                   // console.log(newData)
                    let newData = res.data.find(item => item.email === props.email)
                   setCurrentUser(newData)
                   //  setUserList(res.data)
                   setLoading(false)
                   
               })
               .catch(err => {
                   setLoading(false)
                   console.log(err)
               })
           },[])
    


          
          
          
          
          return (
              <>
        <h1>My Account</h1>


              {loading ?
                  <ScaleLoader
                  
                  size={150}
                  //size={"150px"} this also works
                  color={"#123abc"}
                  loading={props.isLoading}
                  />
              :
                <>
                    <h1>{currentUser.name}</h1>
                    <h2>Account type: {(currentUser.role_id === 1) ? <span>Admin</span> : <span>Social Worker</span>}</h2>
                    <h1>{currentUser.phone}</h1>
                    <h1>{currentUser.org_name}</h1>
                    </>
          }



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

