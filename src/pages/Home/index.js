import styled from "styled-components";
import Hearder from "../../components/Hearder";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../../services/apiService";
import { useAlert } from "../../contexts/AlertContext";
import { useAuth } from "../../contexts/AuthContext";
import MainStyle from "../../components/main";

export default function HomePage() {
  const navegate = useNavigate();
  const [meetings, setMeetings] = useState();
  const { setMessage } = useAlert();
  const { token } = useAuth();

  const getMeetings = async () => {
    try {
      const reponse = await api.getMeeting(token);
      setMeetings(reponse.data);
    } catch (error) {
      setMessage({ type: "error", text: error.response.data });
    }
  };

  useEffect(() => {
    getMeetings();
  }, []);

  return (
    <>
      <Hearder />
      <MainStyle>
        <Button
          variant="contained"
          onClick={() => {
            navegate("/NewGame");
          }}
        >
          Marque um novo jogo
        </Button>
        {meetings && (
          <SectionStyle>
            {meetings.map((item) => {
              return (
                <ArticleStyle key={item.id}>
                  <img
                    alt="erro"
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${item.local}&size=300x300&key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                  ></img>
                  <SubArticle>
                    <p>{item.name}</p>
                    <p>Local: {item.local}</p>
                    <p>
                      Horio: {item.inicio}~{item.termino}
                    </p>
                  </SubArticle>
                </ArticleStyle>
              );
            })}
          </SectionStyle>
        )}
      </MainStyle>
    </>
  );
}

const SectionStyle = styled.article`
  width: 100%;
  margin-top: 10px;
  border-radius: 50px;
  gap: 12px;
`;

const ArticleStyle = styled.article`
  width: 100%;
  background: #fff;
  display: flex;
  margin-bottom: 12px;
  border-radius: 10px;
  overflow: hidden;
`;

const SubArticle = styled.section`
  width: 100%;
  border: 1px solid #1976d2;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
s`;
