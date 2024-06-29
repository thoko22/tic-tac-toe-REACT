import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
  font-size: 3rem;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 10px ${(props) => props.theme.color.gray};
  width: 10rem;
  height: 10rem;
  cursor: pointer;
`;
