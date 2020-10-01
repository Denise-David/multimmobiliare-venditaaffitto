// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({

  padding: {
    padding: theme.spacing(2),

  },
  paddingGeneral: {
    padding: theme.spacing(4),

  },
  margin: {
    margin: theme.spacing(1),
  },
  listGroup: {
    maxHeight: '700px',
    height: '700px',
    margin: theme.spacing(2),
  },
}));
export default useStyles;
