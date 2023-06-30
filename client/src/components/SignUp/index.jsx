import React from 'react';
import {Field, Form, Formik} from "formik";
import {signUp} from "../../api/index";
import {format} from "date-fns";

function SignUp (props) {
    const initialValues = {
        firstNme: '',
        lastName: '',
        email: '',
        password: '',
        birthday: format(new Date(), 'yyyy-MM-dd')
    }
    const submitHandler = (values, actions) => {
        console.log(values);
        signUp(values)
            .then(({data: {data}}) => console.log(data))
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
                    <Field name="birthday" placeholder="Type your birthday" type="date"/>
                    <button type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    )
}

export default SignUp;