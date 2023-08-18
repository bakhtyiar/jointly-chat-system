import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {TextField, Button} from "@mui/material";
import styles from "@/styles/login.module.scss"
import PromoLayout from "@/components/PromoLayout/PromoLayout";

const schema = Yup.object({
    email: Yup.string().email().required(),
    login: Yup.string().min(3).required(),
    password: Yup.string().min(3).required(),
})
//todo: implement submit logic
const Register = () => {
    return (
        <>
            <PromoLayout>
                <main>
                    <Formik
                        initialValues={{email: '', login: '', password: ''}}
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
                                <h1 className={styles["form-AppHeader"]}>Register</h1>
                                <TextField
                                    type="email"
                                    label="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                                <TextField
                                    type="text"
                                    label="Login"
                                    name="login"
                                    value={values.login}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.login && errors.login)}
                                    helperText={touched.login && errors.login}
                                />
                                <TextField
                                    type="password"
                                    label="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
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

export default Register;