import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { RedAlert } from './ErrorStyles';
import { useHistory } from 'react-router-dom';

export const LoginForm = ({props, values, errors, touched, status}) => {
    const [ credentials, setCredentials ] = useState({
        name: '',
        password: ''
    })
    
    let history = useHistory();


    return (   
        
            <Form>
                <label htmlFor='name'>
                    Username: 
                    <Field name='name' type='text' placeholder="Enter name"/>
                    {touched.name && errors.name && (<RedAlert className="errors">{errors.name}</RedAlert>)}
                </label>

                <label htmlFor="password">
                    Password: 
                    <Field name='password' type='password' placeholder="Enter Password"/>
                    {touched.password && errors.password && (<RedAlert className="errors">{errors.password}</RedAlert>)}
                </label>

                <button type="submit">Login</button>

            </Form>
        
        
    );
}

const LoginSubmit = withFormik ({
    mapPropsToValues(props) {
        return {
            email: props.name || "",
            password: props.password || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("name is required!"),
        password: Yup.string().required("Password is required!")
    }),

    handleSubmit( values, { props, setCredentials, resetForm}) {
        axios.post('https://school-social-worker.herokuapp.com/auth/login', values)
        .then ( response => {
            console.log('Success', response);
            // setCredentials(response.data);
            // resetForm();
            localStorage.setItem('token', response.data.token)
            props.history.push('/')
        })
        .catch ( err => console.log('Error on LoginForm: ', err));
    }

})(LoginForm)

export default LoginSubmit;