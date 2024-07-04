import React, { useEffect, useRef, useState, useContext } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import { playList } from "../../utils/MusicUtils/PlayList";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon } from "./MusicPlayer.styled";
import { SoundContext } from "../../contexts/SoundContext";
import { Text } from "../../styles/General.styled";

function MusicPlayer() {
  const { hoverSound, clickSound } = useContext(SoundContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if(playerRef.current?.volume)
        playerRef.current.volume = 0.1;
      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    clickSound();
    setIsPlaying(false);
    await playPromise?.then(() => {
      playerRef.current.pause();
    });
    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };

  const displaySong = playList[currentSong].split("/")[5];

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            clickSound();
            setIsPlaying(false)}}
          onMouseEnter={() => hoverSound()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            clickSound();
            setIsPlaying(true)}}
          onMouseEnter={() => hoverSound()}
        />
      )}
      <NextIcon onClick={shuffleHandler} onMouseEnter={() => hoverSound()} />

      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onClick={shuffleHandler}
      ></audio>
      <Text>{displaySong}</Text>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
