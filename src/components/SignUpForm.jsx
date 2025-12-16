import { Formik, Form, Field, ErrorMessage } from "formik";
import '../scss/AuthForm.scss'
import { TextField, Button } from "@mui/material";
import {registrationSchema} from "../features.auth/authValidation";

export default function SignUpForm({ onSubmit, error }) {
    return (
        <div id="sign-up-form">
            <Formik
                initialValues={{ login: "", password: "", passwordSecond: "" }}
                validationSchema={registrationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    onSubmit(values.login, values.password, values.passwordSecond);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <Field
                                name="login"
                                as={TextField}
                                label="Введите логин"
                                margin="normal"
                            />
                            <ErrorMessage
                                name="login"
                                component="div"
                                className="error-message"
                            />
                        </div>

                        <div>
                            <Field
                                name="password"
                                as={TextField}
                                type="password"
                                label="Введите пароль"
                                margin="normal"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="error-message"
                            />
                        </div>

                        <div>
                            <Field
                                name="passwordSecond"
                                as={TextField}
                                type="password"
                                label="Введите пароль ещё раз"
                                margin="normal"
                            />
                            <ErrorMessage
                                name="passwordSecond"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="registr"
                            disabled={isSubmitting}>
                            Зарегистрироваться
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
