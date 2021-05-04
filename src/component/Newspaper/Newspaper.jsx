/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import FlipPage from 'react-flip-page';
import { Grid, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

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
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1800"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/laRegioneCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/laRegioneArt1.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'welcome'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>

                <img src="https://api.multimmobiliare.apton.ch/img/articoli/welcomeCopertina.png" alt="copertina" />

              </articolo>
              <articolo>

                <img src="https://api.multimmobiliare.apton.ch/img/articoli/WelcomeArt1.png" alt="copertina" />

              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'ticino'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/ticinoCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/ticinoArt1.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'stile'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/stileCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/stileArt1.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'turrita'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/turritaCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/turritaArt.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'tio'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/tioCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/tioArt.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}

        {parsed.articolo === 'archi'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/archiCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/archiArt1.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'libera'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/liberaCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/liberaArt.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}

        {parsed.articolo === 'travel'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/travelCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/travelArt.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}

        {parsed.articolo === 'adv'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/advCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/advArt1.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}

        {parsed.articolo === 'italia'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/italiaTravelCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/italiaTravelArt.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'meeting'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/meetingCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/meetingArt.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'quality'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/qualityCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/qualityArt1.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/qualityArt3.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'trend'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/trendCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/trendArt1.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
          ) : <></>}
        {parsed.articolo === 'regione2'
          ? (
            <FlipPage
              orientation="horizontal"
              uncutPages
              showSwipeHint
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>

                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/laRegioneCopertina.png" alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src="https://api.multimmobiliare.apton.ch/img/articoli/regione2Art.png" alt="copertina" />
                </div>
              </articolo>

            </FlipPage>
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
              src="https://api.multimmobiliare.apton.ch/img/copertine/laRegione.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props1.xys.interpolate(trans1),
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=welcome')}
              onMouseMove={() => set({ xys: [0, -38, 0] })}
              onMouseLeave={() => set({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/welcomeCop.png"
              alt="https://api.multimmobiliare.apton.ch/img/copertine/welcomeCop.png"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props.xys.interpolate(trans), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=regione2')}
              onMouseMove={() => set2({ xys: [0, -38, 0] })}
              onMouseLeave={() => set2({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/laRegione.png"
              alt="https://api.multimmobiliare.apton.ch/img/copertine/laRegione.png"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props2.xys.interpolate(trans2), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=tio')}
              onMouseMove={() => set3({ xys: [0, -38, 0] })}
              onMouseLeave={() => set3({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/20min.png"
              alt="https://api.multimmobiliare.apton.ch/img/copertine/20min.png"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props3.xys.interpolate(trans3), marginTop: '-5em',
              }}
            />

            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=travel')}
              onMouseMove={() => set4({ xys: [0, -38, 0] })}
              onMouseLeave={() => set4({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/travel.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props4.xys.interpolate(trans4), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=archi')}
              onMouseMove={() => set5({ xys: [0, -38, 0] })}
              onMouseLeave={() => set5({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/archi.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props5.xys.interpolate(trans5), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=stile')}
              onMouseMove={() => set6({ xys: [0, -38, 0] })}
              onMouseLeave={() => set6({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/stile.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props6.xys.interpolate(trans6), marginTop: '-3em',
              }}
            />

            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=turrita')}
              onMouseMove={() => set7({ xys: [0, -38, 0] })}
              onMouseLeave={() => set7({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/turrita.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props7.xys.interpolate(trans7), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=ticino')}
              onMouseMove={() => set8({ xys: [0, -38, 0] })}
              onMouseLeave={() => set8({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/ticino.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props8.xys.interpolate(trans8), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=italia')}
              onMouseMove={() => set9({ xys: [0, -38, 0] })}
              onMouseLeave={() => set9({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/italiaTravel.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props9.xys.interpolate(trans9), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=libera')}
              onMouseMove={() => set10({ xys: [0, -38, 0] })}
              onMouseLeave={() => set10({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/liberaTV.jpg"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props10.xys.interpolate(trans10), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=quality')}
              onMouseMove={() => set11({ xys: [0, -38, 0] })}
              onMouseLeave={() => set11({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/quality.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props11.xys.interpolate(trans11), marginTop: '-3em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=trend')}
              onMouseMove={() => set12({ xys: [0, -38, 0] })}
              onMouseLeave={() => set12({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/trend.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props12.xys.interpolate(trans12), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=adv')}
              onMouseMove={() => set13({ xys: [0, -38, 0] })}
              onMouseLeave={() => set13({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/Adv.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props13.xys.interpolate(trans13), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=meeting')}
              onMouseMove={() => set14({ xys: [0, -38, 0] })}
              onMouseLeave={() => set14({ xys: [0, 0, 0] })}
              src="https://api.multimmobiliare.apton.ch/img/copertine/meeting.png"
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -70px 80px -20px #000000', transform: props14.xys.interpolate(trans14), marginTop: '-5em',
              }}
            />

          </Grid>
        </div>
      </Grid>
    </div>
  );
};
export default Newspaper;
