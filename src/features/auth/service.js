import {loginApi, logoutApi, registerApi} from "./api";

export async function loginService(login, password) {
    const response = await loginApi(login, password);
    if (!response.ok) {
        throw new Error("Неверный логин или пароль");
    }
    return await response.json();
}

export async function registerService(login, password, passwordScnd) {
    if (password !== passwordScnd) {
        throw new Error("Пароли не совпадают. Проверьте ещё раз")
    }
    const response = await registerApi(login, password);
    if (!response.ok) {
        throw new Error("Ошибка при регистрации")
    }
    return await response.json();
}

export async function logoutService() {
    const response = await logoutApi();
    if (!response.ok) {
        throw new Error("Ошибка при выходе из аккаунта")
    }
    return await response.json();
}