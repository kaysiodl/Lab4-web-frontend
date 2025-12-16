import {BackBtn} from "../components/Back";
import SignUpForm from "../components/SignUpForm";
import '../scss/AuthForm.scss'
import {useAuth} from "../features.auth/useAuth";
import {useNavigate} from "react-router-dom";

export default function RegistrationPage() {
    const {error, signUp} = useAuth();
    const navigate = useNavigate();

    const handleSignUp = async (login, password, passwordSecond) => {
        const success = await signUp(login, password,  passwordSecond);

        if (success) {
            navigate("/home");
        }
    }

    return (
        <div id="registration-page">
            <h2>Регистрация</h2>
            <BackBtn/>
            <SignUpForm onSubmit={handleSignUp} error={error}/>
        </div>
    );
}