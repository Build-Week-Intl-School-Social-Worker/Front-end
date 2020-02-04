import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { RedAlert } from './ErrorStyles';


const RegisterForm = ({values, errors, touched, status}) => {
    
    const  [ newUser, setNewUser ] = useState({
        name: '',
        email: '',
        password: '',
        status: ''
    })

    return (
       <Form>

            <label htmlFor='name'> 
                Name: 
                <Field name='name' type='text' placeHolder='Enter Name' />
                {touched.name && errors.name && (
                    <RedAlert className="errors">{errors.name}</RedAlert>
                )}
            </label>

            <label htmlFor='email'>
                Email: 
                <Field name='email' type='email' placeHolder='Enter Email' />
                {touched.email && errors.email && (
                    <RedAlert className="errors">{errors.email}</RedAlert>
                )}
            </label>

            <labelk htmlFor='password'>
                Password: 
                <Field name='password' type='password' placeHolder="Enter Password" />
                {touched.password && errors.password && (
                    <RedAlert className="errors">{errors.password}</RedAlert>
                )}
            </labelk>

            <label htmlFor="status">
                Role: 
                <Field as="select" name="select">
                    <option value='null'>Select</option>
                    <option value='admin'>Administrator</option>
                    <option value='worker'>Social Worker</option>
                </Field>
                {touched.select && errors.status && (
                    <RedAlert className="errors">{errors.status}</RedAlert>
                )}
            </label>

            <button type="submit">Register</button>

       </Form>
    );
}

const RegisterSubmit = withFormik ({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            status: props.status || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required!"),
        email: Yup.string().required("Email is required!"),
        password: Yup.string().required("Password is required!"),
        status: Yup.string().required("Role is required!")
    }),

    handleSubmit( values, { setNewUser, resetForm }) {
        axios.post('https://regres.in/api/users', values)
        .then ( response => {
            console.log('Success', response);
            setNewUser(response.data);
            resetForm();

        })
        .catch ( err => console.log('Error on RegistrationForm: ', err));
    }

})(RegisterForm)

export default RegisterSubmit;
