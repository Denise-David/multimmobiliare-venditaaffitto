import { createMuiTheme } from '@material-ui/core/styles';

const montserrat = 'Montserrat, sans-serif';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b1c1d',
    },
    secondary: {
      main: '#CECECE ',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'none',

  },
  overrides: {
    MuiButtonContained: {

      backgroundColor: '#B50717',
    },
    MuiInputBase: {
      root: {
        color: '##131313',

      },
      outlined: {
        color: '#131313',

      },
      MuiInputLabel: {
        root: {
          color: '#ECECEC',
          fontSize: '25',

        },
      },

    },

    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#ECECEC',
      },
      root: {
        Mui: {
          focused: {
            borderColor: '#ECECEC',
          },
        },
      },

    },

  },
  MuiCssBaseline: {
    '@global': {
      '@font-face': [montserrat],
    },
  },
});

export default theme;
