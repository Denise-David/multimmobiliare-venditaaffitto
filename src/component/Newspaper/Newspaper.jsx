/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import FlipPage from 'react-flip-page';
import { Grid, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { MapInteractionCSS } from 'react-map-interaction';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import useStyles from './style';

const trans = (x, y, z) => `translate(0px, ${y}px)`;
const trans1 = (x, y, z) => `translate(0px, ${y}px)`;
const trans2 = (x, y, z) => `translate(0px, ${y}px)`;
const trans3 = (x, y, z) => `translate(0px, ${y}px)`;
const trans4 = (x, y, z) => `translate(0px, ${y}px)`;
const trans5 = (x, y, z) => `translate(0px, ${y}px)`;
const trans6 = (x, y, z) => `translate(0px, ${y}px)`;
const trans7 = (x, y, z) => `translate(0px, ${y}px)`;
const trans8 = (x, y, z) => `translate(0px, ${y}px)`;
const trans9 = (x, y, z) => `translate(0px, ${y}px)`;
const trans10 = (x, y, z) => `translate(0px, ${y}px)`;
const trans11 = (x, y, z) => `translate(0px, ${y}px)`;
const trans12 = (x, y, z) => `translate(0px, ${y}px)`;
const trans13 = (x, y, z) => `translate(0px, ${y}px)`;
const trans14 = (x, y, z) => `translate(0px, ${y}px)`;

const Newspaper = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props1, set1] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props2, set2] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props3, set3] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props4, set4] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props5, set5] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props6, set6] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props7, set7] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props8, set8] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props9, set9] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props10, set10] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props11, set11] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props12, set12] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props13, set13] = useSpring(() => ({ xys: [0, 0, -1] }));
  const [props14, set14] = useSpring(() => ({ xys: [0, 0, -1] }));

  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);
  const classes = useStyles();
  const [scaled, setScale] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setScale(0.2);
    } else {
      setScale(1);
    }
  }, [window.innerWidth]);
  if (scaled !== 0) {
    return (
      <div style={{ paddingTop: '3em' }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {parsed.articolo === 'regione1'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  s
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width={window.innerWidth}
                    height={window.innerHeight}
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/laRegioneCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/laRegioneArt1.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'welcome'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width={window.innerWidth}
                    height={window.innerHeight}
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/welcomeCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/WelcomeArt1.png" alt="copertina" />

                    </articolo>
                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'ticino'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/ticinoCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/ticinoArt1.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'stile'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/stileCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/stileArt1.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'turrita'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/turritaCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/turritaArt.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'tio'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/tioCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/tioArt.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}

          {parsed.articolo === 'archi'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/archiCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/archiArt1.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'libera'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/liberaCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/liberaArt.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}

          {parsed.articolo === 'travel'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/travelCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/travelArt.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}

          {parsed.articolo === 'adv'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/advCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/advArt1.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}

          {parsed.articolo === 'italia'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: 0.2,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/italiaTravelCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/italiaTravelArt.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'meeting'
            ? (
              <div style={{
                width: window.innerWidth,
                '@media (min-width:600px)': {
                  width: '1772px',
                },
              }}
              >
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/meetingCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/meetingArt.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'quality'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/qualityCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/qualityArt1.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/qualityArt3.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'trend'
            ? (
              <div className={classes.padding}>
                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/trendCopertina.png" alt="copertina" />

                    </articolo>
                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/trendArt1.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>
            ) : <></>}
          {parsed.articolo === 'regione2'
            ? (

              <div className={classes.padding}>

                <MapInteractionCSS
                  disablePan
                  defaultValue={{
                    scale: scaled,
                    translation: { x: 0, y: 0 },
                  }}
                >
                  <FlipPage
                    orientation="horizontal"
                    uncutPages
                    showSwipeHint
                    width="1772"
                    height="1257"
                    pageBackground="#1a1b1f"
                  >

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/laRegioneCopertina.png" alt="copertina" />

                    </articolo>

                    <articolo>

                      <img src="https://api.multimmobiliare.com/img/articoli/regione2Art.png" alt="copertina" />

                    </articolo>

                  </FlipPage>
                </MapInteractionCSS>
              </div>

            ) : <></>}
          <div>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4" align="center" style={{ marginBottom: '30px', color: 'white' }}>
                Altri articoli
              </Typography>

              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=regione1')}
                onMouseMove={() => set1({ xys: [0, -38, 0] })}
                onMouseLeave={() => set1({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/laRegione.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props1?.xys.interpolate(trans1),
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=welcome')}
                onMouseMove={() => set({ xys: [0, -38, 0] })}
                onMouseLeave={() => set({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/welcomeCop.png"
                alt="https://api.multimmobiliare.com/img/copertine/welcomeCop.png"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props?.xys.interpolate(trans), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=regione2')}
                onMouseMove={() => set2({ xys: [0, -38, 0] })}
                onMouseLeave={() => set2({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/laRegione.png"
                alt="https://api.multimmobiliare.com/img/copertine/laRegione.png"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props2?.xys.interpolate(trans2), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=tio')}
                onMouseMove={() => set3({ xys: [0, -38, 0] })}
                onMouseLeave={() => set3({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/20min.png"
                alt="https://api.multimmobiliare.com/img/copertine/20min.png"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props3?.xys.interpolate(trans3), marginTop: '-5em',
                }}
              />

              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=travel')}
                onMouseMove={() => set4({ xys: [0, -38, 0] })}
                onMouseLeave={() => set4({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/travel.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props4?.xys.interpolate(trans4), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=archi')}
                onMouseMove={() => set5({ xys: [0, -38, 0] })}
                onMouseLeave={() => set5({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/archi.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props5?.xys.interpolate(trans5), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=stile')}
                onMouseMove={() => set6({ xys: [0, -38, 0] })}
                onMouseLeave={() => set6({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/stile.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props6?.xys.interpolate(trans6), marginTop: '-3em',
                }}
              />

              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=turrita')}
                onMouseMove={() => set7({ xys: [0, -38, 0] })}
                onMouseLeave={() => set7({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/turrita.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props7?.xys.interpolate(trans7), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=ticino')}
                onMouseMove={() => set8({ xys: [0, -38, 0] })}
                onMouseLeave={() => set8({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/ticino.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props8?.xys.interpolate(trans8), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=italia')}
                onMouseMove={() => set9({ xys: [0, -38, 0] })}
                onMouseLeave={() => set9({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/italiaTravel.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props9?.xys.interpolate(trans9), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=libera')}
                onMouseMove={() => set10({ xys: [0, -38, 0] })}
                onMouseLeave={() => set10({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/liberaTV.jpg"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props10?.xys.interpolate(trans10), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=quality')}
                onMouseMove={() => set11({ xys: [0, -38, 0] })}
                onMouseLeave={() => set11({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/quality.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props11?.xys.interpolate(trans11), marginTop: '-3em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=trend')}
                onMouseMove={() => set12({ xys: [0, -38, 0] })}
                onMouseLeave={() => set12({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/trend.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props12?.xys.interpolate(trans12), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=adv')}
                onMouseMove={() => set13({ xys: [0, -38, 0] })}
                onMouseLeave={() => set13({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/Adv.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props13?.xys.interpolate(trans13), marginTop: '-5em',
                }}
              />
              <animated.img
                onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=meeting')}
                onMouseMove={() => set14({ xys: [0, -38, 0] })}
                onMouseLeave={() => set14({ xys: [0, 0, 0] })}
                src="https://api.multimmobiliare.com/img/copertine/meeting.png"
                alt="copertina"
                style={{
                  width: '300px', boxShadow: '-4px -70px 80px -20px #000000', transform: props14?.xys.interpolate(trans14), marginTop: '-5em',
                }}
              />

            </Grid>
          </div>
        </Grid>
      </div>
    );
  } return (<></>);
};
export default Newspaper;
