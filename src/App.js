import React from "react";

//Components
import DataList from "./components/DataList";

//Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { Title } from "./styles";

const theme = {
  mainColor: "#c3edea",
  backgroundColor: "#162447",
  yearColor: "#f0a500",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>Personal Timeline</Title>

      <DataList />
    </ThemeProvider>
  );
}

export default App;
