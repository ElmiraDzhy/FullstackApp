import React from 'react';
import {Field, Form, Formik} from "formik";
import {signIn} from "../../api/index";
import styles from "./SignIn.module.css";
import {connect} from "react-redux";
import {loginUserRequest} from "../../actions/actionCreators";

// todo add loginUserRequest
function SignIn (props) {
    const initialValues = {
        email: '',
        password: ''
    }
    const submitHandler = (values, actions) => {
        props.loginUserRequest(values);
    }


    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={initialValues}
        >
            {
                (formikProps) => (
                    <Form className={styles['form']}>
                        <Field className={styles['form-input']} name="email" placeholder="type email"/>
                        <Field className={styles['form-input']} name="password" placeholder="type pass"
                               type="password"/>
                        <button className={styles['btn']} type="submit">Submit</button>

                    </Form>
                )
            }


        </Formik>
    )
}

export default connect(null, {
    loginUserRequest
})(SignIn);