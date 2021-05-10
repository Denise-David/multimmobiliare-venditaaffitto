/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
import React, { useState, useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import {
  useDispatch, useSelector,
} from 'react-redux';
import useSupercluster from 'use-supercluster';
import { Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import useStyles from './style';
import {
  immo, latitude, longitude, setLatAndLngImmo, setArrayImmo,
} from '../../store/slice/ImmoSlice';

const getMapOptions = (maps) => ({
  streetViewControl: false,
  scaleControl: true,
  fullscreenControl: false,
  styles: [{
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off',
    }],
  }],
  gestureHandling: 'greedy',
  disableDoubleClickZoom: true,

  mapTypeControl: true,
  mapTypeId: maps.MapTypeId.ROADMAP,
  mapTypeControlOptions: {
    style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
    position: maps.ControlPosition.BOTTOM_CENTER,
    mapTypeIds: [
      maps.MapTypeId.ROADMAP,
      maps.MapTypeId.SATELLITE,
      maps.MapTypeId.HYBRID,
      maps.MapTypeId.TERRAIN,
    ],
  },

  zoomControl: true,
  clickableIcons: false,
});

const ClusterService = () => {
  Geocode.setApiKey('AIzaSyAaIsrxtSvDY6nO4wqRpb7ui-HAkJSGo70');
  Geocode.setLanguage('it');
  const dispatch = useDispatch();
  const classes = useStyles();
  const mapRef = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const immobili = useSelector(immo);
  const initialArray = [];
  const [arrayLatitude, setTheArray] = useState(initialArray);

  useEffect(() => {
    for (let i = 0; i < 12; i += 1) {
      let indirizzo = '';
      if (immobili.length !== 0) {
        indirizzo = `${immobili[i]?.indirizzo} ${immobili[i]?.cap} ${immobili[i]?.citta}`;
      }
      const { id } = immobili[i] ? immobili[i] : '';
      const cat = 'category';

      if (immobili.length !== 0) {
        Geocode.fromAddress(indirizzo).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;

            if (arrayLatitude.length < immobili.length) {
              dispatch(setTheArray((oldArray) => [...oldArray, {
                id, lat, lng, cat,
              }]));
            }
          },
          (error) => {
            console.error(error);
          },
        );
      }
    }
  }, [immobili]);

  const Marker = ({ children }) => children;
  const points = arrayLatitude?.map((im) => (
    {
      type: 'Feature',
      properties: {
        cluster: false,
        immoId: im.id,
        category: im.cat,

      },
      geometry: { type: 'Point', coordinates: [parseFloat(im.lng), parseFloat(im.lat)], id: im.id },

    }));
  const { clusters } = useSupercluster(
    {
      points,
      bounds,
      zoom,
      options: { radius: 300, maxZoom: 50 },
    },

  );
  return (
    <div className={classes.map}>
      <GoogleMapReact
        options={getMapOptions}
        bootstrapURLKeys={{ key: 'AIzaSyDoqKjf0F9Y2vaVUBGTqLs7JxM3PQMMp_A' }}
        defaultCenter={{ lat: 46.0762979, lng: 8.9707846 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >

        {clusters.map((cluster) => {
          const [longitudee, latitudee] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } = cluster.properties;
          const immobileSel = immobili.find((el) => el.id === cluster.properties.immoId);
          if (isCluster) {
            return (
              <Marker key={cluster.id} lat={latitudee} lng={longitudee}>
                <div
                  className={classes.clusterMarker3}
                  style={{
                    width: `${40 + (pointCount / points?.length) * 80}px`,
                    height: `${40 + (pointCount / points?.length) * 80}px`,
                    fontSize: `${15 + (pointCount / points?.length) * 60}px`,
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }
          return (
            <Marker key={cluster.properties.immoId} lat={latitudee} lng={longitudee}>
              <div
                onClick={() => window.location.href = `https://multimmobiliare.webflow.io/dettaglio?id=${immobileSel.id}`}
                className={classes.markerImage}
                style={{ backgroundImage: `url("https://api.multimmobiliare.com/img/immobili/${immobileSel.immagini[0].fileName}")` }}
              >
                <div className={classes.opacity}>
                  <Typography
                    align="center"
                    style={{
                      fontSize: '20px', color: '#ececec', paddingTop: '30px', fontWeight: 'bold', marginBottom: '-20px',
                    }}
                  >
                    {immobileSel ? immobileSel.locali.numero : ''}
                    {' '}
                    Locali
                  </Typography>
                  <Typography
                    align="center"
                    style={{
                      fontSize: '20px', color: '#ececec', padding: '10px', fontWeight: 'bold',
                    }}
                  >
                    <NumberFormat
                      value={immobileSel ? immobileSel.pigione : ''}
                      className="foo"
                      displayType="text"
                      thousandSeparator
                      renderText={(value, props) => <div {...props}>{value}</div>}
                    />

                    {' '}
                    CHF
                  </Typography>
                </div>
              </div>
            </Marker>
          );
        })}

      </GoogleMapReact>
      <Typography
        align="center"
        variant="h1"
        style={{
          padding: '1em',
          color: 'white',
          marginBottom: '-50px',
          '@media (min-width:600px)': {
            marginBottom: '0px',
          },
        }}
      >
        VENDITA / AFFITTO
      </Typography>
    </div>
  );
};

export default ClusterService;
