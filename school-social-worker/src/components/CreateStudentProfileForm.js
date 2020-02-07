import React, { useState } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
// import axios from 'axios';
// import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { DatePicker } from 'formik-material-ui-pickers';
import { TextField, Select } from 'formik-material-ui';


// import { makeStyles } from '@material-ui/core/styles';




import { CreateStudent, FormSection, FormRow, FormCol } from './CreateStudentStyles.js';

import { ScaleLoader } from "react-spinners";
// import { red } from '@material-ui/core/colors';




const CreateStudentProfile = ({value, errors, touched, status}) => {
    const [loading, setLoading] = useState(false);

    
    const history = useHistory();
    const loadingHandler = () => {
        setLoading(!loading)
    }

    const [ student, newStudent ] = useState({
        name: '',
        age: 0,
        grade: '',
        image: null,
        bio: '',
        status: '',
        insurance_card: false,
        expire_date: '',
        birth_cert: false,
        special_needs: null,
        child_rep: '',
        child_rep_phone: '',
        child_rep_email: ''
    })

    return (
        
        <CreateStudent>
        <Form>
                    
            <h2> Create Student Profile </h2>
            <FormSection>
                <FormRow>
                    <label htmlFor='name'>
                        
                        <TextField id="standard-basic" label="Name" name='name'  type='text' placeHolder='Enter Name'  />
                    </label>
                        
                    <label htmlFor='age'>
                        
                        <TextField name='age' type='text' placeHolder='Enter Age' label="Enter Age"  />
                    </label>

                    <label htmlFor='grade'>
                        




                        <InputLabel htmlFor='grade'>Grade:  </InputLabel>
                            
                        <Select inputProps={{id: 'grade',}} label="Insurance Card:" as='select' name='grade' >
                            <MenuItem value={'k'}>K</MenuItem>
                            <MenuItem value={1}>1</MenuItem> 
                            <MenuItem value={2}>2</MenuItem> 
                            <MenuItem value={3}>3</MenuItem> 
                            <MenuItem value={4}>4</MenuItem> 
                            <MenuItem value={5}>5</MenuItem> 
                            <MenuItem value={6}>6</MenuItem> 
                            <MenuItem value={7}>7</MenuItem> 
                            <MenuItem value={8}>8</MenuItem> 
                            <MenuItem value={9}>9</MenuItem> 
                            <MenuItem value={10}>10</MenuItem> 
                            <MenuItem value={11}>11</MenuItem> 
                            <MenuItem value={12}>12</MenuItem> 
                        </Select>




                    </label>
                </FormRow>
            </FormSection>

                {/* <label htmlFor='image'>
                    Name:
                    <Field name='image' type='text' placeHolder='Enter Image' />
                </label> */}
                <FormSection>
                    
                    <label htmlFor='bio'>
                        
                        <TextField placeholder='Bio:' label="Bio:" name='bio' type='text' placeHolder='Enter Bio' />
                    </label>
                    
                    
                    <label htmlFor='status'>
                        
                        <TextField placeholder='Status:' label="Status:" name='status' type='text' placeHolder='Enter Status' />
                    </label>
                    
                </FormSection>

            <FormSection>
  
                    
                        <FormRow>
                        <InputLabel htmlFor='insurance_card'>Insurance Card: 
                            
                            <Select inputProps={{id: 'insurance_card',}} label="Insurance Card:" as='select' name='insurance_card' >
                                <MenuItem value={false}>No</MenuItem>
                                <MenuItem value={true}>Yes</MenuItem> 
                            </Select>
                            </InputLabel>


                        
                        <TextField placeholder='Expiration Date:' label="Expiration Date:" name='expire_date' type='text' placeHolder='Enter Expiration Date' />
                        </FormRow>
                        
                        <FormRow>

                            <InputLabel htmlFor="birth-cert">Birth Certificate: 
                            <Select placeholder='Birth Certificate:' label="Birth Certificate:" as='select' name='birth_cert' inputProps={{id: 'birth-cert',}}>
                                <MenuItem value={false}>No</MenuItem>
                                <MenuItem value={true}>Yes</MenuItem>
                            </Select>    
                            </InputLabel>

                    




                        <label htmlFor='special_needs'>
                            
                            <TextField placeholder='Special Needs:' label="Special Needs:" name='special_needs' type='text' placeHolder='Enter Special Needs' />
                        </label>
                        </FormRow>


            </FormSection>

            <FormSection>

                    <FormRow>
                        <label htmlFor='child_rep'>
                            
                            <TextField label="Representative:" name='child_rep' type='text'  />
                        </label>                    

                

                        <label htmlFor='child_rep_phone'>
                            
                            <TextField  label="Representative Phone:" name='child_rep_phone' type='text' />
                        </label>


                        <label htmlFor='child_rep_email'>
                            
                            <TextField  label="Representative Email:" name='child_rep_email' type='text' />
                        </label>
                    </FormRow>

            </FormSection>

            <button onClick={loadingHandler} type="submit">Create</button>
            <ScaleLoader
            
            size={150}
            //size={"150px"} this also works
            color={"#123abc"}
            loading={loading}
            />

        </Form>
        </CreateStudent>
    )
}

const CreateStudentSubmit = withFormik({
    mapPropsToValues(props){
        return {
            name: props.name || '',
            age: props.age || '',
            grade: props.age || '',
            image: null,
            bio: props.bio || '',
            status: props.status || '',
            insurance_card: props.insurance_card || false,
            expire_date: props.expire_date || '',
            birth_cert: props.birth_cert || false,
            special_needs: props.special_needs || null,
            child_rep: props.child_rep || '',
            child_rep_phone: props.child_rep_phone || '',
            child_rep_email: props.child_rep_email || ''
        };
    },

    handleSubmit(values,  {resetForm, ...props}) {
        axiosWithAuth()
        .post('https://school-social-worker.herokuapp.com/api/students', values)
        .then( response => {

            console.log('Created Student Success: ', response);
            props.props.history.push('/')
        })
        .catch ( err => {
            console.log('Failed to creat student: ', err.message)
            console.log(props)
            // props.loadingHandler()
        });
        
    }

})(CreateStudentProfile)

export default CreateStudentSubmit;