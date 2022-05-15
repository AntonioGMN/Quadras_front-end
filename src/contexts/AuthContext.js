import { createContext, useContext } from "react";
import { useState } from "react";
import Alert from "../components/Alert";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const persistedToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(persistedToken);

  function persistingLogin(novoToken) {
    setToken(novoToken);
    localStorage.setItem("token", JSON.stringify(novoToken));
  }

  async function logout() {
    localStorage.clear();
    window.location.replace("/login");
  }

  // function vadadateToken() {
  //   const persistedToken = JSON.parse(localStorage.getItem("token"));
  //   if (!persistedToken) window.location.replace("/login");
  // }

  return (
    <AuthContext.Provider value={{ token, persistingLogin, logout }}>
      {children}
      <Alert />
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);


