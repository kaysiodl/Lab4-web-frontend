import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {ProtectedRoute} from "./features.auth/ProtectedRoute";

const theme = createTheme({
    palette: {
        primary: { main: '#1976d2' },
        secondary: { main: '#dc004e' },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/sign-in" element={<LoginPage/>}/>
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/sign-up" element={<RegistrationPage/>}/>
            </Routes>
        </ThemeProvider>
    );
}
