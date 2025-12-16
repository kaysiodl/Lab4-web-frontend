import {BackBtn} from "../components/Back";
import {PointForm} from "../components/PointForm";
import {Canvas} from "../components/Canvas";
import {useEffect, useState} from "react";
import ResultsTable from "../components/ResultsTable";
import {usePoints} from "../hooks/points/usePoints";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import '../scss/PointForm.scss'

export default function HomePage() {
    const {points, getPoints, sendPoint, clearPoints} = usePoints();
    const navigate = useNavigate();


    useEffect(() => {
        getPoints();
    }, []);

    const handleCanvasClick = (x, y, r) => {
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
            <Canvas points={points}
                    onClick={handleCanvasClick}/>
            <PointForm onSubmit={sendPoint}/>
            <ResultsTable points={points}/>
            <Button onClick={async () => {
                await clearPoints();
                window.location.reload();
            }}>
                Очистить точки
            </Button>
        </div>
    )
}