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

  paper: {
    minWidth: '15em',
    margin: '2em',
    padding: '1em',
    background: theme.palette.primary.main,
    color: 'lightgrey',
    '&:hover': {
      transform: 'scale(1.07, 1.07)',
      cursor: 'pointer',
    },
  },

  padding: {
    padding: '0.5em',
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

}));
export default useStyles;
