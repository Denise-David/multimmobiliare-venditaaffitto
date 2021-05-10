/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import DetailPage from '../DetailPage/DetailPage';
import DetailBox from '../DetailBox/DetailBox';
import ContactForm from '../ContactForm/ContactForm';
import CorrObject from '../CorrObject/CorrObject';
import FormRiservazione from '../FormRiservazione/FormRiservazione';
import ButtonRentOrBuy from '../ButtonRentOrBuy/ButtonRentOrBuy';
import ImmoElement from '../ImmoElement/ImmoElement';
import AnnuncioPDF from '../AnnuncioPDF/AnnuncioPDF';
import Newspaper from '../Newspaper/Newspaper';
import ClusterService from '../ClusterService/ClusterService';

const Navigator = (elemento) => {
  if (document.URL.includes('riservazioni')) {
    return (<FormRiservazione />);
  } if (document.URL.includes('dettaglio')) {
    return (
      <>

        <div>
          <DetailPage />
        </div>

        {' '}
        <CorrObject />

      </>
    );
  } if (document.URL.includes('pdf')) {
    return (
      <div>
        <AnnuncioPDF />

      </div>
    );
  } if (document.URL.includes('articolo')) {
    return (
      <div>
        <Newspaper />

      </div>
    );
  }
  if (document.URL.includes('vendita-affitto')) {
    return (
      <div>
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
      </div>
    );
  }
  return (
    <div>
      <ButtonRentOrBuy />
      <ImmoElement />
    </div>
  );
};

export default Navigator;
