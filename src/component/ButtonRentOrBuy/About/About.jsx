/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring';
import arr from '../../../img/arrowBack - Copia.png';
import useStyles from './style';
import {
  immo, rentOrSell, idRegionSelecter,
  idLocalSelected, idCategorySelected, priceLimits, setIdRegionSelected, goToThePage,
} from '../../../store/slice/ImmoSlice';

const trans13 = (x, y, z) => `translate(${x}px, ${y}px)`;
const About = () => {
  const dispatch = useDispatch();
  const [props13, set13] = useSpring(() => ({ xys: [0, 0, -1] }));
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Button
          onClick={() => dispatch(goToThePage())}
          style={{
            textTransform: 'none', marginLeft: '5em', marginBottom: '35px',
          }}
        >
          <Typography
            onMouseMove={() => set13({ xys: [20, 0, 0] })}
            onMouseLeave={() => set13({ xys: [0, 0, 0] })}
            style={{ color: '#ECECEC', fontSize: '25px' }}
          >
            Vedi altro
          </Typography>
          <div style={{ marginRight: '1em', textAlign: 'right', marginLeft: '10px' }}>
            <animated.img
              onMouseMove={() => set13({ xys: [20, 0, 0] })}
              onMouseLeave={() => set13({ xys: [0, 0, 0] })}
              src={arr}
              alt="copertina"
              style={{
                width: '30px',
                transform: props13.xys.interpolate(trans13),
                marginRight: '20px',
                cursor: 'pointer',
              }}
            />
          </div>

        </Button>
      </Grid>
    </>
  );
};

export default About;
