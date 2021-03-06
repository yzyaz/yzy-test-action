import React from 'react';
import logo from 'src/assets/img/logo.svg';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './route';
import { Provider } from 'react-redux';
import store from './store';
import './App.less';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          test actions2
          <p>
            Edit <code>src/App.tsx</code> and save to reload.有数1111
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
