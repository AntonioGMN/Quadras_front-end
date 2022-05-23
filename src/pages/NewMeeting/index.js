import Hearder from "../../components/Hearder";
import Form from "../../components/Form";
import MainStyle from "../../components/main";
import { useEffect, useState } from "react";
import { useAlert } from "../../contexts/AlertContext";
import { Button, Box } from "@mui/material";
import HandlerMap from "../../components/Map";
import * as api from "../../services/apiService";
import UserMenu from "../../components/Menu";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NewGamePage() {
  const { user, token } = useAuth();
  const navegate = useNavigate();
  const { setMessage } = useAlert();
  const [searching, setSearching] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    inicio: "",
    termino: "",
    local: "",
  });

  useEffect(() => {
    if (user === null) {
      setMessage({
        type: "warning",
        text: "É preciso está logado para marcar um jogo",
      });
    }
  }, [user]);

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handlerSearch(local) {
    setFormData({ ...formData, local });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (user !== null)
      setMessage({
        type: "error",
        text: "É preciso está logado para marcar um jogo",
      });

    try {
      const body = { ...formData, creatorId: user.id };
      await api.createMeeting(body, token);
      setMessage({ type: "success", text: "Reunião marcada com sucesso" });
      navegate("/");
    } catch (error) {
      setMessage({ type: "error", text: error.response.data });
    }
  }

  return (
    <>
      <Hearder />
      <MainStyle>
        {searching ? (
          <HandlerMap
            setSearching={setSearching}
            handlerSearch={handlerSearch}
          />
        ) : (
          <Form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
              required
            ></input>
            <label>Quando vai ser:</label>
            <input
              type="date"
              name="date"
              onChange={handleInput}
              value={formData.date}
              required
            ></input>
            <label>Incio:</label>
            <input
              type="time"
              name="inicio"
              onChange={handleInput}
              value={formData.inicio}
              required
            ></input>
            <label>Hório aproximado de término:</label>
            <input
              type="time"
              name="termino"
              onChange={handleInput}
              value={formData.termino}
              required
            ></input>
            <label>Local:</label>
            <Box sx={boxStyle}>
              <input
                type="text"
                name="local"
                placeholder="Pesquise no GoogleMap"
                onChange={handleInput}
                value={formData.local}
                required
              ></input>
              <Button
                sx={buttonStyle}
                onClick={() => {
                  setSearching(true);
                }}
              >
                Ver no Mapa
              </Button>
            </Box>
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </Form>
        )}
      </MainStyle>
    </>
  );
}

const boxStyle = {
  display: "flex",
  position: "relative",
};

const buttonStyle = {
  width: "20px",
  fontSize: "12px",
};
