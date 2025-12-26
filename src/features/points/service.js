import {clearPointsApi, getAllResultsApi, getUserResultsApi, sendResultsApi} from "./pointsApi";

export async function sendPointService(x, y, r) {
    const response = await sendResultsApi(x, y, r);
    if (!response.ok) {
        throw new Error("Ошибка при отправке точки");
    }
    return await response.json();
}

export async function getPointsService(params = {}) {
    const response = await getUserResultsApi(params);
    if (!response.ok) {
        throw new Error("Ошибка при получении результатов")
    }
    return await response.json();
}

export async function getAllPointsService() {
    const response = await getAllResultsApi();
    if (!response.ok) {
        throw new Error("Ошибка при получении результатов")
    }
    return await response.json();
}

export async function clearPointsService() {
    const response = await clearPointsApi();
    if (!response.ok) {
        throw new Error("Ошибка при удалении результатов");
    }
}
