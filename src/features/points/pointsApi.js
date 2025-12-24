import {request} from "../auth/api";

export async function sendResultsApi(x, y, r){
    return await request("/api/check", {
        method: "POST",
        headers: {
            "X-Session-Id": sessionStorage.getItem("sessionId")
        },
        body: JSON.stringify({x:x, y:y, r:r})
    });
}

export async function getUserResultsApi() {
    return await request("/api/check", {
        method: "GET",
        headers: {
            "X-Session-Id": sessionStorage.getItem("sessionId")
        }
    });
}

export async function clearPointsApi() {
    const sessionId = sessionStorage.getItem("sessionId");
    return await request("/api/check", {
        method: "DELETE",
        headers: {
            "X-Session-Id": sessionId
        }
    });
}