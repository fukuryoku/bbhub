import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setAuthorizationToken, setCurrentUser } from './store/actions/auth';
import jwtDecode from 'jwt-decode'
import ScrollToTop from './hoc/scrollTop'

const store = configureStore();

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    // prevent someone from manually tampering with the key of jwtToken in localStorage
    try {
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    } catch (e) {
      store.dispatch(setCurrentUser({}));
    }
  }
  
const app=(
    <Provider store={store}>
          <BrowserRouter>
            <ScrollToTop>
              <App/>
            </ScrollToTop>
          </BrowserRouter>
    </Provider>
    );

    ReactDOM.render(
      app,
      document.getElementById('root')
    );
// ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
