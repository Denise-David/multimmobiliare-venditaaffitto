// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({

  margini: {
    margin: theme.spacing(4),
  },
  cornice:
  {
    border: '1px solid',
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  titolo: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(5),
  },

}));
export default useStyles;
