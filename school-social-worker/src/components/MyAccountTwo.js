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
import TextField from '@material-ui/core/TextField';







const initialState = {
    id: 21,
role_id: 1,
name: "shawn initial state two",
email: "shawn@test.com",
phone: "1231231234",
password: "$2a$12$FxDqJN9GMfulDUUmhEARbe3OOiSbamZSRnMoZhuCYXBMG9BqCxw5a",
org_name: "cashmere"
}

const MyAccount =  (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState(initialState);
    const [ editing, setEditing ] = useState(false);
    const [ org, setOrg ] = useState('cashiemashie');
    const [height, setHeight] = useState('');



    const orgHandler = e => {
        setOrg(e.target.value)
    }

    const editToggle = () => {
        setEditing(!editing)
    }



    
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

              <div>

            <LeftSide >
                <h1>My Account</h1>
                <Avatar alt="Remy Sharp" src={profilePic} />
                <Line><h4>Email: </h4><h3>{currentUser.email}</h3></Line>
            </LeftSide>
            <div >




                    <h4>Organization: </h4><h3><input type='text' id="org_name" name="org_name" value={org} onChange={orgHandler}   /> </h3>


                    
            <EditIconLine>
                    <Fab onClick={editToggle} color="secondary" aria-label="edit">
                        <EditIcon  />
                    </Fab>
                </EditIconLine>
                
                </div>
                
        </div>

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

