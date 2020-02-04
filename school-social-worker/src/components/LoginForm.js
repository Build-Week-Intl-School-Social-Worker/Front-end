import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { RedAlert } from './ErrorStyles';
import { useHistory } from 'react-router-dom';
import {connect } from 'react-redux';
import { logInAction } from '../actions';
import { Link } from 'react-router-dom';

export const LoginForm = ({props, values, errors, touched, status}) => {
    const [ credentials, setCredentials ] = useState({
        email: '',
        password: ''
    })
    
    let history = useHistory();


    return (   
        <>
            <Form>
                <label htmlFor='email'>
                    Username: 
                    <Field name='email' type='text' placeholder="Enter name"/>
                    {touched.email && errors.email && (<RedAlert className="errors">{errors.email}</RedAlert>)}
                </label>

                <label htmlFor="password">
                    Password: 
                    <Field name='password' type='password' placeholder="Enter Password"/>
                    {touched.password && errors.password && (<RedAlert className="errors">{errors.password}</RedAlert>)}
                </label>

                <button type="submit">Login</button>

            </Form>
        <Link to="/register">Register</Link>
        </>
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
        email: Yup.string().required("name is required!"),
        password: Yup.string().required("Password is required!")
    }),

    handleSubmit( values, { props, setCredentials, resetForm}) {
        props.logInAction('https://school-social-worker.herokuapp.com/auth/login', values, props);
        // axios.post('https://school-social-worker.herokuapp.com/auth/login', values)
        // .then ( response => {
            // console.log('Success', response, props);
            // setCredentials(response.data);
            // resetForm();
            // localStorage.setItem('token', response.data.token)
            // props.history.push('/')
        // })
        // .catch ( err => console.log('Error on LoginForm: ', err));
    }

})(LoginForm)


const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        isLoggedIn: state.isLoggedIn
    }
}
export default connect(
    mapStateToProps,
    {logInAction}
)(LoginSubmit);