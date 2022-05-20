import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlertProvide from "./contexts/AlertContext";
import AuthProvide from "./contexts/AuthContext";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import NewGamePage from "./pages/NewMeeting";

export default function App() {
  return (
    <AuthProvide>
      <AlertProvide>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/newGame" element={<NewGamePage />} />
          </Routes>
        </BrowserRouter>
      </AlertProvide>
    </AuthProvide>
  );
}
