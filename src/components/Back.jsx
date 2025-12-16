import {Button} from "./Button";
import {useNavigate} from "react-router-dom";

export function BackBtn() {
    const navigate = useNavigate();

    function handleBackClick() {
        navigate(-1);
    }

    return (
        <Button onClick={handleBackClick}>Назад</Button>
    );
}