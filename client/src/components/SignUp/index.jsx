import React from 'react';
import {Field, Form, Formik} from "formik";
import {signUp} from "../../api/index";

function SignUp (props) {
    const initialValues = {
        firstNme: '',
        lastName: '',
        email: '',
        password: '',
        birthday: ''
    }
    const submitHandler = (values, actions) => {
        console.log(values);
        signUp(values)
            .then(result => console.log(result))
    }

    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={initialValues}
        >
            {(formikProps) => (
                <Form>
                    <Field name="firstName" placeholder="Type your name"/>
                    <Field name="lastName" placeholder="Type your surname"/>
                    <Field name="email" placeholder="Type your email"/>
                    <Field name="password" placeholder="Type your password"/>
                    <Field name="birthday" placeholder="Type your birthday"/>
                    <button type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    )
}

export default SignUp;