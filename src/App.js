import React from 'react';
import { Router } from 'react-router-dom';
/* redux */
import { Provider } from 'react-redux';
// notificacoes:
import { ToastContainer } from 'react-toastify';
/* Reactotron */
import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import history from './services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Router>
    </Provider>
  );
}

export default App;
