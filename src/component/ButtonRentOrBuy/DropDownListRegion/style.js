// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  ddl: {
    margin: '1em',
    padding: '1em',
  },
  whiteColor: {
    color: '',
    fontSize: '20px',
    marginLeft: '23px',

  },
  prova: {
    maxWidth: '18em',
    color: '#131313',

  },
  icon: {
    fill: '#131313',
  },
  text: {
    color: '#131313',
    fontSize: '18px',
  },
  inputRoot: {
    fontSize: 20,
    '&$cssFocused $notchedOutline': {
      borderColor: '#131313 !important',
    },

  },
  labelRoot: {
    fontSize: 25,
    color: '#ECECEC !important',
    backgroundColor: '#000000',
    marginTop: '-5px',
    paddingRight: '5px',
    '&$labelFocused': {
      color: '#ECECEC !important',
    },
  },
  labelFocused: {
    fontSize: 25,
    color: '#1d1d1d !important',
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#131313 !important',
  },
  option: {
    // Hover
    '&[data-focus="true"]': {
      backgroundColor: '#F8F8F8',
      borderColor: '#131313',
    },
    // Selected
    '&[aria-selected="true"]': {
      backgroundColor: theme.palette.grey.A200,
      borderColor: '#131313',
    },
  },
  inputRoot2: {
    color: 'purple',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green !important',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red !important',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'purple !important',
    },
  },
}));
export default useStyles;
