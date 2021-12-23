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
        fontSize: '15px',
        '@media (min-width:600px)': {
          fontSize: '25px',
        },
      },
      h4: {
        fontWeight: 300,
        fontSize: '12px',
        '@media (min-width:600px)': {
          fontSize: '15px',
        },
      },
      h1: {
        fontWeight: 300,
        fontSize: '30px',
        '@media (min-width:600px)': {
          fontSize: '60px',
        },
      },
      h2: {
        fontSize: '22px',
        '@media (min-width:600px)': {
          fontSize: '44px',
        },
      },
      h3: {
        fontWeight: 300,
        fontSize: '17px',
        '@media (min-width:600px)': {
          fontSize: '20px',
        },

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
    MuiIconButton: {
      root: {
        padding: '0px',
        '@media (min-width:600px)': {
          padding: '12px',
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
