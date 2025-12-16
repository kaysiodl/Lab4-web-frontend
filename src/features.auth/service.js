import {loginApi, logoutApi, registerApi, getUserResultsApi, sendResultsApi, clearPointsApi} from "./api";

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

export async function sendPointService(x, y, r) {
    const response = await sendResultsApi(x, y, r);
    console.log(response);
    if (!response.ok) {
        throw new Error("Ошибка при отправке точки");
    }
    return await response.json();
}

export async function getPointsService() {
    const response = await getUserResultsApi();
    if (!response.ok) {
        throw new Error("Ошибка при получении результатов")
    }
    return await response.json();
}

export async function clearPointsService() {
    const response = await clearPointsApi();
    if (!response.ok) {
        throw new Error("Ошибка при удалении результатов")
    }
    return await response.json();
}