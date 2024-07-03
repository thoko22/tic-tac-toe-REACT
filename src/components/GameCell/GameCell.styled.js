import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
  font-size: 3rem;
  border: none;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.color.gray};
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  padding 3rem;

  .markedItem {
    path {
      fill: ${(props) => props.theme.color.primary};
    }
  }

  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.color.primary};
      stroke-width: 0;
    }
  }
  &:hover {
    .outlineIcon {
    path {
      stroke-width: 2;
    }
  }
  }
`;
