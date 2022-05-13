import Logo from "../../components/logo";
import Centralizar from "../../components/centralize";
import Form from "../../components/Form";
import Subtitulo from "../../components/subtitulo";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <Centralizar>
      <Logo />
      <Form>
        <Subtitulo >Cadastro:</Subtitulo>
        <input type='email' placeholder="Entre com um email" />
        <input type='text' placeholder="Escolha seu nickname" />
        <input type='password' placeholder="Escolha sua senha" />
        <input type='password' placeholder="Confirme sua senha" />
        <Box sx={boxStyle}>
          <Link to={"/login"}>
            <p style={textStyle}>Já possuo cadastro</p>
          </Link>
          <Button variant="contained">Cadastrar</Button>
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