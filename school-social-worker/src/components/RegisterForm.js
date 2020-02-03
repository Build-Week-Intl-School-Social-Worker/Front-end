import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const RegisterForm = () => {
    
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
                
            </label>

       </Form>
    )
}

export default RegisterForm;