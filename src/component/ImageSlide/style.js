/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: '56.25%', // 16:9
    borderWidth: '2px',
    width: window.innerWidth / 2.2,
    '@media (min-width:600px)': {
      width: window.innerWidth / 3.1,
    },
    margin: window.innerWidth / 300,
  },
  iconNext: {
    fontSize: '60px',
    color: 'white',

  },

  margin: {
    margin: '0.5em',
  },
  media2: {
    borderRadius: '0.5em',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    marginRight: 'Auto',
    marginLeft: 'Auto',
    maxHeight: window.screen.height / 1.35,
    width: 'Auto',
    display: 'block',

  },
  divider: {
    // Theme Color, or use css color in quote
    backgroundColor: theme.palette.secondary.main,
  },

}));
export default useStyles;
