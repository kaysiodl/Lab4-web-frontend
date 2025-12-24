import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
    login: Yup.string()
        .required("Это поле должно быть заполнено")
        .min(3, "Логин должен быть минимум 3 символа")
        .max(15, "Имя пользователя не может быть более 15 символов"),
    password: Yup.string()
        .required("Это поле должно быть заполнено")
        .min(5, "Пароль должен быть минимум 5 символов"),
    passwordSecond: Yup.string()
        .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
        .required("Подтвердите пароль"),
});

export const authSchema = Yup.object().shape({
    login: Yup.string().required("Это поле должно быть заполнено")
        .min(3, "Логин должен быть минимум 3 символа"),
    password: Yup.string()
        .required("Это поле должно быть заполнено")
        .min(5, "Пароль должен быть минимум 5 символов"),
})
