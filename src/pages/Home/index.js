import Logo from "../../components/logo";
import Centralizar from "../../components/centralize";
import Form from "../../components/Form";
import Subtitulo from "../../components/subtitulo";
import { Button } from "@mui/material";
import { Box } from "@mui/material";


export default function HomePage() {
  return (
    <Centralizar>
      <Logo />
      <Form>
        <Subtitulo >Login:</Subtitulo>
        <input type='email' placeholder="Entre com seu email"></input>
        <input type='password' placeholder="Entre com sua senha"></input>
        <Box sx={boxStyle}>
          <p style={pStyle}>Ainda não possuo cadastro</p>
          <Button variant="contained">Entrar</Button>
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

const pStyle = {
  color: "rgb(114 113 113)",
  fontSize: "14px"
}