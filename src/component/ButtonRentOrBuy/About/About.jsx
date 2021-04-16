/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import useStyles from './style';
import {
  immo, rentOrSell, idRegionSelecter,
  idLocalSelected, idCategorySelected, priceLimits, setIdRegionSelected, goToThePage,
} from '../../../store/slice/ImmoSlice';

const About = () => {
  const dispatch = useDispatch();
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
          <Typography variant="h6" style={{ color: '#ECECEC' }}>
            Vedi altro
          </Typography>
          <div style={{ marginRight: '1em', textAlign: 'right', marginLeft: '10px' }}>
            <FontAwesomeIcon icon="arrow-circle-right" size="2x" style={{ color: '#131313' }} />
          </div>

        </Button>
      </Grid>
    </>
  );
};

export default About;
