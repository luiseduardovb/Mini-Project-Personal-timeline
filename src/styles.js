//Styling
import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: purple;
`;

const ListWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;

  ::after {
    background-color: white;
    content: "";
    position: absolute;
    left: calc(100% - 2px);
    width: 4px;
    height: 100%;
  }
`;

const DataWrapper = styled.div`
  justify-content: flex-end;
  padding-left: 700px;

  p {
    margin: 20px;
    text-align: center;

    &.event-year {
      color: ${(props) => props.theme.yearColor};
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
      color: ${(props) => props.theme.mainColor};
      background-color: ${(props) => props.theme.backgroundColor};
  }

`;

export { Title, ListWrapper, DataWrapper, GlobalStyle };
