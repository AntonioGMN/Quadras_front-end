import Logo from "../../components/logo";
import Centralizar from "../../components/centralize";
import Form from "../../components/Form";
import Subtitulo from "../../components/subtitulo";

import { Button } from "@mui/material";
import { Box } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import * as api from '../../services/apiService'
import { useAlert } from "../../contexts/AlertContext";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { setMessage } = useAlert()
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  })

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setMessage({ type: "error", text: "As senhas devem ser iguais!" });
    }

    try {
      const body = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      }
      await api.signUp(body);
      setMessage({ type: "success", text: "Cadastro efetuado com sucesso!" });
      navigate("/login")
    } catch (error) {
      setMessage({ type: "error", text: error.response.data });
      return
    }
  }

  return (
    <Centralizar>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Subtitulo >Cadastro:</Subtitulo>
        <input
          type='email'
          name='email'
          placeholder="Entre com um email"
          onChange={handleInput}
          value={formData.email}
          required
        />
        <input
          type='text'
          name='name'
          placeholder="Escolha seu nickname"
          onChange={handleInput}
          value={formData.name}
          required
        />
        <input
          type='password'
          name="password"
          placeholder="Escolha sua senha"
          onChange={handleInput}
          value={formData.password}
          required
        />
        <input
          type='password'
          name="confirmPassword"
          placeholder="Confirme sua senha"
          onChange={handleInput}
          value={formData.confirmPassword}
          required
        />
        <Box sx={boxStyle}>
          <Link to={"/login"}>
            <p style={textStyle}>Já possuo cadastro</p>
          </Link>
          <Button type="submit" variant="contained">Cadastrar</Button>
        </Box>
      </Form>
    </Centralizar >
  )
}

const boxStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: '16px'
}

const textStyle = {
  color: "rgb(114 113 113)",
  fontSize: "14px"
}