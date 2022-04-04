import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: `"Heebo", sans-serif`,
  },
  palette: {
    primary: {
      main: '#ff6464',
    },
    secondary: {
      light: '#edf7fa',
      main: '#00a8cc',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243d',
      secondary: '#00a8cc',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',

          '&:hover, &.active': {
            color: '#ff6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'large',
      },
    },
  },
});

theme = responsiveFontSizes(theme);
