import React, { useState } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const CreateStudentProfile = ({value, errors, touched, status}) => {

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
        
        
        <Form>
            <h2>CreateStudentProfile Form Component</h2>
            <label htmlFor='name'>
                Name:
                <Field name='name' type='text' placeHolder='Enter Name' />
            </label>

            <label htmlFor='age'>
                Age:
                <Field name='age' type='text' placeHolder='Enter Age' />
            </label>

            <label htmlFor='grade'>
                Grade:
                <Field name='grade' type='text' placeHolder='Enter Grade' />
            </label>


            {/* <label htmlFor='image'>
                Name:
                <Field name='image' type='text' placeHolder='Enter Image' />
            </label> */}

            <label htmlFor='bio'>
                Bio:
                <Field name='bio' type='text' placeHolder='Enter Bio' />
            </label>

            <label htmlFor='status'>
                Status:
                <Field name='status' type='text' placeHolder='Enter Status' />
            </label>

            <label htmlFor='insurance_card'>
                Insurance Card:
                <Field as='select' name='insurance_card' >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option> 
                </Field>
            </label>

            <label htmlFor='expire_date'>
                Expiration Date:
                <Field name='expire_date' type='text' placeHolder='Enter Expiration Date' />
            </label>

            <label htmlFor='birth_cert'>
                Birth Certificate:
                <Field as='select' name='birth_cert'>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </Field>    
            </label>

            <label htmlFor='special_needs'>
                Special Needs:
                <Field name='special_needs' type='text' placeHolder='Enter Special Needs' />
            </label>

            <label htmlFor='child_rep'>
                Child's Representative:
                <Field name='child_rep' type='text' placeHolder='Enter Representative' />
            </label>

            <label htmlFor='child_rep_phone'>
                Representative Phone:
                <Field name='child_rep_phone' type='text' placeHolder='Enter Rep Phone' />
            </label>
            <label htmlFor='child_rep_email'>
                Representative Email:
                <Field name='child_rep_email' type='text' placeHolder='Enter Rep Email' />
            </label>

            <button type="submit">Create</button>

        </Form>
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

    handleSubmit(values, {props, resetForm}) {
        axiosWithAuth()
        .post('https://school-social-worker.herokuapp.com/api/students', values)
        .then( response => {
            console.log('Created Student Success: ', response);
        })
        .catch ( err => console.log('Failed to creat student: ', err));
    }

})(CreateStudentProfile)

export default CreateStudentSubmit;