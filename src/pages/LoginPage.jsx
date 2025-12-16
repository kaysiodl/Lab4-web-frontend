import '../scss/AuthForm.scss'
import AuthForm from '../components/AuthForm';
import {useAuth} from "../features.auth/useAuth";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const { error, signIn } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (login, password) => {
        const success = await signIn(login, password);

        if (success) {
            navigate("/home");
        }
    };

    return <AuthForm onSubmit={handleLogin} error={error} />;
}
