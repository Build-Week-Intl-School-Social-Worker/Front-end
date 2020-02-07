import React, { useState } from "react";
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import { loadCSS } from 'fg-loadcss';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { ButtonBox, AddEditBox, CardBox } from './StudentCardStyles';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

    root: {
        '& > span': {
          margin: theme.spacing(2),
        },
      },
  }));


export const StudentCard = props => {
    console.log(props.child);

    React.useEffect(() => {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
      }, []);

    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

const [snack, setSnack] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClicked = () => {
    setSnack(true);
  };

  const handleClosed = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack(false);
  };


    return (
        
        <div>
            <CardBox>
                <h3>Name: </h3>
                <p>{props.child.name} <br/>
                Age: {props.child.age}</p>
                <p>Representative: <br/>
                {props.child.child_rep}</p>
                <div>
                <Button variant="contained" onClick={() => handleOpen()}>Expand</Button>
                </div>
            </CardBox>

            <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
            <div style={modalStyle} className={classes.paper}>
                <h3 id='simpe-modal-title'>Name: {props.child.name}</h3>
                <div>
                    <p>Age: {props.child.age}</p>
                    <p>Grade: {props.child.grade}</p>
                    {/* Image Here */}
                    <p>Bio: {props.child.bio}</p>
                    <p>Status: {props.child.status}</p>
                    <p>Insurance Card: {props.child.insurance_card}</p>
                    <p>Card Expiration Date:  
                        <Moment format="YYYY-MM-DD"> 
                        {props.child.expire_date}
                        </Moment>
                    </p>
                    <p>Birth Certificate: {props.child.birth_cert}</p>
                    <p>Special Needs: {props.child.special_needs}</p>
                    <div>
                        <p>Representative: {props.child.child_rep}</p>
                        <p>Rep. Phone: {props.child.child_rep_phone}</p>
                        <p>Rep. Email: {props.child.child_rep_email}</p>
                    </div>
                </div>
                <ButtonBox>
                    <AddEditBox>
                      <Fab   className={classes.absolute}>
                          <Icon className="fa fa-plus-circle" style={{ color: green[500], fontSize: 40}} onClick= {() => handleClicked()}/>
                      </Fab>
                        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snack}
        autoHideDuration={6000}
        onClose={handleClosed}
        message="Success!"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClosed}>
              
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClosed}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

                    <Button variant="contained" color="primary">Edit</Button>
                    </AddEditBox>
                    <Button variant="contained" color="secondary" onClick= {() => handleClicked()}>Delete</Button>

                </ButtonBox>
            </div>

  
            </Modal>
        </div>
    );
}

