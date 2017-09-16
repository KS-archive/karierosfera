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
import Footer from './components/Footer/Footer';

// Views
import Contact from './views/Contact/Contact';
import Faq from './views/Faq/Faq';
import Partners from './views/Partners/Partners';
import Ambasadors from './views/Ambasadors/Ambasadors';
import Edition2018 from './views/Edition2018/Edition2018';
import Edition2017 from './views/Edition2017/Edition2017';
import Home from './views/Home/Home';

// Main styles import.
import { colorPalette } from './utils/constants/styles';

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

const muiTheme = getMuiTheme({
  palette: colorPalette,
  button: {
    height: 50,
    minwidth: 160,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={Faq} />
            <Route path="/partnerzy" component={Partners} />
            <Route path="/program_ambasadorski" component={Ambasadors} />
            <Route path="/edycja2018" component={Edition2018} />
            <Route path="/edycja2017" component={Edition2017} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>, document.querySelector('.container'));
