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

    if (formData.password !== formData.confirmPassword)
      console.log("senhas tem que ser iguais")

    try {
      delete formData.confirmPassword;
      console.log(formData)
      await api.signUp(formData);
      navigate("/login")
      setMessage({ type: "success", text: "Cadastro efetuado com sucesso!" });
    } catch (error) {
      console.log(error)
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
        />
        <input
          type='text'
          name='name'
          placeholder="Escolha seu nickname"
          onChange={handleInput}
          value={formData.name}
        />
        <input
          type='password'
          name="password"
          placeholder="Escolha sua senha"
          onChange={handleInput}
          value={formData.password}
        />
        <input
          type='password'
          name="confirmPassword"
          placeholder="Confirme sua senha"
          onChange={handleInput}
          value={formData.confirmPassword}
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