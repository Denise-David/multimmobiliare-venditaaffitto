/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import RoomIcon from '@material-ui/icons/Room';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Divider, Slide } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import SimpleImageSlider from 'react-simple-image-slider';
import Dialog from '@material-ui/core/Dialog';
import Link from '@material-ui/core/Link';
import Carousel from 'react-material-ui-carousel';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './style';
import TitleDetail from '../TitleDetail/TitleDetail';

const ImageSlide = (selectedImmo) => {
  const classes = useStyles();
  const selImmo = selectedImmo.selectedImmo;
  const [iMin, setIMin] = useState(0);
  const [iMax, setIMax] = useState(3);
  const [transition, setTransition] = useState('right');
  const [idx, setIdx] = useState(1);
  const [dialog, openDialog] = useState(false);

  const onOpen = (i) => {
    setIdx(i);
    openDialog(true);
  };

  let numberSlide;

  if (Number.isInteger(selImmo.immagini.length / 4)) {
    numberSlide = selImmo.immagini.length / 4;
  } else {
    numberSlide = parseInt(selImmo.immagini.length / 4, 10) + 1;
  }

  const iTotalMax = 4 * numberSlide - 1;

  const setIndex = () => {
    if (iMax < iTotalMax) {
      setIMin(iMax + 1);
      setIMax(iMax + 4);
    } else {
      setIMin(0);
      setIMax(3);
    }
    setTransition('left');
  };
  const setIndexInverse = () => {
    if (iMin === 0) {
      setIMin(iTotalMax - 3);
      setIMax(iTotalMax);
    } else {
      setIMin(iMin - 4);
      setIMax(iMax - 4);
    }
    setTransition('right');
  };

  const listImage = !selImmo.immagini[iMin] ? <></>
    : (
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Link href="#" onClick={() => onOpen(iMin)}>
              <CardMedia
                className={classes.media}
                image={`https://api.fideconto.ch/img/immobili/${selImmo.immagini[iMin].fileName}`}
                title="foto immobile"
              />
            </Link>

          </Grid>

          <Grid item xs={12} sm={6}>
            {!selImmo.immagini[iMin + 1] ? <></>
              : (
                <Link href="#" onClick={() => onOpen(iMin + 1)}>
                  <CardMedia
                    className={classes.media}
                    image={`https://api.fideconto.ch/img/immobili/${selImmo.immagini[iMin + 1].fileName}`}
                    title="foto immobile"
                  />
                </Link>
              )}

          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            {!selImmo.immagini[iMin + 2] ? <></>
              : (
                <Link href="#" onClick={() => onOpen(iMin + 2)}>
                  <CardMedia
                    className={classes.media}
                    image={`https://api.fideconto.ch/img/immobili/${selImmo.immagini[iMin + 2].fileName}`}
                    title="foto immobile"
                  />
                </Link>
              )}

          </Grid>
          <Grid item xs={12} sm={6}>
            {!selImmo.immagini[iMax] ? <></>
              : (
                <Link href="#" onClick={() => onOpen(iMax)}>
                  <CardMedia
                    className={classes.media}
                    image={`https://api.fideconto.ch/img/immobili/${selImmo.immagini[iMax].fileName}`}
                    title="foto immobile"
                  />
                </Link>
              )}

          </Grid>
        </Grid>
      </>
    );

  const listLargeImage = !selImmo.immagini ? <></>
    : selImmo.immagini.map((elem, index) => (
      <CardMedia
        key={elem.id}
        className={classes.media2}
        style={{ backgroundColor: 'black' }}
        image={`https://api.fideconto.ch/img/immobili/${elem.fileName}`}
        title="foto immobile principale"
      />

    ));
  return (
    <>

      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div style={{ paddingRight: '16%', paddingLeft: '16%' }}>
            <TitleDetail selectedImmo={selImmo || []} />
          </div>

          <Carousel
            navButtonsAlwaysInvisible={selImmo.immagini.length < 5}
            prev={() => setIndexInverse()}
            next={() => setIndex()}
            navButtonsAlwaysVisible
            animation="slide"
            autoPlay={false}
            style={{ width: '1000px', height: '500px' }}
          >
            {listImage}
          </Carousel>

        </Grid>

      </>
      );
      <Dialog
        fullScreen
        open={dialog}
        onClose={() => openDialog(false)}
        PaperProps={{
          style: {
            backgroundColor: '#1b1c1d',
            boxShadow: 'none',
          },
        }}
      >
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <IconButton color="secondary" onClick={() => openDialog(false)}>
            <CloseIcon style={{
              textAlign: 'right', fontSize: '30px', marginTop: '450%',
            }}
            />
          </IconButton>
        </Grid>
        <Carousel
          navButtonsAlwaysVisible
          animation="slide"
          autoPlay={false}
          index={idx}
        >
          {listLargeImage}
        </Carousel>

      </Dialog>
    </>
  );
};
export default ImageSlide;
