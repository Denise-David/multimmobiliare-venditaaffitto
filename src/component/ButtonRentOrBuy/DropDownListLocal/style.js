// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  ddl: {
    margin: '1em',
    padding: '1em',
    minWidth: '18em',
    '@media (min-width:600px)': {
      minWidth: '20em',
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
    minWidth: '200px',
    color: '#ECECEC',
  },
  icon: {
    fill: '#ECECEC',
  },
  labelRoot: {
    minWidth: '18em',
    '@media (min-width:600px)': {
      minWidth: '18em',
    },
    color: '#ECECEC !important',
    backgroundColor: 'black',
    marginTop: '-5px',
    paddingRight: '5px',
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
}));
export default useStyles;
