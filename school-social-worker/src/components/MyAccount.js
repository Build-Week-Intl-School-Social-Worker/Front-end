import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { loadUserData } from '../actions';
import { ScaleLoader } from "react-spinners";
import profilePic from '../assets/profilepic.jpeg';

import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

//Snackbar Start
    import Button from '@material-ui/core/Button';
    import Snackbar from '@material-ui/core/Snackbar';
    import MuiAlert from '@material-ui/lab/Alert';
//Snackbar End

import { PageContainer,
    LeftSide,
    RightSide,
    ProfilePic,
    Line,
    EditIconLine} from './myAccountStyles';


    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
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



// const initialState = {
//     id: 21,
// role_id: 1,
// name: "shawn initial state",
// email: "shawn@test.com",
// phone: "1231231234",
// password: "$2a$12$FxDqJN9GMfulDUUmhEARbe3OOiSbamZSRnMoZhuCYXBMG9BqCxw5a",
// org_name: "cashmere"
// }

const MyAccount =  (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState({});
    const [ editing, setEditing ] = useState(false);
    const [ org, setOrg ] = useState('cashiemashie');

    // Snackbar start
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
        setOpen(true);
        };
    
        const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
        };
    // Snackbar End

    const onChangeHandler = e => {
        e.preventDefault()
        setCurrentUser({
            ...currentUser,
            [e.target.name]: e.target.value
        })
    }

    const orgHandler = e => {
        setOrg(e.target.value)
    }

    const editToggle = () => {
        setEditing(!editing)
    }

    const submitEditHandler = () => {
        axiosWithAuth()
        .put(`https://school-social-worker.herokuapp.com/api/users/${props.id}`, currentUser)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        setEditing(!editing)
    }

    const classes = useStyles();

    useEffect(() => {
        setCurrentUser({
            id: props.id,
            role_id: props.role_id,
            name: props.name,
            email: props.email,
            phone: props.phone,
            org_name: props.org_name
        })
    },[props.stateIsLoading])





        //     useEffect(()=>{
        //            setLoading(true)
        //        axiosWithAuth()
        //        .get('https://school-social-worker.herokuapp.com/api/users')
        //        .then( res =>  {
        //            console.log(res)
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

            </LeftSide>
            <RightSide >
            <form className={classes.root} noValidate autoComplete="off">
                    <Line><h4>Name: </h4><h3>{editing ? <TextField onChange={onChangeHandler} name="name" value={currentUser.name} id="s-basic"  /> : currentUser.name}</h3></Line>
                    <Line><h4>Account type: </h4>{(currentUser.role_id === 1) ? <h3>Admin</h3> : <h3>Social Worker</h3>}</Line>
                    <Line><h4>Phone: </h4><h3>{editing ? <TextField onChange={onChangeHandler} name="phone" value={currentUser.phone} id="d-basic"  /> : currentUser.phone}</h3></Line>

                    <Line><h4>Organization: </h4><h3>{editing ? <TextField type='text' id="org_name" name="org_name" onChange={onChangeHandler} value={currentUser.org_name}   /> : currentUser.org_name}</h3></Line>


                    
                </form>
                <EditIconLine>
                    
                    {!editing ? <Fab onClick={editToggle} color="secondary" aria-label="edit">
                        <EditIcon  className={classes.editIconStyle}/>
                    </Fab> : ''}
                    
                {editing ? 
                    <>
                    <Fab onClick={editToggle}  className={classes.absolute}>
                        <ClearIcon />
                    </Fab>
                    <Fab onClick={submitEditHandler} color="primary" className={classes.absolute}>
                        <AddIcon />
                    </Fab>
                    </>
                     : ''}
                </EditIconLine>
                
                </RightSide>
                {/* SNACKBAR STUFF */}
                <div className={classes.root}>
                <Button variant="outlined" onClick={handleClick}>
                    Open success snackbar
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                    This is a success message!
                    </Alert>
                </Snackbar>
                <Alert severity="error">This is an error message!</Alert>
                <Alert severity="warning">This is a warning message!</Alert>
                <Alert severity="info">This is an information message!</Alert>
                <Alert severity="success">This is a success message!</Alert>
                </div>
        </PageContainer>
                }

 </>
    )
}



const mapStateToProps = state => {
    return {
        id: state.id,
        role_id: state.role_id,
        email: state.email,
        name: state.name,
        org_name: state.org_name,
        phone: state.phone,
        stateIsLoading: state.isLoading
    }
}

export default connect(
    mapStateToProps,
    {loadUserData}
)(MyAccount)

