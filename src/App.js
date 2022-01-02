import React from 'react';
import Provider from 'src/context/provider';
import Routes from './Routes';
import './App.css';

const App = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
};

export default App;
