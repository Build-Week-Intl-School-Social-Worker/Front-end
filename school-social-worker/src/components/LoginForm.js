import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export const LoginForm = ({values, errors, touched, status}) => {
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    // useEffect(() => {
        
    // })

    return (   
        
            <Form>
                <label htmlFor='username'>
                    Username: 
                    <Field name='username' type='text' placeHolder="Enter Username"/>
                    {/* {touched.userName && errors.userName && (<p className="errors">{errors.userName}</p>)} */}
                </label>

                <label htmlFor="password">
                    Password: 
                    <Field name='password' type='password' placeHolder="Enter Password"/>
                    {/* {touched.password && errors.password && (<p className="errors">{errors.password}</p>)} */}
                </label>

                <button type="submit">Login</button>

            </Form>
        
        
    );
}

const LoginSubmit = withFormik ({
    mapPropsToValues(props) {
        return {
            email: props.username || "",
            password: props.password || ""
        };
    },

    // validationSchema: Yup.object().shape({
    //     userName: Yup.string().required("Username is required!"),
    //     userPassword: Yup.string().required("Password is required!")
    // }),

    handleSubmit( values, { setCredentials}) {
        axios.post('https://regres.in/api/users', values)
        .then ( response => {
            console.log('Success', response);
            setCredentials(response.data);
            
        })
        .catch ( err => console.log('Error:', err));
    }

})(LoginForm)

export default LoginSubmit;