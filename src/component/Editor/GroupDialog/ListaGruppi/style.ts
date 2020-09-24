// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({

  margin: {
    margin: theme.spacing(2),
    minWidth: '150px',
  },
  marginButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  group: {
    margin: theme.spacing(2),
    outlineStyle: 'solid',
    outlineWidth: '1px',

  },
  listGroup: {
    maxHeight: '300px',
    height: '300px',
    margin: theme.spacing(2)
    ,
  },
  selected: {
    backgroundColor: theme.palette.secondary.main,
  },
  dialog: {
    padding: theme.spacing(4),
  },

}));
export default useStyles;
