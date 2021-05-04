/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import ReactPDF, {
  Page, Text, View, Document, StyleSheet, Image, PDFViewer,
} from '@react-pdf/renderer';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import parseJSON from 'date-fns/parseJSON';
import { format } from 'date-fns';
import NumberFormat from 'react-number-format';
import {
  immo,
} from '../../store/slice/ImmoSlice';

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,

  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const AnnuncioPDF = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line global-require
  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);

  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

  const allImmo = useSelector(immo);

  const selectedImmo = allImmo.filter((elem) => elem.id === Number(parsed.id));
  const caracter = selectedImmo[0]?.immobiliCaratteristiche?.map((caratteristica) => (
    <Text key={caratteristica.caratteristica.id} style={{ fontWeight: 'bold', fontSize: '10px' }}>
      {caratteristica.caratteristica.nome}
    </Text>
  ));

  let dateFormat = '';
  let prezzo = '';
  let spese = '';

  const gallery = selectedImmo[0]?.immagini.map((immagine, index) => {
    if (index !== 0) {
      return (
        <Page size="A4" style={styles.page}>
          <Image
            style={{
              height: '50px',
              width: '300px',
              margin: 'auto',
              display: 'block',
              marginVertical: 15,
              marginHorizontal: 100,
            }}
            src="https://api.multimmobiliare.apton.ch/img/icons/Multi.png"
          />
          <View>

            <Image
              style={{
                marginVertical: 15,
                marginHorizontal: 100,
              }}
              src={{ uri: `https://api.multimmobiliare.apton.ch/img/immobili/${immagine.fileName}`, method: 'GET', headers: '' }}
            />
          </View>
          <Text style={{ borderTop: '3px solid red' }} />
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}
              Multimmobiliare e Partecipazioni SA

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              www.multimmobiliare.ch

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              Telefono +41 91 826 21 40

            </Text>

          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              email info@multimmobiliare.ch

            </Text>

          </View>

        </Page>
      );
    }
  });

  if (selectedImmo[0] !== undefined) {
    const date = parseJSON(selectedImmo[0]?.disponibilita);
    dateFormat = format(new Date(date), 'dd.MM.yyyy');
    prezzo = (
      <NumberFormat
        value={selectedImmo[0].pigione}
        className="foo"
        displayType="text"
        thousandSeparator
        renderText={(value, props) => <div {...props}>{value}</div>}
      />
    );
    spese = (
      <NumberFormat
        value={selectedImmo[0]?.spese}
        className="foo"
        displayType="text"
        thousandSeparator
        renderText={(value, props) => <div {...props}>{value}</div>}
      />
    );
  }
  return (
    <PDFViewer style={{
      height: window.screen.height / 1.1,
      width: window.screen.width,
    }}
    >
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Image
              style={{
                height: '50px',
                width: '300px',
                margin: 'auto',
                display: 'block',
                marginVertical: 15,
                marginHorizontal: 100,
              }}
              src="https://api.multimmobiliare.apton.ch/img/icons/Multi.png"
            />
          </View>
          <View style={styles.section}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{selectedImmo[0]?.titolo}</Text>
          </View>
          <View>
            <Image
              style={{
                marginVertical: 15,
                marginHorizontal: 100,
              }}
              src={{ uri: `https://api.multimmobiliare.apton.ch/img/immobili/${selectedImmo[0]?.immagini[0]?.fileName}`, method: 'GET', headers: '' }}
            />
          </View>
          <Text style={{ borderTop: '3px solid red' }} />
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}
              Multimmobiliare e Partecipazioni SA

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              www.multimmobiliare.ch

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              Telefono +41 91 826 21 40

            </Text>

          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              email info@multimmobiliare.ch

            </Text>

          </View>

        </Page>
        <Page size="A4" style={styles.page}>
          <Image
            style={{
              height: '50px',
              width: '300px',
              margin: 'auto',
              display: 'block',
              marginVertical: 15,
              marginHorizontal: 100,
            }}
            src="https://api.multimmobiliare.apton.ch/img/icons/Multi.png"
          />
          <View style={styles.section}>
            <Text style={{ fontWeight: 'bold' }}>{selectedImmo[0]?.titolo}</Text>
            <Text style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }}>
              {selectedImmo[0]?.contratto === 0 ? 'Affitto' : 'Vendita'}
              {' '}
              CHF
              {' '}
              {prezzo}
            </Text>
            <Text style={{ fontSize: '15px', fontWeight: '800', marginTop: '10px' }}>
              Località

              {' '}
              {selectedImmo[0]?.citta}

            </Text>
            <Text style={{ fontSize: '15px', fontWeight: '800', marginTop: '10px' }}>
              Descrizione
            </Text>
            <Text style={{ fontSize: '10px', fontWeight: '800', marginTop: '10px' }}>
              {selectedImmo[0]?.descrizione}
            </Text>
            <Text style={{ fontSize: '10px', fontWeight: '800', marginTop: '10px' }}>
              Prezzo:
              {' '}
              {prezzo}
            </Text>
            {(selectedImmo[0]?.contratto === 1 || selectedImmo[0]?.spese === null) ? (
              <Text style={{ fontSize: '10px', fontWeight: '800', marginTop: '10px' }} />
            )
              : (
                <Text style={{ fontSize: '10px', fontWeight: '800', marginTop: '10px' }}>
                  Spese:
                  {' '}
                  {spese}
                </Text>
              )}
          </View>

          <Text style={{ borderTop: '3px solid red' }} />
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}
              Multimmobiliare e Partecipazioni SA

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              www.multimmobiliare.ch

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              Telefono +41 91 826 21 40

            </Text>

          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              email info@multimmobiliare.ch

            </Text>

          </View>

        </Page>
        <Page size="A4" style={styles.page}>
          <Image
            style={{
              height: '50px',
              width: '300px',
              margin: 'auto',
              display: 'block',
              marginVertical: 15,
              marginHorizontal: 100,
            }}
            src="https://api.multimmobiliare.apton.ch/img/icons/Multi.png"
          />
          <View style={styles.section}>
            <Text style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>Dati principali</Text>
            <Text style={{ fontWeight: 'bold', fontSize: '10px', marginTop: '10px' }}>
              {' '}
              Piano:
              {' '}
              {selectedImmo[0]?.piano}
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: '10px' }}>
              {' '}
              Locali:
              {' '}
              {selectedImmo[0]?.locali.numero}
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: '10px' }}>
              {' '}
              Metratura:
              {' '}
              {selectedImmo[0]?.metratura}
            </Text>
            {selectedImmo[0]?.contratto === 1
              ? <Text style={{ fontWeight: 'bold', fontSize: '10px' }} />
              : (
                <Text style={{ fontWeight: 'bold', fontSize: '10px' }}>
                  {' '}
                  Disponibile da:
                  {' '}
                  {dateFormat}
                </Text>
)}
            <Text style={{ fontWeight: 'bold', fontSize: '10px' }}>
              {' '}
              Tipologia:
              {' '}
              {selectedImmo[0]?.tipologia.nome}
            </Text>

          </View>
          <View style={styles.section}>
            <Text style={{ fontWeight: 'bold', borderBottom: '1px solid black', marginBottom: '10px' }}>Caratteristiche</Text>
            {caracter}
          </View>

          <Text style={{ borderTop: '3px solid red' }} />
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}
              Multimmobiliare e Partecipazioni SA

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              www.multimmobiliare.ch

            </Text>
            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              Telefono +41 91 826 21 40

            </Text>

          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 35,
          }}
          >

            <Text style={{
              fontSize: '10px',
              marginTop: '10px',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'stretch',
            }}
            >
              {' '}

              email info@multimmobiliare.ch

            </Text>

          </View>

        </Page>
        {gallery}
      </Document>
    </PDFViewer>
  );
};
export default AnnuncioPDF;
