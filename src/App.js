import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* redux */
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

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
