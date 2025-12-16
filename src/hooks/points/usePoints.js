import {useState} from "react";
import {sendPointService, getPointsService, clearPointsService} from "../../features.auth/service";

export function usePoints() {
    const [points, setPoints] = useState([]);
    const [error, setError] = useState("");

    const sendPoint = async (x, y, r) => {
        setError("");
        try {
            const point = await sendPointService(x, y, r);
            setPoints(prev => [...prev, point]);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }
    };

    const getPoints = async () => {
        setError("");
        try {
            const response = await getPointsService();
            setPoints(response);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }
    }

    const clearPoints = async () => {
        setError("");
        try {
            const response = await clearPointsService();
            if (!response.ok) throw new Error("Ошибка при очистке точек");
            setPoints([]);
        } catch (e) {
            setError(e.message);
        }
    };

    return {points, sendPoint, getPoints, clearPoints, error};
}