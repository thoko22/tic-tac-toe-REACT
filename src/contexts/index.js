import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContexts";
import { SoundContextProvider } from "./SoundContext";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SoundContextProvider>
        {children}
        </SoundContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
