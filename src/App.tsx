import React, { createContext } from 'react';
import { Container } from './pages/dashboard/styles';
import Dashboard from './pages/dashboard/index';
import GlobalStyle from './styles/global';
import { RecoilRoot } from 'recoil';
import 'jquery';

const App: React.FC = () => (
  <RecoilRoot>
    <GlobalStyle />
    <Container>
      <Dashboard />
    </Container>
  </RecoilRoot>
);

export default App;
