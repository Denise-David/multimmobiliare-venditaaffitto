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
  Geocode.setApiKey('AIzaSyDoqKjf0F9Y2vaVUBGTqLs7JxM3PQMMp_A');
  Geocode.setLanguage('it');
  const dispatch = useDispatch();
  const classes = useStyles();
  const mapRef = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const immobili = useSelector(immo);
  const initialArray = [];
  const [arrayLatitude, setTheArray] = useState(initialArray);
  const [v, setV] = useState();
  const array = [];
  useEffect(() => {
    setV('VENDITA / AFFITTO');
    for (let i = 0; i < immobili.length; i += 1) {
      if (immobili[i].visibilita === true) {
        let indirizzo = '';
        if (immobili.length !== 0) {
          indirizzo = `${immobili[i]?.indirizzo} ${immobili[i]?.cap} ${immobili[i]?.citta}`;
        }
        const { id } = immobili[i] ? immobili[i] : '';
        const cat = 'category';
        if (immobili.length !== 0 && immobili[i].latitude !== null) {
          const lat = immobili[i].latitude;
          const lng = immobili[i].longitude;
          array.push({
            id, lat, lng, cat,
          });
        }
      }
    }
    setTheArray(array);
  }, [immobili]);

  const immobiliLatLng = immobili.filter((x) => x.latitude !== null);
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
      options: { radius: 300, maxZoom: 100 },
    },

  );

  if (clusters) {
    if (arrayLatitude.length <= immobiliLatLng.length) {
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

              const image = immobileSel?.immagini?.length < 1 ? false
                : [...immobileSel?.immagini].sort((a, b) => a.posizione - b.posizione);
              return (
                <Marker key={cluster.properties.immoId} lat={latitudee} lng={longitudee}>
                  <div
                    onClick={() => window.location.href = `${window.location.href.substring(0, window.location.href.indexOf('/'))}dettaglio?id=${immobileSel.id}`}
                    className={classes.markerImage}
                    style={{ backgroundImage: image[0]?.fileName !== undefined ? `url("https://api.multimmobiliare.com/img/immobili/${image[0]?.fileName}")` : 'url("https://api.multimmobiliare.com/img/noImage.png")' }}
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
            {v}
          </Typography>

        </div>

      );
    } return (<div style={{ height: '450px', display: 'block', margin: 'auto' }} />);
  }
};

export default ClusterService;
