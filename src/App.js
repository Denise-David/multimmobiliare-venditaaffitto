/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPDF, {
  PDFViewer,
  Page, Text, View, Document, StyleSheet,
  BlobProvider,
} from '@react-pdf/renderer';
import ButtonRentOrBuy from './component/ButtonRentOrBuy/ButtonRentOrBuy';
import store from './store/store/store';
import ImmoElement from './component/ImmoElement/ImmoElement';
import theme from '../theme';
import TitleDetail from './component/TitleDetail/TitleDetail';
import DetailPage from './component/DetailPage/DetailPage';
import DetailBox from './component/DetailBox/DetailBox';
import ContactForm from './component/ContactForm/ContactForm';
import CorrObject from './component/CorrObject/CorrObject';
import ImmoElementEvidence from './component/ImmoElement/ImmoElementEvidence/ImmoElement';
import FormRiservazione from './component/FormRiservazione/FormRiservazione';
import AnnuncioPDF from './component/AnnuncioPDF/AnnuncioPDF';
import Navigator from './component/Navigator/Navigator';

library.add(faArrowCircleRight);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>

        <Navigator />

      </Provider>
    </ThemeProvider>
  );
}
