import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions/index';
import { ScaleLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Link } from 'react-router-dom';
import { RedAlert } from './ErrorStyles';
import { RegisterBox } from './RegisterFormStyles'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const RegisterForm = ({ values, errors, touched, status, ...props}) => {
    
    const  [ newUser, setNewUser ] = useState({
        name: '',
        email: '',
        password: '',
        status: ''
    })

    return (
        <>
        <RegisterBox>
       <Form>
           
            <label htmlFor='name'> 
                Name: 
                <Field name='name' type='text' placeHolder='Enter Name' />
                {touched.name && errors.name && (
                    <RedAlert className="errors">{errors.name}</RedAlert>
                )}
            </label>

            <label htmlFor='role_id'> 
                role_id: 
                <Field name='role_id' type='text' placeHolder='role_id' />
                {touched.role_id && errors.role_id && (
                    <RedAlert className="errors">{errors.role_id}</RedAlert>
                )}
            </label>

            <label htmlFor='phone'> 
                phone: 
                <Field name='phone' type='text' placeHolder='phone' />
                {touched.phone && errors.phone && (
                    <RedAlert className="errors">{errors.phone}</RedAlert>
                )}
            </label>

            <label htmlFor='org_name'> 
                org_name: 
                <Field name='org_name' type='text' placeHolder='org_name' />
                {touched.org_name && errors.org_name && (
                    <RedAlert className="errors">{errors.org_name}</RedAlert>
                )}
            </label>

            <label htmlFor='email'>
                Email: 
                <Field name='email' type='email' placeHolder='Enter Email' />
                {touched.email && errors.email && (
                    <RedAlert className="errors">{errors.email}</RedAlert>
                )}
            </label>

            <label htmlFor='password'>
                Password: 
                <Field name='password' type='password' placeHolder="Enter Password" />
                {touched.password && errors.password && (
                    <RedAlert className="errors">{errors.password}</RedAlert>
                )}
            </label>

            {/* <label htmlFor="status">
                Role: 
                <Field as="select" name="select">
                    <option value='null'>Select</option>
                    <option value='admin'>Administrator</option>
                    <option value='worker'>Social Worker</option>
                </Field>
                {touched.select && errors.status && (
                    <p className="errors">{errors.status}</p>
                )}
            </label> */}
            {props.isLoading ?
                <ScaleLoader
                css={override}
                size={150}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={props.isLoading}
                />
            :
                <button type="submit">Register</button>
            }

       </Form>
       </RegisterBox>
       <Link to="/login">Login</Link>
       </>
    );
}

const RegisterSubmit = withFormik ({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            role_id: props.role_id || "",
            phone: props.phone || "",
            org_name: props.org_name || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required!"),
        role_id: Yup.string().required("Role is required!"),
        phone: Yup.string().required("Phone is required!"),
        org_name: Yup.string().required("Org name is required!"),
        email: Yup.string().required("Email is required!"),
        password: Yup.string().required("Password is required!"),
        // status: Yup.string().required("Role is required!")
    }),

    handleSubmit( values, {props, setNewUser, resetForm }) {

        props.createUser('https://school-social-worker.herokuapp.com/auth/register', values, props )
        // axios.post('https://school-social-worker.herokuapp.com/auth/register', values)
        // .then ( response => {
        //     console.log('Success', response);
        //     // setNewUser(response.data);
        //     // resetForm();
        //     props.history.push("/login")

        // })
        // .catch ( err => console.log('Error on RegistrationForm: ', err));
    }

})(RegisterForm)

// export default RegisterSubmit;

const mapStateToProps = state => {
    return {
        studentList: state.studentList,
        isLoading: state.isLoading
    }
}
export default connect(
    mapStateToProps,
    {createUser}
)(RegisterSubmit);