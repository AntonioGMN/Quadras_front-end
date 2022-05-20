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
    document.location.reload(true);
  }


  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);


