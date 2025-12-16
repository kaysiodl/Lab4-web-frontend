import '../scss/AuthForm.scss'
import { TextField, Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { authSchema } from "../features.auth/authValidation";
import {useNavigate} from "react-router-dom";

export default function AuthForm({ onSubmit, error }) {
    const navigate = useNavigate();

    return (
        <div id="auth">
            <h2>Вход</h2>
            <Formik
                initialValues={{ login: "", password: "" }}
                validationSchema={authSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await onSubmit(values.login, values.password);
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
                        {error && <div className="error-message">{error}</div>}
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                        >
                            Войти
                        </Button>
                    </Form>
                )}
            </Formik>
            <form>
                <Button onClick={() => navigate("/sign-up")}>
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
}

