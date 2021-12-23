/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@material-ui/core';
import ClusterService from './component/ClusterService/ClusterService';
import ButtonRentOrBuy from './component/ButtonRentOrBuy/ButtonRentOrBuy';
import ImmoElement from './component/ImmoElement/ImmoElement';
import store from './store/store/store';

import theme from '../theme';

library.add(faArrowCircleRight);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>

        <ClusterService />
        <div style={{ padding: '3em' }} />
        <div style={{
          marginLeft: '5px',
          '@media (min-width:600px)': {
            paddingRight: '82px', marginLeft: '82px',
          },
        }}
        >
          <ButtonRentOrBuy />
          <ImmoElement />
        </div>
      </Provider>
    </ThemeProvider>
  );
}
