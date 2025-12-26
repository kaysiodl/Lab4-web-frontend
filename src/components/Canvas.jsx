import { useEffect, useRef } from "react";
import {start, drawPoint, updateLabels} from "../canvas/canvas";
import {useSelector} from "react-redux";

export function Canvas({ points, onClick }) {
    const canvasRef = useRef(null);
    const r = useSelector(state => state.r.value);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        start(ctx, canvas);
    }, []);

    useEffect(() => {
        if (!Array.isArray(points)) return;
        console.log("radius: ", r);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        start(ctx, canvas);
        updateLabels(r);

        points
            .filter(p => p.r === r)
            .forEach(p => {
                drawPoint(
                    p.x * 20 * 8 / p.r,
                    -p.y * 20 * 8 / p.r,
                    p.hit ? "green" : "red"
                );
            });
    }, [points, r]);

    const handleClick = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left - 200) / 20 / 8) * r;
        const y = -((e.clientY - rect.top - 200) / 20 / 8) * r;
        onClick(x, y, r);
    };

    return (
        <canvas
            ref={canvasRef}
            width="400"
            height="400"
            onClick={handleClick}
        />
    );
}
