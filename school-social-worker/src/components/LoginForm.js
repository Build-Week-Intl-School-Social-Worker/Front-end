import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

export const LoginForm = () => {
    const [ credentials, setCredentials ] = setState({
        email: '',
        password: ''
    })

    return (

        <h2>Login:</h2> 
        <div>
            <Formik>
                
            </Formik>
}
        </div>
    
}

export default LoginForm;