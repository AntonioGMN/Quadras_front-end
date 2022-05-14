import axios from "axios";

const Base_URL = "http://localhost:4000";

const instance = axios.create({
  baseURL: Base_URL,
});

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function signUp(user) {
  return instance.post("/signUp", user);
}

export function login(user) {
  return instance.post("/login", user);
}

export function logout(token) {
  const config = createConfig(token);
  return instance.delete("/logout", config);
}
