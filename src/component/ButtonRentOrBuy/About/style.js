// eslint-disable-next-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  color: {
    color: theme.palette.secondary.main,
  },
  img: {
    transform: 'rotate(180deg)',
  },
}));
export default useStyles;
