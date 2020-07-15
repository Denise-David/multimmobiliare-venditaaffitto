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

  },
  NavColor: {
    background: theme.palette.primary.main,
    padding: '2em',
  },
  center: {
    display: 'inline-block',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

}));
export default useStyles;
