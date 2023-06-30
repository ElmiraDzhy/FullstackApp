import React from 'react';
import {Field, Form, Formik} from "formik";
import {signIn} from "../../api/index";

function SignIn (props) {
    const initialValues = {
        email: '',
        password: ''
    }
    const submitHandler = (values, actions) => {
        signIn(values)
            .then(result => console.log(result));
    }

    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={initialValues}
        >
            {
                (formikProps) => (
                    <Form>
                        <Field name="email" placeholder="type email"/>
                        <Field name="password" placeholder="type pass"/>
                        <button type="submit">Submit</button>

                    </Form>
                )
            }


        </Formik>
    )
}

export default SignIn;