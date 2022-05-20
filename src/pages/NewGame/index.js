import Hearder from "../../components/Hearder";
import Form from "../../components/Form";
import MainStyle from "../../components/main";
import { useState } from "react";
// import { useAlert } from "../../contexts/AlertContext";
import Map from "../../components/Map";
import ShowMap from "../../components/ShowMap";
import { Button } from "@mui/material";
import HandlerMap from "../../components/Map";

export default function NewGamePage() {
  const [searching, setSearching] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  // function handleInput(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //   } catch (error) {
  //     setMessage({ type: "error", text: error.response.data });
  //   }
  // }

  return (
    <>
      <Hearder />
      <MainStyle>
        {searching ? (
          <HandlerMap setSearching={setSearching} />
        ) : (
          <Form>
            <label>Nome:</label>
            <input type="text" name="name"></input>
            <label>Quando vai ser:</label>
            <input type="date" name="data"></input>
            <label>Incio:</label>
            <input type="time" name="incio"></input>
            <label>Hório aproximado de término:</label>
            <input type="time" name="termino"></input>
            <label>Local:</label>
            <input type="text" name=""></input>
            <Button
              onClick={() => {
                setSearching(true);
              }}
            >
              Pesquisar na GoogleMap
            </Button>
          </Form>
        )}
      </MainStyle>
    </>
  );
}
