import Logo from "../../components/logo";
import Centralizar from "../../components/centralize";
import Form from "../../components/Form";
import Subtitulo from "../../components/subtitulo";

import { Button, Box } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as api from "../../services/apiService";
import { useAlert } from "../../contexts/AlertContext";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setMessage } = useAlert();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete formData.confirmPassword;
      const token = await api.login(formData);
      login(token.data);
      navigate("/");
    } catch (error) {
      setMessage({ type: "error", text: error.response.data });
    }
  }

  return (
    <Centralizar>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Subtitulo>Login:</Subtitulo>
        <input
          type="email"
          name="email"
          placeholder="Entre com seu email"
          onChange={handleInput}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Entre com sua senha"
          onChange={handleInput}
          value={formData.password}
          required
        />
        <Box sx={boxStyle}>
          <Link to={"/cadastro"}>
            <p style={textStyle}>Ainda não possuo cadastro</p>
          </Link>
          <Button variant="contained" type="submit">
            Entrar
          </Button>
        </Box>
      </Form>
    </Centralizar>
  );
}

const boxStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "16px",
};

const textStyle = {
  color: "rgb(114 113 113)",
  fontSize: "14px",
};
