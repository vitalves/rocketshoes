import React from 'react';
import { BrowserRouter } from 'react-router-dom';
/* redux */
import { Provider } from 'react-redux';
/* Reactotron */
import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
