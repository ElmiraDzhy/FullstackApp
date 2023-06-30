import React from 'react';
import {Field, Form, Formik} from "formik";
import {signIn} from "../../api/index";
import styles from "./SignIn.module.css";

function SignIn (props) {
    const initialValues = {
        email: '',
        password: ''
    }
    const submitHandler = (values, actions) => {
        signIn(values)
            .then(({data: {data}}) => console.log(data))

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
                        <Field className={styles['form-input']} name="password" placeholder="type pass"/>
                        <button className={styles['btn']} type="submit">Submit</button>

                    </Form>
                )
            }


        </Formik>
    )
}

export default SignIn;