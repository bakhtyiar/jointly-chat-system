import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {TextField, Button} from "@mui/material";
import styles from "@/styles/login.module.scss"
import PromoLayout from "@/components/promoLayout/promoLayout";

const schema = Yup.object({
    login: Yup.string().min(3).required(),
    password: Yup.string().min(3).required(),
    rememberSession: Yup.boolean()
})
//todo: implement submit logic
const Login = () => {
    return (
        <>
            <PromoLayout>
                <main>
                    <Formik
                        initialValues={{login: '', password: ''}}
                        validateOnBlur
                        validationSchema={schema}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              isSubmitting,
                              handleChange,
                              handleBlur,
                              values,
                              errors,
                              touched
                          }) => (
                            <Form className={styles["form"]}>
                                <h1 className={styles["form-header"]}>Login</h1>
                                <TextField
                                    type="text"
                                    label="Login"
                                    name="login"
                                    value={values.login}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.login && errors.login)}
                                    helperText={touched.login && String(errors.login)}
                                />
                                <TextField
                                    type="password"
                                    label="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && String(errors.password)}
                                />
                                <Button type="submit" variant={"contained"} disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </main>
            </PromoLayout>
        </>
    );
};

export default Login;