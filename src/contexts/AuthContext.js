import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import * as api from "../services/apiService";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const persistedToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(persistedToken);
  const [user, setUser] = useState(null);

  function login(newToken) {
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
  }

  async function logout() {
    localStorage.clear();
    setUser(null);
    document.location.reload(true);
  }

  useEffect(() => {
    if (token !== null) {
      const promesse = api.findUser(token);
      promesse
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
