import React from "react";
import { Container } from "./pages/dashboard/styles";
import Dashboard from "./pages/dashboard/index";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Dashboard />
    </Container>
  </>
);

export default App;
