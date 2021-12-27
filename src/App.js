import React from 'react';
import Header from 'src/components/Header/index.jsx';
import Content from 'src/components/Content/index.jsx';
import Footer from 'src/components/Footer/index.jsx';
import Provider from 'src/context/provider';
import { ModalProvider } from 'styled-react-modal';
import './App.css';

const App = () => {
  return (
    <Provider>
      <ModalProvider>
        <Header />
        <Content />
        <Footer />
      </ModalProvider>
    </Provider>
  );
};

export default App;
