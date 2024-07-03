import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.columnBased ? "column" : "row")};
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.color.primary};
  padding: 0 2rem;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.text};
  font-size: 4rem;
  font-family: "Pacifico", cursive;
  background: transparent;

  ${(props) => props.theme.media.mobile} {
    font-size: 5rem;
  }

`;

export const Subtitle = styled.h1`
  color: ${(props) => props.theme.color.text};
  font-size: 1.5rem;
  font-weight: 200;
  background: transparent;
  padding: 10px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.text};
  font-size: 1.5rem;
  background: transparent;
  padding: 10px;
`;
