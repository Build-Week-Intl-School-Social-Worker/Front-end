import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { loadUserData } from '../actions';
import { ScaleLoader } from "react-spinners";
import styled from 'styled-components';
import profilePic from '../assets/profilepic.jpeg';

import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        // width: theme.spacing(7),
        // height: theme.spacing(7),
        width: 200,
        height: 200
      },
  }));



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

    const onChangeHandler = e => {
        e.preventDefault()

        setCurrentUser({
            ...currentUser,
            [e.target.name]: e.target.value
        })
    }

    const classes = useStyles();



        //     useEffect(()=>{
        //            setLoading(true)
        //        axiosWithAuth()
        //        .get('https://school-social-worker.herokuapp.com/api/users')
        //        .then( res =>  {
        //            console.log(res.data.find(item => item.email === props.email))
        //            // let newData = await res.data.find(user => user.email === props.email)
        //            // console.log(newData)
        //             let newData = res.data.find(item => item.email === props.email)
        //            setCurrentUser(newData)
        //            //  setUserList(res.data)
        //            setLoading(false)
        //        })
        //        .catch(err => {
        //            setLoading(false)
        //            console.log(err)
        //        })
        //    },[])
    
           const PageContainer = styled.div`
           width: 100%;
           display:flex;
           justify-content: space-around;
           flex-flow: row;
           `;

           const LeftSide = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            background: #52abd8c9;
            color: white;
            padding: 0px;
            margin: 50px;
            border-radius: 10px;
            `;
           const RightSide = styled.div`
            display: flex;
            flex-direction: column;
            width: 50%;
            background: #52abd8c9;
            color: white;
            padding: 0px;
            margin: 50px;
            border-radius: 10px;
            `;
            
            const ProfilePic = styled.img`
            border-radius: 100%;
            width: 100%;
            width: 100px;
            `;
          const Line = styled.div`
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 15px;
          `;
          const EditIconLine = styled.div`
            display: flex;
            width: 100%;
            justify-content: flex-end;
            padding: 15px;
          `;

          
          
          return (
              <>
              {loading ?
                  <ScaleLoader
                  
                  size={150}
                  //size={"150px"} this also works
                  color={"#123abc"}
                  loading={props.isLoading}
                  />
              :
              <PageContainer>

            <LeftSide >
                <h1>My Account</h1>
                <Avatar alt="Remy Sharp" src={profilePic} className={classes.large} />
                <Line><h4>Email: </h4><h3>{currentUser.email}</h3></Line>
                
            </LeftSide>
            <RightSide >
                
                    <Line><h4>Name: </h4><h3>{currentUser.name}</h3></Line>
                    <Line><h4>Account type: </h4>{(currentUser.role_id === 1) ? <h3>Admin</h3> : <h3>Social Worker</h3>}</Line>
                    <Line><h4>Phone: </h4><h3>{currentUser.phone}</h3></Line>
                    <Line><h4>Organization: </h4><h3>{currentUser.org_name}</h3></Line>

                <EditIconLine>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon className={classes.editIconStyle}/>
                    </Fab>
                </EditIconLine>
                
                </RightSide>
                
        </PageContainer>
                }
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

