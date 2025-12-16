async function request(url, options = {}) {
    const { headers: headers, ...rest } = options;

    return await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        ...rest
    });
}


export async function loginApi(login, password) {
    return await request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({login, password})
    });
}

export async function logoutApi() {
    return await request("/api/auth/logout", {
        method: "POST",
        headers: {
            "X-Session-Id": sessionStorage.getItem("sessionId")
        }
    });
}

export async function registerApi(login, password) {
    return await request("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({login, password})
    });
}

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

