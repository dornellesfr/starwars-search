import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import logo from '/logo.svg';
import imageBackground from './assets/outro-fundo.jpg';
import Header from './styles/Header.style';
import Background from './styles/Background.style';

function App() {
  return (
    <Provider>
      {/* <Background><img src={ imageBackground } alt="backgroud-star-wars" /></Background> */}
      <Header><img src={ logo } alt="logo-star-wars" /></Header>
      <Table />
    </Provider>
  );
}

export default App;
