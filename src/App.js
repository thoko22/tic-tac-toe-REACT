import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { lightTheme, darkTheme } from "./styles/theme";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div>
      <ThemeProvider theme={mode}>
        <ModalContextProvider>
          <GlobalStyle />
          <Router />
        </ModalContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
