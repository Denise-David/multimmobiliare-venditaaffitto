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
    minWidth: '18em',
    color: '#ECECEC',

  },
  icon: {
    fill: '#131313',
  },

  text: {
    color: '#1d1d1d',
  },
  slider: {
    maxWidth: '36em',
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
    fontSize: 17,
    '&$cssFocused $notchedOutline': {
      borderColor: '#131313 !important',
    },

  },
  labelRoot: {
    fontSize: 25,
    color: '#ECECEC !important',
    backgroundColor: 'black',
    marginTop: '-5px',
    paddingRight: '5px',
    '&$labelFocused': {
      color: '#ECECEC !important',
    },
  },
  labelFocused: {
    fontSize: 20,
    color: '#ECECEC !important',
  },

  clusterMarker2: {
    color: '#fff',
    background: '#b50717',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  },
  clusterMarker3: {
    color: '#fff',
    backgroundImage: 'url("https://api.multimmobiliare.com/img/house.png")',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundPosition: 'center center',

  },
  markerImage: {
    backgroundSize: 'cover',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundPosition: 'center center',
    '&:hover': {
      transform: 'scale(1.3, 1.3)',
      cursor: 'pointer',
      zIndex: '9999',
    },
  },

  opacity: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    opacity: '0',
    '&:hover': {
      opacity: '1',
    },
  },
}));
export default useStyles;
