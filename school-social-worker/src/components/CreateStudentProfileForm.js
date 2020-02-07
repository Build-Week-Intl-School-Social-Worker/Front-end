import React, { useState } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { RedAlert } from './ErrorStyles';

import { CreateStudent, FormSection, FormRow, FormCol } from './CreateStudentStyles.js';

import { ScaleLoader } from "react-spinners";


const CreateStudentProfile = ({value, errors, touched, status}) => {
    const [loading, setLoading] = useState(false);
    
    const history = useHistory();
    const loadingHandler = () => {
        setLoading(true)
    }

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
        special_needs: '',
        child_rep: '',
        child_rep_phone: '',
        child_rep_email: ''
    })

    return (
        
        <CreateStudent>
        <Form>
            <h2>CreateStudentProfile Form Component</h2>
            <FormSection>
                <FormRow>
                    <label htmlFor='name'>
                        Name:
                        <Field name='name' type='text' placeHolder='Enter Name' />
                        {touched.name && errors.name && (<RedAlert className="errors">{errors.name}</RedAlert>)}
                    </label>
                        
                    <label htmlFor='age'>
                        Age:
                        <Field name='age' type='text' placeHolder='Enter Age' />
                        {touched.age && errors.age && (<RedAlert className="errors">{errors.age}</RedAlert>)}
                    </label>

                    <label htmlFor='grade'>
                        Grade:
                        <Field name='grade' type='text' placeHolder='Enter Grade' />
                        {touched.grade && errors.grade && (<RedAlert className="errors">{errors.grade}</RedAlert>)}
                    </label>
                </FormRow>


                {/* <label htmlFor='image'>
                    Name:
                    <Field name='image' type='text' placeHolder='Enter Image' />
                </label> */}
                <FormSection>
                    
                    <label htmlFor='bio'>
                        Bio:
                        <Field name='bio' type='text' placeHolder='Enter Bio' />
                        {touched.bio && errors.bio && (<RedAlert className="errors">{errors.bio}</RedAlert>)}
                    </label>
                    
                    
                    <label htmlFor='status'>
                        Status:
                        <Field name='status' type='text' placeHolder='Enter Status' />
                        {touched.status && errors.status && (<RedAlert className="errors">{errors.status}</RedAlert>)}
                    </label>
                    
                </FormSection>
            </FormSection>

            <FormSection>
                <FormRow>
                    <FormCol>
                        <FormRow>
                        <label htmlFor='insurance_card'>
                            Insurance Card:
                            <Field as='select' name='insurance_card' >
                                <option value={false}>No</option>
                                <option value={true}>Yes</option> 
                            </Field>
                            {touched.insurance_card && errors.insurance_card && (<RedAlert className="errors">{errors.insurance_card}</RedAlert>)}
                        </label>
                        </FormRow>
                        
                        <FormRow>
                            <label htmlFor='birth_cert'>
                            Birth Certificate:
                            <Field as='select' name='birth_cert'>
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </Field>
                            {touched.birth_cert && errors.birth_cert && (<RedAlert className="errors">{errors.birth_cert}</RedAlert>)}    
                            </label>
                        </FormRow>
                    </FormCol>

                    <FormCol>
                        <FormRow>
                    <label htmlFor='expire_date'>
                        Expiration Date:
                        <Field name='expire_date' type='text' placeHolder='Enter Expiration Date' />
                        {touched.expire_date && errors.expire_date && (<RedAlert className="errors">{errors.expire_date}</RedAlert>)}
                    </label>
                    </FormRow>

                        <FormRow>
                        <label htmlFor='special_needs'>
                            Special Needs:
                            <Field name='special_needs' type='text' placeHolder='Enter Special Needs' />
                            {touched.special_needs && errors.special_needs && (<RedAlert className="errors">{errors.special_needs}</RedAlert>)}
                        </label>
                        </FormRow>
                    </FormCol>
                </FormRow>
            </FormSection>

            <FormSection>
                <FormCol>
                    <FormRow>
                        <label htmlFor='child_rep'>
                            Child's Representative:
                            <Field name='child_rep' type='text' placeHolder='Enter Representative' />
                            {touched.child_rep && errors.child_rep && (<RedAlert className="errors">{errors.child_rep}</RedAlert>)}
                        </label>                    
                    </FormRow>
                
                    <FormRow>
                        <label htmlFor='child_rep_phone'>
                            Representative Phone:
                            <Field name='child_rep_phone' type='text' placeHolder='Enter Rep Phone' />
                            {touched.child_rep_phone && errors.child_rep_phone && (<RedAlert className="errors">{errors.child_rep_phone}</RedAlert>)}
                        </label>
                    </FormRow>
           
                    <FormRow>
                        <label htmlFor='child_rep_email'>
                            Representative Email:
                            <Field name='child_rep_email' type='text' placeHolder='Enter Rep Email' />
                            {touched.child_rep_email && errors.child_rep_email && (<RedAlert className="errors">{errors.child_rep_email}</RedAlert>)}
                        </label>
                    </FormRow>
                </FormCol>
            </FormSection>

            <button onClick={loadingHandler} type="submit">Create</button>
            <ScaleLoader
            
            size={150}
            //size={"150px"} this also works
            color={"#123abc"}
            loading={loading}
            />

        </Form>
        </CreateStudent>
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
            special_needs: props.special_needs || '',
            child_rep: props.child_rep || '',
            child_rep_phone: props.child_rep_phone || '',
            child_rep_email: props.child_rep_email || ''
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("name is required!"),
        age: Yup.string().required("Age is required!"),
        grade: Yup.string().required("Grade is required!"),
        bio: Yup.string().required("Bio is required!"),
        status: Yup.string().required("Status is required!"),
        insurance_card: Yup.string().required("Insurance is required!"),
        expire_date: Yup.string().required("Expire date is required!"),
        birth_cert: Yup.string().required("Birth Cert is required!"),
        special_needs: Yup.string().required("Sepcial needs is required!"),
        child_rep: Yup.string().required("Child rep is required!"),
        child_rep_phone: Yup.string().required("Rep phone is required!"),
        child_rep_email: Yup.string().required("Rep email is required!")
    }),

    handleSubmit(values, {resetForm,   ...props}) {
        axiosWithAuth()
        .post('https://school-social-worker.herokuapp.com/api/students', values)
        .then( response => {

            console.log('Created Student Success: ', response);
            props.props.history.push('/')
        })
        .catch ( err => {
            
            console.log('Failed to creat student: ', err)
        });
        
    }

})(CreateStudentProfile)

export default CreateStudentSubmit;