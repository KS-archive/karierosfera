// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Redux
import Provider from 'react-redux/lib/components/Provider';
import applyMiddleware from 'redux/lib/applyMiddleware';
import createStore from 'redux/lib/createStore';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import SecondPage from './components/SecondPage/SecondPage';

// Main styles import.
import './scss/global.scss';

// Middleware
/* eslint-disable no-underscore-dangle */
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// Needed for onTouchTap (Material UI)
injectTapEventPlugin();

// DYNAMIC IMPORT SCHEMA
// import('./components/SecondPage/SecondPage').then((lazy) => {
//   console.log(lazy.default);
//   return lazy.default;
// }).catch((err) => {
//   console.error(err);
// });

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3F51B5',
    primary2Color: '#303F9F',
    primary3Color: '#C5CAE9',
    accent1Color: '#4CAF50',
    accent2Color: '#BDBDBD',
    accent3Color: '#757575',
    textColor: '#212121',
    pickerHeaderColor: '#3F51B5',
  },
  button: {
    height: 50,
    minwidth: 190,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/secondpage" component={SecondPage} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>, document.querySelector('.container'));
