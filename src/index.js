import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);  

serviceWorker.unregister();