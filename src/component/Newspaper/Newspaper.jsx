/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import FlipPage from 'react-flip-page';
import { Grid, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import welcome from '../../img/welcomeCopertina.png';
import art1 from '../../img/WelcomeArt1.png';
import black from '../../img/Black.png';
import art2 from '../../img/WelcomeArt2.png';
import regione from '../../img/laRegione.png';
import wel from '../../img/welcomeCop.png';
import min from '../../img/20min.png';
import travel from '../../img/travel.png';
import archi from '../../img/archi.png';
import stile from '../../img/stile.png';
import turrita from '../../img/turrita.png';
import ticino from '../../img/ticino.png';
import italiaTravel from '../../img/italiaTravel.png';
import libera from '../../img/liberaTV.jpg';
import quality from '../../img/quality.png';
import trend from '../../img/trend.png';
import adv from '../../img/Adv.png';
import meeting from '../../img/meeting.png';
import copReg from '../../img/laRegioneCopertina.png';
import artiReg from '../../img/laRegioneArt1.png';
import tiCop from '../../img/ticinoCopertina.png';
import tiArt1 from '../../img/ticinoArti1.png';
import tiArt2 from '../../img/ticinoArti2.png';
import stileCop from '../../img/stileCopertina.png';
import stileArt1 from '../../img/stileArt1.png';
import turritaArt from '../../img/turritaArt.png';
import turritaCop from '../../img/turritaCopertina.png';
import tioCopertina from '../../img/tioCopertina.png';
import tioArt from '../../img/tioArt.png';
import archiCop from '../../img/archiCopertina.png';
import archiArt1 from '../../img/archiArt1.png';
import archiArt2 from '../../img/archiArt2.png';
import liberaCop from '../../img/liberaCopertina.png';
import liberaArt from '../../img/liberaArt.png';
import travCopertina from '../../img/travel copertina.png';
import travArt from '../../img/travelArt.png';
import advCop from '../../img/advCopertina.png';
import advArt1 from '../../img/advArt1.png';
import advArt2 from '../../img/advArt2.png';
import itCop from '../../img/italiaTravelCopertina.png';
import itArt from '../../img/italiaTravelArt.png';
import meetCop from '../../img/meetingCopertina.png';
import meetArt from '../../img/meetingArt.png';
import qArt1 from '../../img/qualityArt1.png';
import qArt2 from '../../img/qualityArt2.png';
import qArt3 from '../../img/qualityArt3.png';
import qArt4 from '../../img/qualityArt4.png';
import qCop from '../../img/qualityCopertina.png';
import trendCop from '../../img/trendCopertina.png';
import trendArt1 from '../../img/trendArt1.png';
import trendArt2 from '../../img/trendArt2.png';
import reg2Art from '../../img/regione2Art.png';

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
    <div>
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
              width="1772"
              height="1257"
              pageBackground="#1a1b1f"
            >

              <articolo>
                <div>
                  <img src={black} alt="copertina" />
                  <img src={copReg} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={artiReg} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                <div>
                  <img src={black} alt="copertina" />
                  <img src={welcome} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={art1} alt="copertina" />
                  <img src={art2} alt="copertina" />
                </div>
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
                  <img src={black} alt="copertina" />
                  <img src={tiCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={tiArt1} alt="copertina" />
                  <img src={tiArt2} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={stileCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={stileArt1} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={turritaCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={turritaArt} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={tioCopertina} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={tioArt} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={archiCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={archiArt1} alt="copertina" />
                  <img src={archiArt2} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={liberaCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={liberaArt} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={travCopertina} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={travArt} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={advCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={advArt1} alt="copertina" />
                  <img src={advArt2} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={itCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={itArt} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={meetCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={meetArt} alt="copertina" />
                  <img src={black} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={qCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={qArt1} alt="copertina" />
                  <img src={qArt2} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={qArt3} alt="copertina" />
                  <img src={qArt4} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={trendCop} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={trendArt1} alt="copertina" />
                  <img src={trendArt2} alt="copertina" />
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
                  <img src={black} alt="copertina" />
                  <img src={copReg} alt="copertina" />
                </div>
              </articolo>
              <articolo>
                <div>
                  <img src={reg2Art} alt="copertina" />
                  <img src={black} alt="copertina" />
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
              src={regione}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props1.xys.interpolate(trans1),
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=welcome')}
              onMouseMove={() => set({ xys: [0, -38, 0] })}
              onMouseLeave={() => set({ xys: [0, 0, 0] })}
              src={wel}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props.xys.interpolate(trans), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=regione2')}
              onMouseMove={() => set2({ xys: [0, -38, 0] })}
              onMouseLeave={() => set2({ xys: [0, 0, 0] })}
              src={regione}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props2.xys.interpolate(trans2), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=tio')}
              onMouseMove={() => set3({ xys: [0, -38, 0] })}
              onMouseLeave={() => set3({ xys: [0, 0, 0] })}
              src={min}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props3.xys.interpolate(trans3), marginTop: '-5em',
              }}
            />

            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=travel')}
              onMouseMove={() => set4({ xys: [0, -38, 0] })}
              onMouseLeave={() => set4({ xys: [0, 0, 0] })}
              src={travel}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props4.xys.interpolate(trans4), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=archi')}
              onMouseMove={() => set5({ xys: [0, -38, 0] })}
              onMouseLeave={() => set5({ xys: [0, 0, 0] })}
              src={archi}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props5.xys.interpolate(trans5), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=stile')}
              onMouseMove={() => set6({ xys: [0, -38, 0] })}
              onMouseLeave={() => set6({ xys: [0, 0, 0] })}
              src={stile}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props6.xys.interpolate(trans6), marginTop: '-3em',
              }}
            />

            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=turrita')}
              onMouseMove={() => set7({ xys: [0, -38, 0] })}
              onMouseLeave={() => set7({ xys: [0, 0, 0] })}
              src={turrita}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props7.xys.interpolate(trans7), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=ticino')}
              onMouseMove={() => set8({ xys: [0, -38, 0] })}
              onMouseLeave={() => set8({ xys: [0, 0, 0] })}
              src={ticino}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props8.xys.interpolate(trans8), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=italia')}
              onMouseMove={() => set9({ xys: [0, -38, 0] })}
              onMouseLeave={() => set9({ xys: [0, 0, 0] })}
              src={italiaTravel}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props9.xys.interpolate(trans9), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=libera')}
              onMouseMove={() => set10({ xys: [0, -38, 0] })}
              onMouseLeave={() => set10({ xys: [0, 0, 0] })}
              src={libera}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props10.xys.interpolate(trans10), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=quality')}
              onMouseMove={() => set11({ xys: [0, -38, 0] })}
              onMouseLeave={() => set11({ xys: [0, 0, 0] })}
              src={quality}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props11.xys.interpolate(trans11), marginTop: '-3em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=trend')}
              onMouseMove={() => set12({ xys: [0, -38, 0] })}
              onMouseLeave={() => set12({ xys: [0, 0, 0] })}
              src={trend}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props12.xys.interpolate(trans12), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=adv')}
              onMouseMove={() => set13({ xys: [0, -38, 0] })}
              onMouseLeave={() => set13({ xys: [0, 0, 0] })}
              src={adv}
              alt="copertina"
              style={{
                width: '300px', boxShadow: '-4px -10px 20px 12px #000000', transform: props13.xys.interpolate(trans13), marginTop: '-5em',
              }}
            />
            <animated.img
              onClick={() => window.open('https://multimmobiliare.webflow.io/articolo?articolo=meeting')}
              onMouseMove={() => set14({ xys: [0, -38, 0] })}
              onMouseLeave={() => set14({ xys: [0, 0, 0] })}
              src={meeting}
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
