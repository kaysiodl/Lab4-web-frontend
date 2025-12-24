import {clearPointsApi, getUserResultsApi, sendResultsApi} from "./pointsApi";

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
        throw new Error("Ошибка при удалении результатов");
    }
}
