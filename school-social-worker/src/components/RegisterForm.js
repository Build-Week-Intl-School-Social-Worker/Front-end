import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

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
                <Field name='name' type='text' placeHolder='Enter Name' />
            </label>

            <label htmlFor='email'>
                <Field name='email' type='email' placeHolder='Enter Email' />
            </label>

            <labelk htmlFor='password'>
                <Field name='passowrd' type='password' placeHolder="Enter Password" />
            </labelk>

            <label htmlFor="status">
                <Field
                    name='status' type='radio'
                />
            </label>

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

    handleSubmit( values, { setNewUser }) {
        axios.post('https://regres.in/api/users', values)
        .then ( response => {
            console.log('Success', response);
            setNewUser(response.data);
        })
        .catch ( err => console.log('Error on RegistrationForm: ', err));
    }

})(RegisterForm)

export default RegisterSubmit;