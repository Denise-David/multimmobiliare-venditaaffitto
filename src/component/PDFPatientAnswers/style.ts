// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
import { initializeDomande } from '../../store/slice/editFormSlice';
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
  center: {
    textAlign: 'center',
  },
  risultatoSpace: {
    marginTop: theme.spacing(15),
  },

}));
export default useStyles;
