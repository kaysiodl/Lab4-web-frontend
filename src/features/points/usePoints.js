import {useState} from "react";
import {sendPointService, getPointsService, clearPointsService, getAllPointsService} from "./service";

export function usePoints() {
    const [points, setPoints] = useState([]);
    const [canvasPoints, setCanvasPoints] = useState([]);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState("");

    const sendPoint = async (x, y, r) => {
        setError("");
        try {
            const point = await sendPointService(x, y, r);
            await getPoints();
            setCanvasPoints(prev => [...prev, point]);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }
    };

    const getAllCanvasPoints = async () => {
        setError("");
        try {
            const points = await getAllPointsService();
            setCanvasPoints(points);
        } catch (e) {
            setError(e.message);
        }
    }

    const getPoints = async (params = {}) => {
        setError("");
        try {
            const response = await getPointsService(params);
            setPoints(response.results);
            setTotal(response.total);
            return true;
        } catch (e) {
            setError(e.message);
            return false;
        }
    };

    const clearPoints = async () => {
        setError("");
        try {
            await clearPointsService();
            setPoints([]);
            setCanvasPoints([]);
            setTotal(0);
        } catch (e) {
            setError(e.message);
        }
    };


    return {points, canvasPoints, total, sendPoint, getPoints, clearPoints, getAllCanvasPoints, error};
}