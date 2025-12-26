import {BackBtn} from "../components/Back";
import {PointForm} from "../components/PointForm";
import {Canvas} from "../components/Canvas";
import {useEffect, useState} from "react";
import ResultsTable from "../components/ResultsTable";
import {usePoints} from "../features/points/usePoints";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import '../scss/PointForm.scss'

export default function HomePage() {
    const {points, total, getPoints, canvasPoints, sendPoint, clearPoints, getAllCanvasPoints} = usePoints();
    const navigate = useNavigate();

    useEffect(() => {
        getPoints();
        getAllCanvasPoints();
    }, []);

    const handleCanvasClick = (x, y, r) => {
        if (!sessionStorage.getItem("sessionId")) {
            navigate("/sign-in");
            return;
        }
        sendPoint(x, y, r);
    };

    return (
        <div id="point">
            <h2>Матвеева Полина Р3215 Вариант 300002</h2>
            <BackBtn/>
            <form>
                <Button onClick={() => {
                    sessionStorage.removeItem("sessionId");
                    navigate("/sign-in");
                }}>
                    Выйти из аккаунта
                </Button>
            </form>
            <Canvas points={canvasPoints}
                    onClick={handleCanvasClick}/>
            <PointForm onSubmit={sendPoint}/>
            <ResultsTable points={points} total={total} getPoints={getPoints}/>
            <Button onClick={clearPoints}>
                Очистить точки
            </Button>
        </div>
    )
}