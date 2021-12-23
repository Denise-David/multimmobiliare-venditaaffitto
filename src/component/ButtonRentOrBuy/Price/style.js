// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  ddl: {
    margin: '1em',
    padding: '1em',
    minWidth: '15em',

  },
  whiteColor: {
    color: '#ECECEC',
    fontSize: '15px',

  },
  prova: {
    width: '18em',
    '@media (min-width:600px)': {
      width: '18em',
    },
    color: '#ECECEC',

  },
  icon: {
    fill: '#131313',
  },

  text: {
    color: '#1d1d1d',
  },
  slider: {
    maxWidth: '25em',
    '@media (min-width:600px)': {
      maxWidth: '36em',
    },
    color: '#ECECEC',
  },
  marginText: {
    marginRight: '3em',
    marginLeft: '3em',
    marginBottom: '2em',
  },
  priceText: {
    marginBottom: '1.5em',
  },
  inputRoot: {
    fontSize: '15px',
    '@media (min-width:600px)': {
      fontSize: '17px',
    },
    '&$cssFocused $notchedOutline': {
      borderColor: '#131313 !important',
    },

  },
  labelRoot: {
    fontSize: '15px',
    '@media (min-width:600px)': {
      fontSize: '25px',
    },
    color: '#ECECEC !important',
    backgroundColor: 'black',
    marginTop: '-5px',
    paddingRight: '10px',
    paddingBottom: '10px',
    '&$labelFocused': {
      color: '#ECECEC !important',
    },
  },
  labelFocused: {
    fontSize: '15px',
    '@media (min-width:600px)': {
      fontSize: '25px',
    },
    color: '#ECECEC !important',
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#ECECEC !important',
  },

  button: {
    fontSize: '12px',
    '@media (min-width:600px)': {
      fontSize: '25px',
    },
  },
}));
export default useStyles;
