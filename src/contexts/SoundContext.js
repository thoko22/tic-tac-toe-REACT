import React, { createContext } from "react";
import useSound from "../hooks/useSound";

export const SoundContext = createContext({});

export function SoundContextProvider({ children }) {
  const options = {
    volume: 0.05,
    timeout: 200
  };


  const hoverPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const clickedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
  const winnerPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
  const completedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";

  const hoverSound = useSound(hoverPath, options);
  const clickSound = useSound(clickedPath, options);
  const winSound = useSound(winnerPath, {...options, timeout: 1000});
  const completedSound = useSound(completedPath, {...options, timeout: 2000});

  return (
    <SoundContext.Provider
      value={{ hoverSound, clickSound, winSound, completedSound }}
    >
      {children}
    </SoundContext.Provider>
  );
}
