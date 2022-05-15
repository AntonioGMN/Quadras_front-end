import { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const persistedToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(persistedToken);

  function login(newToken) {
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
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
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);


