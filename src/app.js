import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";


export default function App() {
  // const persistedToken = JSON.parse(localStorage.getItem("token"));
  // const [token, setToken] = useState(persistedToken);

  // function persistLogin(novoToken) {
  //   setToken(novoToken);
  //   localStorage.setItem("token", JSON.stringify(novoToken));
  // }

  // async function logout() {
  //   localStorage.clear();
  //   window.location.replace("/login");
  // }

  // function vadadateToken() {
  //   const persistedToken = JSON.parse(localStorage.getItem("token"));
  //   if (!persistedToken) window.location.replace("/login");
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
