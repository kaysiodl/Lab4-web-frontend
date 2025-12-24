import {Formik, Form, Field, ErrorMessage} from "formik";
import {TextField, Button} from "@mui/material";
import {Radio} from "./Radio";
import {pointSchema} from "../features/points/pointsValidation";
import {updateLabels} from "../canvas/canvas";
import {useDispatch, useSelector} from "react-redux";
import {setR} from "../store/rSlice";
import '../scss/PointForm.scss'


export function PointForm({onSubmit}) {
    const dispatch = useDispatch();
    const r = useSelector(state => state.r.value);

    return (
        <div id="point-form">
            <Formik
                initialValues={{
                    x: 0,
                    y: "",
                    r: r
                }}
                validationSchema={pointSchema}
                onSubmit={(values, {setSubmitting}) => {
                    onSubmit(values.x, values.y, values.r);
                    setSubmitting(false);
                }}
            >
                {({values, setFieldValue, isSubmitting}) => (
                    <Form>
                        <label>Выберите X:</label>
                        <Radio
                            min={-4}
                            max={4}
                            value={values.x}
                            onChange={(value) => setFieldValue("x", value)}
                        />
                        <ErrorMessage
                            name="x"
                            component="div"
                            className="error-message"
                        />
                        <Field
                            name="y"
                            as={TextField}
                            label="Введите Y"
                            margin="normal"
                        />
                        <ErrorMessage
                            name="y"
                            component="div"
                            className="error-message"
                        />
                        <label>Выберите R:</label>
                        <Radio
                            min={1}
                            max={6}
                            value={values.r}
                            onChange={(value) => {
                                setFieldValue("r", value).then(r => updateLabels(value));
                                dispatch(setR(value));
                            }}
                        />
                        <ErrorMessage
                            name="r"
                            component="div"
                            className="error-message"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                        >
                            Отправить
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
