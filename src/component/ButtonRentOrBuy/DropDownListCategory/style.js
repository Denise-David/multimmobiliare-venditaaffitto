// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  ddl: {
    margin: '1em',
    padding: '1em',
    minWidth: '18em',
    '@media (min-width:600px)': {
      minWidth: '18em',
    },
  },
  whiteColor: {
    color: '#ECECEC',
    fontSize: '15px',
    '@media (min-width:600px)': {
      fontSize: '25px',
    },
    marginRight: '1em',
    marginLeft: '25px',
    marginTop: '-10px',
    paddingRight: '10px',
    paddingLeft: '10px',
    zIndex: '100',
    backgroundColor: 'black',

  },
  root: {

    borderColor: 'white',
  },
  prova: {
    width: '18em',
    color: '#ECECEC',
  },
  icon: {
    fill: '#ECECEC',
  },
  labelRoot: {
    fontSize: '15px',
    '@media (min-width:600px)': {
      fontSize: '25px',
    },
    color: '#131313 !important',
    backgroundColor: 'black',
    marginTop: '-5px',
    paddingRight: '5px',
    '&$labelFocused': {
      color: '#131313 !important',
    },
  },
  labelFocused: {
    fontSize: '15px',
    '@media (min-width:600px)': {
      fontSize: '25px',
    },
    color: '#ececec !important',
  },
}));
export default useStyles;
