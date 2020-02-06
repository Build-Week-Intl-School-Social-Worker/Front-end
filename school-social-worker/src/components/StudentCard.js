import React from "react";
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
  }));


export const StudentCard = props => {
    console.log(props.child);


    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        
        <div>
            <div>
                <h3>Name: {props.child.name}</h3>
                <p>Age: {props.child.age}</p>
                <p>Representative: {props.child.child_rep}</p>
                <div>
                <Button variant="contained" onClick={handleOpen}>Expand</Button>
                </div>
            </div>

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
                <div>
                    <Button variant="contained" color="primary">Edit</Button>
                    <Button variant="contained" color="secondary">Delete</Button>
                </div>
            </div>
            </Modal>
        </div>
    );
}

