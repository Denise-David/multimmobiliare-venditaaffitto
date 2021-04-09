import { createMuiTheme } from '@material-ui/core/styles';

const montserrat = 'Montserrat, sans-serif';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b1c1d',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'none',

  },
  overrides: {
    MuiInputBase: {
      root: {
        color: 'white',

      },
      outlined: {
        color: 'white',

      },
      MuiInputLabel: {
        root: {
          color: 'white',
        },
      },
    },

    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: 'white',
      },
      root: {
        Mui: {
          focused: {
            borderColor: 'white',
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
