import * as Yup from "yup";

export const pointSchema = Yup.object().shape({
    x: Yup.number().required("Это поле обязательно"),
    y: Yup.number()
        .required("Это поле обязательно")
        .min(-3)
        .max(5),
    r: Yup.number()
        .required("Это поле обязательно")
})