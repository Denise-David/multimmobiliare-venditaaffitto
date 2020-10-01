// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({

  lista: {
    listStyleType: 'none',

  },
  card: {
    display: 'flex',
    alignContent: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  NavColor: {
    background: theme.palette.primary.main,
    padding: '2em',
  },
  center: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  inline: {
    display: 'flex',
  },

  DropDownList: {
    minWidth: '100px',

  },
  risposta: {
    display: 'inline-block',
    marginRight: '1em',
    marginLeft: 'auto',
  },
  rispostaDrop: {
    display: 'inline-block',
    marginRight: '1em',
    marginLeft: 'auto',

  },

  container: {
    padding: theme.spacing(1),
  },

  Titolo: {
    background: theme.palette.primary.main,
    borderRadius: '0.2em',
    color: 'white',
  },

  centerButton: {
    textAlign: 'center',
  },

  contentCard: {
    display: 'inline-block',
    marginRight: 'auto',
    marginLeft: 'auto',

  },
  Icon: {
    marginBottom: theme.spacing(4),
  },

  button: {
    margin: theme.spacing(1),
  },

  bordi: {
    margin: theme.spacing(3),
  },
  margini: {
    margin: theme.spacing(3),
  },
}));
export default useStyles;
