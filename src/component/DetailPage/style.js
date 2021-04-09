// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  media: {
    borderRadius: '0.5em',
    marginBottom: '1em',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    opacity: '60%',
    objectFit: 'cover',
    height: '500px',
    marginRight: '5%',
    marginLeft: '5%',

  },
  iconNext: {
    fontSize: '60px',

  },

  margin: {
    margin: '0.5em',
  },
  icon: {
    paddingTop: '56.25%', // 16:9
    borderRadius: '0.5em',
    marginBottom: '1em',
    margin: '1em',
  },
  /* Container holding the image and the text */
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },

  },

  /* Centered text */
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: '30px',
  },

}));
export default useStyles;
