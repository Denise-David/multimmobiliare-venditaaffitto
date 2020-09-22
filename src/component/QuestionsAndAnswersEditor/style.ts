// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({

  bordi: {
    margin: theme.spacing(4),
  },
  bordiCard: {
    margin: theme.spacing(1),
  },
  NavColor: {
    background: theme.palette.primary.main,
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
  space: {
    marginRight: theme.spacing(57),
  },
  spaceleft: {
    marginLeft: theme.spacing(57),
  },
  bordiCardRisposte: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(4),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },

}));
export default useStyles;
