// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory';
import Switch from 'react-router-dom/Switch';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Analitics
import ReactGA from 'react-ga';

// WebFont Loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// Redux
import Provider from 'react-redux/lib/components/Provider';
import applyMiddleware from 'redux/lib/applyMiddleware';
import createStore from 'redux/lib/createStore';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Views
import Index from './views/Index/Index';
import Contact from './views/Contact/Contact';
import Faq from './views/Faq/Faq';
import Partners from './views/Partners/Partners';
import Ambassadors from './views/Ambassadors/Ambassadors';
import Edition2018 from './views/Edition2018/Edition2018';
import Edition2017 from './views/Edition2017/Edition2017';
import Home from './views/Home/Home';

// Main styles import.
import { colorPalette } from './utils/constants/styles';
import './styles.css';

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

// WebFont Loader configuration.
const config = {
  google: {
    families: ['Montserrat:400,500,700:latin,latin-ext'],
  },
};

ReactGA.initialize('GTM-NM7RXM');
const customHistory = createBrowserHistory();
customHistory.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <WebfontLoader config={config}>
      <Provider store={store}>
        <Router history={customHistory}>
          <Index>
            <Switch>
              <Route path="/kontakt" component={Contact} />
              <Route path="/faq" component={Faq} />
              <Route path="/partnerzy" component={Partners} />
              <Route path="/program_ambasadorski" component={Ambassadors} />
              <Route path="/edycja2018" component={Edition2018} />
              <Route path="/edycja2017" component={Edition2017} />
              <Route path="/" component={Home} />
            </Switch>
          </Index>
        </Router>
      </Provider>
    </WebfontLoader>
  </MuiThemeProvider>, document.querySelector('.container'));
