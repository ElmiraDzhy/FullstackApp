import React from 'react';
import {Field, Form, Formik} from "formik";
import {signUp} from "../../api/index";
import {format} from "date-fns";
import styles from './SignUp.module.css';
import {connect} from "react-redux";
import {signUpUserRequest} from "../../actions/actionCreators";

//todo add signUpUserRequest
function SignUp (props) {
    const initialValues = {
        firstNme: '',
        lastName: '',
        email: '',
        password: '',
        birthday: format(new Date(), 'yyyy-MM-dd')
    }
    const submitHandler = (values, actions) => {
        props.signUpUserRequest(values);
    }

    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={initialValues}
        >
            {(formikProps) => (
                <Form className={styles['form']}>
                    <Field className={styles['form-input']} name="firstName" placeholder="Type your name"/>
                    <Field className={styles['form-input']} name="lastName" placeholder="Type your surname"/>
                    <Field className={styles['form-input']} name="email" placeholder="Type your email"/>
                    <Field className={styles['form-input']} name="password" placeholder="Type your password"/>
                    <Field className={styles['form-input']} name="birthday" placeholder="Type your birthday"
                           type="date"/>
                    <Field name={'avatar'} type={'file'}/>
                    <button className={styles['btn']} type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default connect(null, {signUpUserRequest})(SignUp);