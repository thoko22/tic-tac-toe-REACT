import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContexts";
import { ModalContext } from "../../../contexts/ModalContext";
import { SoundContext } from "../../../contexts/SoundContext";
import { useNavigate } from "react-router-dom";

function RoundOverModal()  {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { hoverSound, clickSound, completedSound } = useContext(SoundContext);
  const { handleModal } = useContext(ModalContext);

  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <Title>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round`
            : "Round drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>Choices will be switched now.</Subtitle>
        <Subtitle>
          {game.player1.name}: {game.player1.score}
        </Subtitle>
        <Subtitle>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            clickSound();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSound()}
        >
          Continue
        </Button>
        <Button
          color="#8437f9"
          onClick={() => {
            completedSound();
            restartGame();
            handleModal();
            navigate("/");
          }}
          onMouseEnter={() => hoverSound()}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
