import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import logo from '/logo.svg';
import Header from './styles/Header.style';

function App() {
  return (
    <Provider>
      <Header>
        <img src={ logo } alt="logo-star-wars" />
      </Header>
      <Table />
    </Provider>
  );
}

export default App;
