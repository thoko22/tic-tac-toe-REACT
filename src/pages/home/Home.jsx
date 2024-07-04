import React, { useContext } from "react";
import { Container, Subtitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SoundContext } from "../../contexts/SoundContext";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSound, clickSound } = useContext(SoundContext);
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSound();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSound()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
