import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "../Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")}/>

      <span onClick={() => toggleTheme()}>
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
      
      {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}

    </HeaderWrapper>
  );
};

export default Header;
