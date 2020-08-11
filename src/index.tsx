import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './view/Barcode/App';
import store from './store/store/store';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import FormPaziente from './view/FormPaziente/FormPaziente';
import Editor from './view/Editor/Editor';
import PDFPatientData from './component/PDFPatientData/PDFPatentData';
import PDFPatientAnswers from './component/PDFPatientAnswers/PDFPatientAnswers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename={process.env.REACT_APP_BASENAME}>
          <Route path="/editor">
            <Editor />
          </Route>

          <Switch>
            <Route path="/form">
              <FormPaziente />
            </Route>

            <Route path="/home">
              <App />
            </Route>

            <Route path="/pdfDatiPaziente">
              <PDFPatientData />
            </Route>

            <Route path="/pdfRispostePaziente">
              <PDFPatientAnswers />
            </Route>
          </Switch>

        </Router>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
