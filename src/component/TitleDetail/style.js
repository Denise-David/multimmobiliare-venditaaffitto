// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderRadius: '0.5em',
    marginBottom: '1em',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
  },
  divider: {
    // Theme Color, or use css color in quote
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },

  },

  paper: {
    position: 'sticky',
    minWidth: '15em',
    padding: '1em',
    minHeight: '40em',
    background: theme.palette.primary.main,
    color: 'lightgrey',
    '&:hover': {
      transform: 'scale(1.07, 1.07)',
      cursor: 'pointer',
    },
  },

  padding: {
    paddingRight: '0.2em',

  },

  price: {
    fontWeight: 'bold',
  },

  margin: {
    margin: '0.5em',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  div1: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: '15px',
  },
  button: {
    fontSize: '20px',
    backgroundColor: '#B50717',
    color: '#ECECEC',
    '&:hover': {
      backgroundColor: '#CF291d',
      color: '#ECECEC',
    },
  },
  div3: {
    display: 'flex',
    alignItems: 'left',
    flexWrap: 'wrap',

  },
  div2: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: '30px',
  },
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  media2: {
    borderRadius: '0.5em',
    marginBottom: '1em',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    opacity: '60%',
    objectFit: 'cover',
    height: '300px',

  },
  labelRoot: {
    fontSize: 25,
    color: '#ECECEC !important',
    backgroundColor: '#1d1d1d',
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
