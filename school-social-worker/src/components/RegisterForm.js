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
                Name: 
                <Field name='name' type='text' placeHolder='Enter Name' />
                {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                )}
            </label>

            <label htmlFor='email'>
                Email: 
                <Field name='email' type='email' placeHolder='Enter Email' />
                {touched.email && errors.email && (
                    <p className="errors">{errors.email}</p>
                )}
            </label>

            <labelk htmlFor='password'>
                Password: 
                <Field name='password' type='password' placeHolder="Enter Password" />
                {touched.password && errors.password && (
                    <p className="errors">{errors.password}</p>
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
                    <p className="errors">{errors.status}</p>
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
            RegisterForm();

        })
        .catch ( err => console.log('Error on RegistrationForm: ', err));
    }

})(RegisterForm)

export default RegisterSubmit;
