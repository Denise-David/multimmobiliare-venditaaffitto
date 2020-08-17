// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({

  margin: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  content: {
    padding: theme.spacing(4),
  },

  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  NavColor: {
    background: theme.palette.secondary.main,
    padding: '2em',
    marginBottom: theme.spacing(2),
    borderRadius: '0.5em',
  },

  padding: {
    padding: theme.spacing(3),
  },

  marginDivider: {
    marginBottom: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(2),
  },

}));
export default useStyles;
