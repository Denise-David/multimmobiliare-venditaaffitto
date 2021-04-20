// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: '#000000',
    padding: '1em',
  },
  text: {
    color: '#ECECEC',
    textTransform: 'none',
  },
  text2: {
    color: '#ECECEC',
    floatingLabelFocusStyle: {
      color: '#ECECEC',
    },
  },
  prova: {
    color: '#ECECEC',
  },
  button: {
    backgroundColor: '#B50717',
    color: '#ECECEC',
    '&:hover': {
      backgroundColor: '#CF291d',
      color: '#ECECEC',
    },
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
}));
export default useStyles;
