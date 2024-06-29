import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  padding: 2rem;
  margin-top: 20px;

  .logo {
    height: 4rem;
    fill: ${(props) => props.theme.color.text};
    cursor: pointer;
  }
`;
export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  cursor: pointer;
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  cursor: pointer;
`;