import { createMuiTheme } from '@material-ui/core/styles';

const montserrat = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 300,
};

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
    fontWeightLight: '300',

  },
  overrides: {
    MuiButtonContained: {

      backgroundColor: '#B50717',
    },
    MuiTypography: {
      body1: {
        fontWeight: 300,
      },
      h4: {
        fontWeight: 300,
      },
      h1: {
        fontWeight: 300,
      },
      h2: {
        fontWeight: 300,
      },
      h3: {
        fontWeight: 300,
      },
      h5: {
        fontWeight: 300,
      },
      h6: {
        fontWeight: 300,
      },

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
      borderColor: '#ECECEC',
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
