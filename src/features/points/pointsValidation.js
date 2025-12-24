import * as Yup from "yup";

export const pointSchema = Yup.object().shape({
    x: Yup.number().required("Это поле обязательно"),
    y: Yup.number()
        .required("Это поле обязательно")
        .min(-3, "Введенное число должно быть больше либо равно -3")
        .max(5, "Введенное число должно быть меньше либо равно 5"),
    r: Yup.number()
        .required("Это поле обязательно")
})