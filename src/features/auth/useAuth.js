import {useState} from "react";
import {loginService, logoutService, registerService} from "./service";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const signIn = async (login, password) => {
        setError("");

        try {
            const data = await loginService(login, password);
            sessionStorage.setItem("sessionId", data.sessionId);
            setUser(login);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }
    }

    const signOut = async () => {
        try {
            await logoutService();
            sessionStorage.removeItem("sessionId");
            setUser(null);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }

    }

    const signUp = async (login, password, passwordSecond) => {
        setError("");
        try {
            const data = await registerService(login, password, passwordSecond);
            sessionStorage.setItem("sessionId", data.sessionId);
            setUser(login);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }
    }

    if (error) {
        console.log("error", error);
    }
    return {user, error, signIn, signOut, signUp};
}